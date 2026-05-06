import { ImageIcon } from "lucide-react";

interface ImagePlaceholderProps {
  label: string;
  className?: string;
  aspectRatio?: "video" | "square" | "portrait" | "wide";
}

const aspectClasses = {
  video:   "aspect-video",
  square:  "aspect-square",
  portrait:"aspect-[3/4]",
  wide:    "aspect-[21/9]",
};

export function ImagePlaceholder({
  label,
  className = "",
  aspectRatio = "video",
}: ImagePlaceholderProps) {
  return (
    <div
      className={`image-placeholder ${aspectClasses[aspectRatio]} w-full rounded-2xl overflow-hidden ${className}`}
      role="img"
      aria-label={label}
    >
      <ImageIcon size={28} className="mb-2 opacity-30" aria-hidden />
      <span className="text-[11px] text-center opacity-50 max-w-[200px] leading-snug">
        📷 {label}
      </span>
    </div>
  );
}
