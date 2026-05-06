import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
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
          {galeria.imagePlaceholders.map((label, i) => (
            <ImagePlaceholder
              key={i}
              label={label}
              aspectRatio="square"
              className="rounded-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
