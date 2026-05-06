import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gastronomiaContent } from "@/lib/content/gastronomia";
import { CheckCircle2 } from "lucide-react";

export function CafeDaManhaSection() {
  const { cafeManha } = gastronomiaContent;

  return (
    <section className="py-20 bg-pitaua-cream" aria-labelledby="cafe-manha-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeading
              title={cafeManha.title}
              subtitle={cafeManha.subtitle}
              className="mb-6"
            />
            <p className="text-pitaua-dark/65 leading-relaxed mb-8">
              {cafeManha.description}
            </p>

            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {cafeManha.itens.map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-pitaua-dark/70">
                  <CheckCircle2 size={15} className="text-pitaua-earth shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <ImagePlaceholder
            label={cafeManha.imagePlaceholder}
            aspectRatio="square"
            className="rounded-2xl"
          />
        </div>
      </div>
    </section>
  );
}
