interface BrandWordmarkProps {
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  tone?: "ink" | "paper";
  withRegistered?: boolean;
  className?: string;
}

const sizeClasses: Record<NonNullable<BrandWordmarkProps["size"]>, string> = {
  xs: "text-xs tracking-[0.2em]",
  sm: "text-base sm:text-lg tracking-[0.18em]",
  md: "text-2xl sm:text-3xl tracking-[0.12em]",
  lg: "text-4xl sm:text-5xl tracking-[0.08em]",
  xl: "text-[clamp(3.5rem,10vw,8rem)] tracking-[0.04em]",
};

const toneClasses: Record<NonNullable<BrandWordmarkProps["tone"]>, string> = {
  ink: "text-pitaua-ink",
  paper: "text-pitaua-paper",
};

export function BrandWordmark({
  size = "md",
  tone = "ink",
  withRegistered = false,
  className = "",
}: BrandWordmarkProps) {
  return (
    <span
      className={`font-display font-black leading-none ${sizeClasses[size]} ${toneClasses[tone]} ${className}`}
      aria-label="Pitauá"
    >
      PITAUÁ
      {withRegistered && (
        <sup
          className="text-[0.4em] font-normal align-super ml-0.5 opacity-70"
          aria-hidden
        >
          ®
        </sup>
      )}
    </span>
  );
}
