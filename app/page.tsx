import type { Metadata } from "next";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { WhatsAppFloat } from "@/components/shared/WhatsAppFloat";
import { MapSection } from "@/components/shared/MapSection";
import { HeroHub } from "@/components/hub/HeroHub";
import { BusinessGrid } from "@/components/hub/BusinessGrid";
import { AboutSection } from "@/components/hub/AboutSection";
import { HighlightsStrip } from "@/components/hub/HighlightsStrip";
import { MarqueeStrip } from "@/components/hub/MarqueeStrip";
import { jsonLdHub, serializeJsonLd } from "@/lib/seo";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title:
    "Pitauá | Centro de Lazer em Socorro-SP — Pousada, Gastronomia, Pesqueiro e Eventos",
  description:
    "Pitauá é um centro de lazer completo em Socorro-SP. Pousada com 15 quartos, restaurante, pesqueiro e espaço para eventos. Natureza, lazer e acolhimento para toda a família.",
  openGraph: {
    title: "Pitauá | Centro de Lazer em Socorro-SP",
    description:
      "Centro de lazer completo com pousada, gastronomia, pesqueiro e eventos em Socorro-SP.",
    url: "/",
  },
  alternates: { canonical: "/" },
};

export default function HubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLdHub) }}
      />

      <SiteHeader />

      <main id="main-content">
        <HeroHub />
        <MarqueeStrip />
        <BusinessGrid />
        <AboutSection />
        <HighlightsStrip />

        {/* Final CTA — dark editorial */}
        <section
          className="bg-pitaua-dark py-28 text-center grain-overlay"
          aria-labelledby="cta-heading"
        >
          <div className="relative z-10 max-w-2xl mx-auto px-6">
            <p className="text-pitaua-earth text-xs font-medium tracking-[0.2em] uppercase mb-6">
              Venha nos visitar
            </p>
            <h2
              id="cta-heading"
              className="text-4xl sm:text-5xl font-light italic text-pitaua-cream mb-5 leading-tight"
            >
              Pronto para viver o Pitauá?
            </h2>
            <div className="gold-rule w-16 mx-auto mb-8" />
            <p className="text-pitaua-cream/50 text-lg mb-10 font-light leading-relaxed">
              Entre em contato e planeje sua visita em Socorro-SP.
            </p>
            <a
              href={getWhatsAppLink(WHATSAPP_MESSAGES.geral)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-medium rounded-full hover:bg-[#1da851] transition-all duration-300 text-sm"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M11.999 2C6.477 2 2 6.477 2 12c0 1.821.487 3.53 1.338 5.014L2.01 22l5.122-1.318A9.953 9.953 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.286a8.265 8.265 0 01-4.219-1.151l-.303-.18-3.04.782.804-2.96-.198-.311A8.286 8.286 0 1112 20.286z"/>
              </svg>
              Fale pelo WhatsApp
            </a>
          </div>
        </section>

        <MapSection />
      </main>

      <SiteFooter />
      <WhatsAppFloat area="geral" />
    </>
  );
}
