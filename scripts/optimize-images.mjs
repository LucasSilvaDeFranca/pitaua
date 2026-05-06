import sharp from "sharp";
import heicConvert from "heic-convert";
import {
  readdir,
  stat,
  mkdir,
  copyFile,
  writeFile,
  readFile,
  open,
} from "node:fs/promises";
import { constants as fsConstants } from "node:fs";
import { join, dirname, relative, extname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..", "public", "images");
const BACKUP = join(__dirname, "..", "public", "images", ".backup");

const MIN_BYTES = 500 * 1024;
const MAX_WIDTH = 1920;
const JPEG_QUALITY = 82;
const PNG_QUALITY = 85;

async function* walk(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    if (entry.name === ".backup") continue;
    const path = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(path);
    else yield path;
  }
}

const fmt = (n) => (n / 1024 / 1024).toFixed(2).padStart(6) + " MB";

async function detectActualFormat(file) {
  const fh = await open(file, "r");
  const { buffer } = await fh.read({ buffer: Buffer.alloc(16), position: 0 });
  await fh.close();
  const ascii = buffer.toString("ascii", 4, 12);
  if (ascii.startsWith("ftyp")) return "heic";
  if (buffer.toString("hex").toUpperCase().startsWith("FFD8FF")) return "jpeg";
  if (buffer.toString("hex").toUpperCase().startsWith("89504E47")) return "png";
  return "unknown";
}

async function safeBackup(file, backupPath) {
  await mkdir(dirname(backupPath), { recursive: true });
  try {
    await copyFile(file, backupPath, fsConstants.COPYFILE_EXCL);
  } catch (err) {
    if (err.code !== "EEXIST") throw err;
  }
}

async function optimize(file) {
  const ext = extname(file).toLowerCase();
  if (![".jpg", ".jpeg", ".png"].includes(ext)) return null;

  const before = (await stat(file)).size;
  if (before < MIN_BYTES) return null;

  const rel = relative(ROOT, file);
  await safeBackup(file, join(BACKUP, rel));

  const actual = await detectActualFormat(file);
  let inputBuffer;
  let note = "";
  if (actual === "heic") {
    const heic = await readFile(file);
    inputBuffer = Buffer.from(
      await heicConvert({ buffer: heic, format: "JPEG", quality: 0.95 })
    );
    note = " (HEIC→JPEG)";
  } else {
    inputBuffer = await readFile(file);
  }

  const meta = await sharp(inputBuffer).metadata();
  let pipeline = sharp(inputBuffer).rotate();
  if (meta.width && meta.width > MAX_WIDTH) {
    pipeline = pipeline.resize({ width: MAX_WIDTH, withoutEnlargement: true });
  }
  pipeline =
    ext === ".png"
      ? pipeline.png({ compressionLevel: 9, palette: true, quality: PNG_QUALITY })
      : pipeline.jpeg({ quality: JPEG_QUALITY, mozjpeg: true });

  const buf = await pipeline.toBuffer();
  await writeFile(file, buf);

  return { rel, before, after: buf.length, note };
}

async function main() {
  console.log(`Scanning ${ROOT}\n`);
  let totalBefore = 0;
  let totalAfter = 0;
  let count = 0;

  for await (const file of walk(ROOT)) {
    const r = await optimize(file);
    if (!r) continue;
    count++;
    totalBefore += r.before;
    totalAfter += r.after;
    const pct = (((r.before - r.after) / r.before) * 100).toFixed(0);
    console.log(`${r.rel.padEnd(50)} ${fmt(r.before)} → ${fmt(r.after)}  -${pct}%${r.note}`);
  }

  if (!count) {
    console.log("Nothing to optimize (no images >500KB found).");
    return;
  }
  console.log("\n" + "─".repeat(80));
  console.log(`${count} files: ${fmt(totalBefore)} → ${fmt(totalAfter)}  (saved ${fmt(totalBefore - totalAfter)})`);
  console.log(`Originals backed up at: public/images/.backup/`);
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
