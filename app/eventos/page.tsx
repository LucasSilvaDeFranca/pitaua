import type { Metadata } from "next";
import { HeroEventos } from "@/components/eventos/HeroEventos";
import { TiposEventosSection } from "@/components/eventos/TiposEventosSection";
import { EstruturaEventosSection } from "@/components/eventos/EstruturaEventosSection";
import { GaleriaEventos } from "@/components/eventos/GaleriaEventos";
import { OrcamentoForm } from "@/components/eventos/OrcamentoForm";
import { eventosContent } from "@/lib/content/eventos";
import { jsonLdEventos, serializeJsonLd } from "@/lib/seo";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";

export const metadata: Metadata = {
  title: eventosContent.meta.title,
  description: eventosContent.meta.description,
  openGraph: {
    title: "Espaço para Eventos em Socorro-SP | Pitauá",
    description: eventosContent.meta.description,
    url: "/eventos",
    images: [{ url: "/og/eventos.jpg", width: 1200, height: 630, alt: "Espaço para eventos do Pitauá em Socorro-SP" }],
  },
  alternates: { canonical: "/eventos" },
};

export default function EventosPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLdEventos) }}
      />

      <HeroEventos />
      <TiposEventosSection />
      <EstruturaEventosSection />
      <GaleriaEventos />
      <OrcamentoForm />

      {/* CTA WhatsApp direto */}
      <section className="py-16 bg-pitaua-ink text-center" aria-labelledby="eventos-wa-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2 id="eventos-wa-cta-heading" className="text-3xl md:text-4xl font-light italic font-heading text-white mb-4">
            Prefere falar diretamente?
          </h2>
          <p className="text-white/80 mb-6">
            Nossa equipe está pronta para ajudar você a planejar o evento perfeito.
          </p>
          <Button
            href={getWhatsAppLink(WHATSAPP_MESSAGES.eventos)}
            variant="secondary"
            size="lg"
            external
            showWhatsAppIcon
          >
            Fale pelo WhatsApp
          </Button>
        </div>
      </section>
    </>
  );
}
