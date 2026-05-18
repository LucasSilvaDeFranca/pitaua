import type { Metadata } from "next";
import { HeroPesqueiro } from "@/components/pesqueiro/HeroPesqueiro";
import { ExperienciaPescaSection } from "@/components/pesqueiro/ExperienciaPescaSection";
import { InfoPraticasSection } from "@/components/pesqueiro/InfoPraticasSection";
import { GaleriaPesqueiro } from "@/components/pesqueiro/GaleriaPesqueiro";
import { TestimonialsCarousel } from "@/components/shared/TestimonialsCarousel";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { pesqueiroContent } from "@/lib/content/pesqueiro";
import { pesqueiroTestimonials } from "@/lib/content/testimonials";
import { jsonLdPesqueiro, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: pesqueiroContent.meta.title,
  description: pesqueiroContent.meta.description,
  openGraph: {
    title: "Pesqueiro Pitauá em Socorro-SP",
    description: pesqueiroContent.meta.description,
    url: "/pesqueiro",
    images: [{ url: "/og/pesqueiro.jpg", width: 1200, height: 630, alt: "Pesqueiro Pitauá em Socorro-SP" }],
  },
  alternates: { canonical: "/pesqueiro" },
};

export default function PesqueiroPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLdPesqueiro) }}
      />

      <HeroPesqueiro />
      <ExperienciaPescaSection />
      <InfoPraticasSection />
      <GaleriaPesqueiro />

      <TestimonialsCarousel
        id="pesqueiro-testimonials"
        label="Depoimentos"
        title="Quem pescou recomenda"
        subtitle="Histórias reais de quem soltou a linha no Pitauá"
        testimonials={pesqueiroTestimonials}
      />

      {/* CTA final */}
      <section className="py-20 bg-pitaua-ink text-center" aria-labelledby="pesqueiro-cta-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            id="pesqueiro-cta-heading"
            className="text-3xl md:text-4xl font-light italic font-heading text-white mb-4"
          >
            Pronto para fisgar o próximo?
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            Entre em contato e saiba tudo sobre horários, valores e disponibilidade do nosso pesqueiro em Socorro-SP.
          </p>
          <Button
            href={getWhatsAppLink(WHATSAPP_MESSAGES.pesqueiro)}
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
