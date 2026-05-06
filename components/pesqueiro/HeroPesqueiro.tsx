import Image from "next/image";
import Link from "next/link";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { pesqueiroContent } from "@/lib/content/pesqueiro";

export function HeroPesqueiro() {
  const { hero } = pesqueiroContent;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-pitaua-ink grain-overlay"
      aria-label="Pesqueiro Pitauá"
    >
      <Image
        src="/images/pesqueiro/hero-pesqueiro.jpg"
        alt="Pesqueiro Pitauá em Socorro-SP — lago de pesca esportiva"
        fill
        priority
        sizes="100vw"
        className="object-cover hero-zoom-in"
      />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="relative z-10 px-6 sm:px-10 pb-20 pt-36 max-w-7xl mx-auto w-full">
        <div className="stagger">
          <p className="font-display text-pitaua-ochre text-xs font-normal tracking-[0.3em] uppercase mb-5">
            Pesca Esportiva · Socorro-SP
          </p>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-light italic text-pitaua-paper leading-[0.95] mb-6 max-w-3xl">
            {hero.title}
          </h1>
          <div className="gold-rule w-16 mb-6" />
          <p className="text-pitaua-paper/70 text-lg max-w-xl leading-relaxed font-light mb-10">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.pesqueiro)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#1da851] transition-all"
            >
              {hero.cta}
            </a>
            <Link
              href="#experiencia"
              className="inline-flex items-center px-7 py-3.5 border border-pitaua-paper/20 text-pitaua-paper/75 text-sm font-medium rounded-full hover:border-pitaua-paper/50 hover:text-pitaua-paper transition-all"
            >
              Saiba mais
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
