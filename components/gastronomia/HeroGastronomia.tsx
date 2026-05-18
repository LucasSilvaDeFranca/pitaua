import Link from "next/link";
import { gastronomiaContent } from "@/lib/content/gastronomia";
import { HeroSlideshow } from "@/components/shared/HeroSlideshow";

const heroImages = [
  {
    src: "/images/gastronomia/hero/porcao.jpg",
    alt: "Porção típica do Restaurante Pitauá em Socorro-SP servida em mesa de madeira",
  },
  {
    src: "/images/gastronomia/hero/vista.jpg",
    alt: "Vista do Restaurante Pitauá em Socorro-SP — espaço integrado à natureza",
  },
];

export function HeroGastronomia() {
  const { hero } = gastronomiaContent;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-pitaua-ink grain-overlay"
      aria-label="Restaurante Pitauá"
    >
      <HeroSlideshow images={heroImages} intervalMs={5500} />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="relative z-10 px-6 sm:px-10 pb-20 pt-36 max-w-7xl mx-auto w-full">
        <div className="stagger">
          <p className="font-display text-pitaua-orange text-xs font-normal tracking-[0.3em] uppercase mb-5">
            Restaurante · Socorro-SP
          </p>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-light italic text-pitaua-paper leading-[0.95] mb-6 max-w-3xl">
            {hero.title}
          </h1>
          <div className="rule-gastronomia h-px w-16 mb-6" />
          <p className="text-pitaua-paper/70 text-lg max-w-xl leading-relaxed font-light mb-10">
            {hero.subtitle}
          </p>
          <Link
            href="/gastronomia/cardapio"
            className="inline-flex items-center gap-2 px-7 py-3.5 border border-pitaua-paper/30 text-pitaua-paper/85 text-sm font-medium rounded-full hover:border-pitaua-paper/60 hover:text-pitaua-paper hover:bg-pitaua-paper/5 backdrop-blur-sm transition-all"
          >
            {hero.cta}
          </Link>
        </div>
      </div>
    </section>
  );
}
