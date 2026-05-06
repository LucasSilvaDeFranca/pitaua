interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
  label?: string;
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = false,
  light = false,
  label,
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {label && (
        <p
          className={`text-xs font-medium tracking-[0.2em] uppercase mb-4 ${
            light ? "text-pitaua-earth-light" : "text-pitaua-earth"
          }`}
        >
          {label}
        </p>
      )}
      <h2
        className={`text-3xl sm:text-4xl font-light italic leading-tight ${
          light ? "text-pitaua-cream" : "text-pitaua-dark"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
            light ? "text-pitaua-cream/65" : "text-pitaua-dark/60"
          }`}
        >
          {subtitle}
        </p>
      )}
      <div
        className={`mt-5 h-px w-12 ${centered ? "mx-auto" : ""}`}
        style={{
          background: "linear-gradient(to right, var(--color-pitaua-earth), transparent)",
        }}
      />
    </div>
  );
}
