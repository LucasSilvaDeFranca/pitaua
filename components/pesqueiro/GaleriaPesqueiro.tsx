import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import {
  getPesqueiroGaleriaImages,
  pesqueiroContent,
} from "@/lib/content/pesqueiro";

export function GaleriaPesqueiro() {
  const { galeria } = pesqueiroContent;
  const images = getPesqueiroGaleriaImages();

  return (
    <section
      className="py-20 bg-pitaua-light"
      aria-labelledby="galeria-pesqueiro-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title={galeria.title} centered className="mb-12" />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {images.map((img, i) => (
            <div
              key={img.src}
              className="relative aspect-square overflow-hidden rounded-2xl bg-pitaua-cream"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover transition-transform duration-700 hover:scale-105"
                loading={i < 4 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
