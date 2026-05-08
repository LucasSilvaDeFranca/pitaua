import Link from "next/link";
import { BOOKING_URL } from "@/lib/constants";
import { pousadaContent } from "@/lib/content/pousada";
import { HeroSlideshow } from "@/components/shared/HeroSlideshow";

const heroImages = [
  { src: "/images/pousada/hero/01.jpg", alt: "Pousada Pitauá em Socorro-SP — área de lazer" },
  { src: "/images/pousada/hero/02.jpg", alt: "Café da manhã da Pousada Pitauá" },
  { src: "/images/pousada/hero/03.jpg", alt: "Estrutura da Pousada Pitauá em Socorro-SP" },
  { src: "/images/pousada/hero/04.jpg", alt: "Piscina da Pousada Pitauá em Socorro-SP" },
];

export function HeroPousada() {
  const { hero } = pousadaContent;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-pitaua-ink grain-overlay"
      aria-label="Pousada Pitauá"
    >
      {/* Rotating background — masked with radial fade so photo emerges from ink without hard edges */}
      <div
        className="absolute inset-0"
        style={{
          maskImage:
            "radial-gradient(ellipse 95% 85% at 75% 35%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 35%, transparent 92%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 95% 85% at 75% 35%, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.7) 35%, transparent 92%)",
        }}
        aria-hidden
      >
        <HeroSlideshow images={heroImages} intervalMs={4500} />
      </div>

      {/* Subtle ink fade toward bottom-left for text legibility — keeps right/top image-forward */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom right, rgba(48,38,33,0.55) 0%, rgba(48,38,33,0.25) 40%, transparent 75%)",
        }}
        aria-hidden
      />

      {/* Extra bottom darken for CTA/copy region only */}
      <div
        className="absolute inset-x-0 bottom-0 h-1/3 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, transparent 0%, rgba(48,38,33,0.5) 100%)",
        }}
        aria-hidden
      />

      <div className="relative z-10 px-6 sm:px-10 pb-20 pt-36 max-w-7xl mx-auto w-full">
        <div className="stagger">
          <p className="font-display text-pitaua-earth text-xs font-normal tracking-[0.3em] uppercase mb-5">
            Pousada · Socorro-SP
          </p>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-light italic text-pitaua-paper leading-[0.95] mb-6 max-w-3xl">
            {hero.title}
          </h1>
          <div className="rule-pousada h-px w-16 mb-6" />
          <p className="text-pitaua-paper/80 text-lg max-w-xl leading-relaxed font-light mb-10">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={BOOKING_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#1da851] transition-all duration-300"
            >
              {hero.cta}
            </a>
            <Link
              href="#acomodacoes"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-pitaua-paper/30 text-pitaua-paper/85 text-sm font-medium rounded-full hover:border-pitaua-paper/60 hover:text-pitaua-paper hover:bg-pitaua-paper/5 backdrop-blur-sm transition-all"
            >
              Ver acomodações
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
