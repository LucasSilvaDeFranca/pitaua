import type { Metadata } from "next";
import { HeroGastronomia } from "@/components/gastronomia/HeroGastronomia";
import { RestauranteSection } from "@/components/gastronomia/RestauranteSection";
import { CafeDaManhaSection } from "@/components/gastronomia/CafeDaManhaSection";
import { GaleriaSection } from "@/components/gastronomia/GaleriaSection";
import { Button } from "@/components/ui/Button";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";
import { gastronomiaContent } from "@/lib/content/gastronomia";
import { jsonLdGastronomia, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: gastronomiaContent.meta.title,
  description: gastronomiaContent.meta.description,
  openGraph: {
    title: "Restaurante Pitauá em Socorro-SP",
    description: gastronomiaContent.meta.description,
    url: "/gastronomia",
    images: [{ url: "/og/gastronomia.jpg", width: 1200, height: 630, alt: "Restaurante Pitauá em Socorro-SP" }],
  },
  alternates: { canonical: "/gastronomia" },
};

export default function GastronomiaPage() {
  const { eventos } = gastronomiaContent;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLdGastronomia) }}
      />

      <HeroGastronomia />
      <RestauranteSection />
      <CafeDaManhaSection />
      <GaleriaSection />

      {/* Eventos gastronômicos */}
      <section className="py-20 bg-pitaua-ink text-center" aria-labelledby="gastronomia-eventos-heading">
        <div className="max-w-2xl mx-auto px-4">
          <h2
            id="gastronomia-eventos-heading"
            className="text-3xl md:text-4xl font-light italic font-heading text-white mb-4"
          >
            {eventos.title}
          </h2>
          <p className="text-white/80 text-lg mb-8 leading-relaxed">
            {eventos.description}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              href={getWhatsAppLink(WHATSAPP_MESSAGES.gastronomia)}
              variant="secondary"
              size="lg"
              external
              showWhatsAppIcon
            >
              Fale pelo WhatsApp
            </Button>
            <Button href="/eventos" variant="outline" size="lg">
              {eventos.cta}
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
