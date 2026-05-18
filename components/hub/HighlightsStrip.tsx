import {
  BedDouble, UtensilsCrossed, Fish, Trees, Baby, PartyPopper,
} from "lucide-react";
import { hubContent } from "@/lib/content/hub";

const iconMap: Record<string, React.ElementType> = {
  BedDouble, UtensilsCrossed, Fish, Trees, Baby, PartyPopper,
};

export function HighlightsStrip() {
  const { highlights } = hubContent;

  return (
    <section
      className="bg-pitaua-surface py-20 sm:py-24"
      aria-labelledby="highlights-heading"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <p className="text-pitaua-earth text-xs font-medium tracking-[0.2em] uppercase text-center mb-3">
          Estrutura
        </p>
        <h2
          id="highlights-heading"
          className="text-3xl sm:text-4xl font-light italic text-pitaua-cream text-center mb-16"
        >
          Tudo em um só lugar
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 lg:gap-2">
          {highlights.map((item, i) => {
            const Icon = iconMap[item.icon] || BedDouble;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center gap-4 p-4"
              >
                <div className="w-12 h-12 rounded-xl border border-pitaua-border flex items-center justify-center bg-pitaua-dark/50">
                  <Icon size={20} className="text-pitaua-earth-light" aria-hidden />
                </div>
                <span className="text-pitaua-cream/60 text-xs font-medium leading-snug tracking-wide">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>

        <div className="gold-rule mt-16 max-w-xs mx-auto" />
      </div>
    </section>
  );
}
