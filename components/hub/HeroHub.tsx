import Link from "next/link";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { BrandWordmark } from "@/components/shared/BrandWordmark";
import { Tagline } from "@/components/shared/Tagline";

export function HeroHub() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-pitaua-ink grain-overlay"
      aria-label="Bem-vindo ao Pitauá"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src="/videos/hero-pitaua.mp4"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        aria-hidden
      />

      {/* Darkening overlay to keep text readable on top of the video */}
      <div className="hero-overlay absolute inset-0" aria-hidden />

      {/* Top badge */}
      <div className="absolute top-24 left-1/2 -translate-x-1/2 z-10">
        <span
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-xs font-medium tracking-[0.2em] uppercase border border-pitaua-earth/30 text-pitaua-ochre bg-pitaua-earth/10 backdrop-blur-sm"
          style={{ animation: "fade-in 1s ease-out 0.3s both" }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-pitaua-sun inline-block" aria-hidden />
          Socorro · SP · Brasil
        </span>
      </div>

      {/* Main content */}
      <div className="relative z-10 px-6 sm:px-10 pb-20 pt-36 max-w-7xl mx-auto w-full">
        <div className="stagger max-w-5xl">
          <p className="font-display text-pitaua-ochre text-xs sm:text-sm font-normal tracking-[0.3em] uppercase mb-5">
            Centro de Lazer
          </p>

          <h1 className="leading-[0.95] mb-3">
            <BrandWordmark size="xl" tone="paper" withRegistered />
          </h1>

          <Tagline size="lg" tone="ochre" className="block mb-8" />

          <div className="gold-rule w-24 mb-8" />

          <p className="text-pitaua-paper/70 text-lg sm:text-xl max-w-xl leading-relaxed font-light mb-10">
            Natureza, lazer e acolhimento em Socorro-SP — um único lugar com quatro experiências inesquecíveis.
          </p>

          <div className="flex flex-wrap gap-3">
            <Link
              href="#areas"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-pitaua-earth text-pitaua-ink text-sm font-medium rounded-full hover:bg-pitaua-ochre transition-all duration-300 hover:gap-4"
            >
              Explorar o Pitauá
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-pitaua-paper/20 text-pitaua-paper/80 text-sm font-medium rounded-full hover:border-pitaua-paper/50 hover:text-pitaua-paper transition-all duration-300 backdrop-blur-sm"
            >
              Fale conosco
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="mt-16 pt-8 border-t border-pitaua-paper/10 grid grid-cols-3 gap-6 max-w-md"
          style={{ animation: "fade-up 0.7s cubic-bezier(.22,1,.36,1) 0.6s both" }}
        >
          {[
            { n: "15", label: "quartos" },
            { n: "4",  label: "frentes de lazer" },
            { n: "∞",  label: "memórias" },
          ].map((stat) => (
            <div key={stat.label}>
              <span className="block text-3xl sm:text-4xl font-light italic text-pitaua-ochre font-heading">
                {stat.n}
              </span>
              <span className="block text-xs text-pitaua-paper/60 mt-1 uppercase tracking-wider">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#areas"
        className="absolute bottom-8 right-8 z-10 flex flex-col items-center gap-2 text-pitaua-paper/40 hover:text-pitaua-paper/80 transition-colors"
        aria-label="Ver as áreas"
      >
        <span
          className="text-[10px] tracking-[0.2em] uppercase rotate-90 origin-right translate-y-6"
          aria-hidden
        >
          scroll
        </span>
        <span className="w-px h-12 bg-gradient-to-b from-transparent to-pitaua-paper/30 mx-auto" aria-hidden />
      </a>
    </section>
  );
}
