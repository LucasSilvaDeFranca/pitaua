import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { eventosContent } from "@/lib/content/eventos";

export function HeroEventos() {
  const { hero } = eventosContent;

  return (
    <section
      className="relative min-h-screen flex flex-col justify-end overflow-hidden bg-pitaua-ink grain-overlay"
      aria-label="Eventos Pitauá"
    >
      {/*
        SUBSTITUIR por imagem real:
        <Image src="/images/eventos/hero-eventos.jpg"
          alt="Espaço para eventos no Pitauá em Socorro-SP"
          fill className="object-cover opacity-40" priority sizes="100vw"
        />
        Placeholder: {hero.imagePlaceholder}
      */}
      <div className="absolute inset-0 bg-gradient-to-br from-pitaua-sun/15 via-pitaua-ink to-pitaua-surface" aria-hidden />
      <div className="hero-overlay absolute inset-0" aria-hidden />

      <div className="relative z-10 px-6 sm:px-10 pb-20 pt-36 max-w-7xl mx-auto w-full">
        <div className="stagger">
          <p className="font-display text-pitaua-sun text-xs font-normal tracking-[0.3em] uppercase mb-5">
            Eventos · Socorro-SP
          </p>
          <h1 className="text-[clamp(2.8rem,8vw,6rem)] font-light italic text-pitaua-paper leading-[0.95] mb-6 max-w-3xl">
            {hero.title}
          </h1>
          <div className="rule-eventos h-px w-16 mb-6" />
          <p className="text-pitaua-paper/70 text-lg max-w-xl leading-relaxed font-light mb-10">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              href="#orcamento"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-pitaua-sun text-pitaua-ink font-medium text-sm rounded-full hover:bg-pitaua-orange transition-all"
            >
              {hero.cta}
            </a>
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.eventos)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-[#25D366] text-white text-sm font-medium rounded-full hover:bg-[#1da851] transition-all"
            >
              Fale pelo WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
