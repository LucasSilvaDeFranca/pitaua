import { hubContent } from "@/lib/content/hub";

export function AboutSection() {
  const { about } = hubContent;

  return (
    <section
      className="bg-pitaua-light py-24 sm:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* Left: text */}
          <div>
            <p className="text-pitaua-earth text-xs font-medium tracking-[0.2em] uppercase mb-6">
              Sobre o Pitauá
            </p>
            <h2
              id="about-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-light italic text-pitaua-dark leading-[1.05] mb-8"
            >
              {about.title}
            </h2>
            <div className="gold-rule w-16 mb-8" />
            <div className="space-y-6 text-pitaua-dark/65 text-lg leading-relaxed font-light">
              {about.text.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Right: stats as editorial blocks */}
          <div className="space-y-0 pt-4 lg:pt-16">
            {about.stats.map((stat, i) => (
              <div
                key={i}
                className={`flex items-end gap-6 py-8 ${
                  i < about.stats.length - 1 ? "border-b border-pitaua-dark/10" : ""
                }`}
              >
                <span className="text-6xl sm:text-7xl font-light italic text-pitaua-earth leading-none font-heading w-28 shrink-0 text-right">
                  {stat.value}
                </span>
                <span className="text-pitaua-dark/50 text-sm uppercase tracking-widest pb-2">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
