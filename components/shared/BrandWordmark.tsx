interface BrandWordmarkProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  tone?: "ink" | "paper" | "earth" | "sun";
  withRegistered?: boolean;
  className?: string;
}

// Tracking ajustado para Antonio Bold (sans condensada).
// Tracking menor que serif: a forma já é compacta e densa por natureza.
const sizeClasses: Record<NonNullable<BrandWordmarkProps["size"]>, string> = {
  xs: "text-xs tracking-[0.16em]",
  sm: "text-base sm:text-lg tracking-[0.14em]",
  md: "text-2xl sm:text-3xl tracking-[0.10em]",
  lg: "text-4xl sm:text-5xl tracking-[0.06em]",
  xl: "text-[clamp(3.5rem,10vw,8rem)] tracking-[0.03em]",
};

const toneClasses: Record<NonNullable<BrandWordmarkProps["tone"]>, string> = {
  ink:   "text-pitaua-ink",
  paper: "text-pitaua-paper",
  earth: "text-pitaua-earth",
  sun:   "text-pitaua-sun",
};

export function BrandWordmark({
  size = "md",
  tone = "ink",
  withRegistered = false,
  className = "",
}: BrandWordmarkProps) {
  return (
    <span
      className={`font-logo font-bold leading-none ${sizeClasses[size]} ${toneClasses[tone]} ${className}`}
      aria-label="Pitauá"
    >
      PITAUÁ
      {withRegistered && (
        <sup
          className="text-[0.28em] font-normal align-super ml-1 opacity-60"
          aria-hidden
        >
          ®
        </sup>
      )}
    </span>
  );
}
