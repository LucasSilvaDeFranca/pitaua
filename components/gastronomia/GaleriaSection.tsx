import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
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

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
          {galeria.imagePlaceholders.map((label, i) => (
            <ImagePlaceholder
              key={i}
              label={label}
              aspectRatio={i === 0 ? "video" : "square"}
              className={`rounded-2xl ${i === 0 ? "col-span-2 sm:col-span-1 sm:row-span-2" : ""}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
