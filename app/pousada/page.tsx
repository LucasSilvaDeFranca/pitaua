import type { Metadata } from "next";
import { HeroPousada } from "@/components/pousada/HeroPousada";
import { AcomodacoesSection } from "@/components/pousada/AcomodacoesSection";
import { EstruturaSection } from "@/components/pousada/EstruturaSection";
import { ExperienciasSection } from "@/components/pousada/ExperienciasSection";
import { ServicosInclusosSection } from "@/components/pousada/ServicosInclusosSection";
import { FAQSection } from "@/components/pousada/FAQSection";
import { MapSection } from "@/components/shared/MapSection";
import { TestimonialsCarousel } from "@/components/shared/TestimonialsCarousel";
import { pousadaContent } from "@/lib/content/pousada";
import { pousadaTestimonials } from "@/lib/content/testimonials";
import { jsonLdPousada, serializeJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: pousadaContent.meta.title,
  description: pousadaContent.meta.description,
  openGraph: {
    title: "Pousada Pitauá em Socorro-SP",
    description: pousadaContent.meta.description,
    url: "/pousada",
    images: [{ url: "/og/pousada.jpg", width: 1200, height: 630, alt: "Pousada Pitauá em Socorro-SP" }],
  },
  alternates: { canonical: "/pousada" },
};

export default function PousadaPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(jsonLdPousada) }}
      />

      <HeroPousada />
      <AcomodacoesSection />
      <EstruturaSection />
      <ExperienciasSection />
      <ServicosInclusosSection />
      <TestimonialsCarousel
        id="pousada-testimonials"
        label="Depoimentos"
        title="O que dizem nossos hóspedes"
        subtitle="Histórias reais de quem já se hospedou no Pitauá"
        testimonials={pousadaTestimonials}
      />
      <FAQSection />
      <MapSection />
    </>
  );
}
