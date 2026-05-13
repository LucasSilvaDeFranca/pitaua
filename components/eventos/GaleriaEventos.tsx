import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventosContent } from "@/lib/content/eventos";

export function GaleriaEventos() {
  const { galeria } = eventosContent;

  return (
    <section className="py-20 bg-pitaua-cream" aria-labelledby="galeria-eventos-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title={galeria.title}
          centered
          className="mb-12"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galeria.images.map((img) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-2xl bg-pitaua-ink/5 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
