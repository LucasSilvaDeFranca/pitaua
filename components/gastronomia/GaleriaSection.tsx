import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gastronomiaContent } from "@/lib/content/gastronomia";

export function GaleriaSection() {
  const { galeria } = gastronomiaContent;

  return (
    <section className="py-20 bg-pitaua-cream" aria-labelledby="galeria-gastronomia-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={galeria.title}
          centered
          className="mb-12"
        />

        <ul className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {galeria.imagens.map((img, i) => (
            <li
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-2xl bg-pitaua-surface shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                loading={i < 4 ? "eager" : "lazy"}
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
