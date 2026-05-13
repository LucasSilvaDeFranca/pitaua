import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CardapioSection } from "@/components/gastronomia/CardapioSection";
import { gastronomiaContent } from "@/lib/content/gastronomia";

export const metadata: Metadata = {
  title: "Cardápio do Restaurante Pitauá em Socorro-SP",
  description: `${gastronomiaContent.cardapio.subtitle}. Porções, saladas, pratos à la carte e sobremesas no Restaurante Pitauá.`,
  openGraph: {
    title: "Cardápio do Restaurante Pitauá",
    description: gastronomiaContent.cardapio.subtitle,
    url: "/gastronomia/cardapio",
    images: [
      { url: "/og/gastronomia.jpg", width: 1200, height: 630, alt: "Cardápio do Restaurante Pitauá em Socorro-SP" },
    ],
  },
  alternates: { canonical: "/gastronomia/cardapio" },
};

export default function CardapioPage() {
  return (
    <>
      <div className="bg-pitaua-paper pt-24 sm:pt-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/gastronomia"
            className="inline-flex items-center gap-2 text-sm font-medium text-pitaua-dark/60 hover:text-pitaua-brick transition-colors"
          >
            <ArrowLeft size={16} aria-hidden />
            Voltar para Gastronomia
          </Link>
        </div>
      </div>
      <CardapioSection />
    </>
  );
}
