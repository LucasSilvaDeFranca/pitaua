import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";

const SRC =
  "C:\\Users\\lukas\\Downloads\\Pesqueiro-20260506T015540Z-3-001\\Pesqueiro";
const DST = path.resolve("public/images/pesqueiro/galeria");
const MAX = 1920;
const QUALITY = 82;
const SKIP = [
  "Pesqueiro Pitauá - Socorro-SP.jpg",
  "Pesqueiro Pitauá - Socorro.jpg",
];

if (fs.existsSync(DST)) {
  for (const f of fs.readdirSync(DST)) {
    if (/\.jpe?g$/i.test(f)) fs.unlinkSync(path.join(DST, f));
  }
}
fs.mkdirSync(DST, { recursive: true });

const numKey = (name) => {
  const m = name.match(/\((\d+)\)/);
  return m ? parseInt(m[1]) : 0;
};

const files = fs
  .readdirSync(SRC)
  .filter((f) => /\.jpe?g$/i.test(f) && !SKIP.includes(f))
  .sort((a, b) => numKey(a) - numKey(b) || a.localeCompare(b));

console.log(`Candidatos: ${files.length} arquivos\n`);

const buffers = [];
for (const file of files) {
  const inPath = path.join(SRC, file);
  const buf = await sharp(inPath)
    .rotate()
    .resize({
      width: MAX,
      height: MAX,
      fit: "inside",
      withoutEnlargement: true,
    })
    .jpeg({ quality: QUALITY, progressive: true, mozjpeg: true })
    .toBuffer();
  const hash = crypto.createHash("sha1").update(buf).digest("hex");
  buffers.push({ file, buf, hash });
}

const seen = new Set();
const unique = [];
const duplicates = [];
for (const b of buffers) {
  if (seen.has(b.hash)) {
    duplicates.push(b.file);
  } else {
    seen.add(b.hash);
    unique.push(b);
  }
}

if (duplicates.length) {
  console.log("Duplicatas (descartadas):");
  duplicates.forEach((d) => console.log(`  - ${d}`));
  console.log("");
}

for (let i = 0; i < unique.length; i++) {
  const num = String(i + 1).padStart(2, "0");
  const outPath = path.join(DST, `${num}.jpg`);
  fs.writeFileSync(outPath, unique[i].buf);
  console.log(
    `${num}.jpg <- ${unique[i].file}  (${(unique[i].buf.length / 1024).toFixed(0)} KB)`,
  );
}

console.log(`\nFeito: ${unique.length} imagens em ${DST}`);
