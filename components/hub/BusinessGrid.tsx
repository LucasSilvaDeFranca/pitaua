import Link from "next/link";
import { hubContent } from "@/lib/content/hub";

const cardConfig = [
  {
    id: "pousada",
    bg: "from-pitaua-border via-pitaua-ink to-pitaua-surface",
    accent: "#B98D3F", // earth — institutional gold
    number: "01",
  },
  {
    id: "gastronomia",
    bg: "from-pitaua-surface via-pitaua-ink to-pitaua-border",
    accent: "#D69A3C", // ochre — culinary warmth
    number: "02",
  },
  {
    id: "pesqueiro",
    bg: "from-pitaua-ink via-pitaua-surface to-[#1a1208]",
    accent: "#F1B434", // sun — bright accent
    number: "03",
  },
  {
    id: "eventos",
    bg: "from-pitaua-border via-pitaua-ink to-pitaua-surface",
    accent: "#E2D6BC", // rule cream — refined celebration
    number: "04",
  },
];

export function BusinessGrid() {
  const { businesses } = hubContent;

  return (
    <section
      id="areas"
      className="bg-pitaua-dark py-6 px-4 sm:px-6"
      aria-labelledby="areas-heading"
    >
      <h2 id="areas-heading" className="sr-only">Nossas áreas</h2>

      {/* Desktop: editorial asymmetric layout | Mobile: 2×2 grid */}
      <div className="max-w-7xl mx-auto">

        {/* Mobile grid */}
        <div className="grid grid-cols-2 gap-3 lg:hidden">
          {businesses.map((biz, i) => {
            const cfg = cardConfig[i];
            return (
              <Link
                key={biz.id}
                href={biz.href}
                className={`business-card group relative overflow-hidden rounded-2xl min-h-[200px] sm:min-h-[260px] flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cfg.bg} transition-transform duration-700 group-hover:scale-105`} aria-hidden />
                <div className="business-card-overlay absolute inset-0" aria-hidden />
                <div className="relative z-10 p-4 sm:p-5">
                  <span className="block text-[10px] font-medium tracking-[0.2em] uppercase mb-1.5" style={{ color: cfg.accent }}>
                    {cfg.number}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-light italic text-white leading-tight mb-1">
                    {biz.title}
                  </h3>
                  <p className="text-white/50 text-xs hidden sm:block">{biz.description}</p>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Desktop: asymmetric editorial grid */}
        <div className="hidden lg:grid grid-cols-12 grid-rows-2 gap-4 h-[680px]">
          {/* Pousada — tall left card */}
          {(() => {
            const biz = businesses[0];
            const cfg = cardConfig[0];
            return (
              <Link
                href={biz.href}
                className="business-card group col-span-5 row-span-2 relative overflow-hidden rounded-2xl flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth"
                aria-label={`${biz.title} — ${biz.description}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cfg.bg} transition-transform duration-700 group-hover:scale-[1.03]`} aria-hidden />
                <div className="business-card-overlay absolute inset-0" aria-hidden />
                <div className="relative z-10 p-8">
                  <span className="block text-xs font-medium tracking-[0.2em] uppercase mb-3" style={{ color: cfg.accent }}>
                    {cfg.number} — {biz.title}
                  </span>
                  <h3 className="text-4xl font-light italic text-white leading-tight mb-3">
                    {biz.title}
                  </h3>
                  <div className="w-8 h-px bg-white/30 mb-3" />
                  <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
                    {biz.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-white/70 text-xs font-medium group-hover:text-white group-hover:gap-3 transition-all">
                    {biz.cta}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })()}

          {/* Gastronomia — top right medium */}
          {(() => {
            const biz = businesses[1];
            const cfg = cardConfig[1];
            return (
              <Link
                href={biz.href}
                className="business-card group col-span-4 row-span-1 relative overflow-hidden rounded-2xl flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth"
                aria-label={`${biz.title} — ${biz.description}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cfg.bg} transition-transform duration-700 group-hover:scale-[1.04]`} aria-hidden />
                <div className="business-card-overlay absolute inset-0" aria-hidden />
                <div className="relative z-10 p-6">
                  <span className="block text-[10px] font-medium tracking-[0.2em] uppercase mb-2" style={{ color: cfg.accent }}>
                    {cfg.number}
                  </span>
                  <h3 className="text-2xl font-light italic text-white mb-1">{biz.title}</h3>
                  <p className="text-white/50 text-xs">{biz.description}</p>
                </div>
              </Link>
            );
          })()}

          {/* Pesqueiro — top far right narrow */}
          {(() => {
            const biz = businesses[2];
            const cfg = cardConfig[2];
            return (
              <Link
                href={biz.href}
                className="business-card group col-span-3 row-span-1 relative overflow-hidden rounded-2xl flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth"
                aria-label={`${biz.title} — ${biz.description}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cfg.bg} transition-transform duration-700 group-hover:scale-[1.04]`} aria-hidden />
                <div className="business-card-overlay absolute inset-0" aria-hidden />
                <div className="relative z-10 p-6">
                  <span className="block text-[10px] font-medium tracking-[0.2em] uppercase mb-2" style={{ color: cfg.accent }}>
                    {cfg.number}
                  </span>
                  <h3 className="text-2xl font-light italic text-white mb-1">{biz.title}</h3>
                  <p className="text-white/50 text-xs">{biz.description}</p>
                </div>
              </Link>
            );
          })()}

          {/* Eventos — bottom right wide */}
          {(() => {
            const biz = businesses[3];
            const cfg = cardConfig[3];
            return (
              <Link
                href={biz.href}
                className="business-card group col-span-7 row-span-1 relative overflow-hidden rounded-2xl flex flex-col justify-end focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth"
                aria-label={`${biz.title} — ${biz.description}`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${cfg.bg} transition-transform duration-700 group-hover:scale-[1.03]`} aria-hidden />
                <div className="business-card-overlay absolute inset-0" aria-hidden />
                <div className="relative z-10 p-6 flex items-end justify-between">
                  <div>
                    <span className="block text-[10px] font-medium tracking-[0.2em] uppercase mb-2" style={{ color: cfg.accent }}>
                      {cfg.number}
                    </span>
                    <h3 className="text-2xl font-light italic text-white mb-1">{biz.title}</h3>
                    <p className="text-white/50 text-xs">{biz.description}</p>
                  </div>
                  <span className="inline-flex items-center gap-2 text-white/60 text-xs font-medium group-hover:text-white group-hover:gap-3 transition-all shrink-0 ml-6">
                    {biz.cta}
                    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                      <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })()}
        </div>
      </div>
    </section>
  );
}
