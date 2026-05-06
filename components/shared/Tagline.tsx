interface TaglineProps {
  size?: "sm" | "md" | "lg";
  tone?: "ink" | "ochre" | "paper";
  className?: string;
}

const sizeClasses: Record<NonNullable<TaglineProps["size"]>, string> = {
  sm: "text-base",
  md: "text-2xl",
  lg: "text-[clamp(1.75rem,3vw,2.75rem)]",
};

const toneClasses: Record<NonNullable<TaglineProps["tone"]>, string> = {
  ink: "text-pitaua-ink",
  ochre: "text-pitaua-ochre",
  paper: "text-pitaua-paper",
};

export function Tagline({
  size = "md",
  tone = "ochre",
  className = "",
}: TaglineProps) {
  return (
    <span
      className={`font-script leading-none ${sizeClasses[size]} ${toneClasses[tone]} ${className}`}
    >
      Raízes do Interior
    </span>
  );
}
