import Image from "next/image";
import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gastronomiaContent } from "@/lib/content/gastronomia";
import { Clock, UtensilsCrossed } from "lucide-react";

export function RestauranteSection() {
  const { restaurante, intro } = gastronomiaContent;

  return (
    <>
      {/* Intro */}
      <section className="py-20 bg-pitaua-light" aria-labelledby="restaurante-intro-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title={intro.title}
            subtitle={intro.text}
            centered
          />
        </div>
      </section>

      {/* Restaurante */}
      <section className="py-20 bg-white" aria-labelledby="restaurante-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/gastronomia/restaurante.webp"
                alt="Mesa do Restaurante Pitauá em Socorro-SP com bandejas de porções variadas — frango à passarinho, bolinhas de queijo, costelinha e limões"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                title={restaurante.title}
                subtitle={restaurante.subtitle}
                className="mb-6"
              />
              <p className="text-pitaua-dark/65 leading-relaxed mb-6">
                {restaurante.description}
              </p>

              <div className="flex items-start gap-3 p-4 bg-pitaua-cream rounded-xl mb-4">
                <Clock size={18} className="text-pitaua-earth shrink-0 mt-0.5" aria-hidden />
                <span className="text-sm text-pitaua-dark/70">
                  {restaurante.horario}
                </span>
              </div>

              <Link
                href="/gastronomia/cardapio"
                className="inline-flex items-center gap-2 text-sm font-medium text-pitaua-brick hover:text-pitaua-orange transition-colors"
              >
                <UtensilsCrossed size={16} aria-hidden />
                Ver cardápio completo
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
