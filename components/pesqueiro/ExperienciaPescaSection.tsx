import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pesqueiroContent } from "@/lib/content/pesqueiro";
import { Fish, Trees, Users, Sun } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Fish,
  Trees,
  Users,
  Sun,
};

export function ExperienciaPescaSection() {
  const { intro, experiencia } = pesqueiroContent;

  return (
    <>
      {/* Intro */}
      <section className="py-20 bg-pitaua-light" aria-labelledby="pesqueiro-intro-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title={intro.title}
            subtitle={intro.text}
            centered
          />
        </div>
      </section>

      {/* Experiência */}
      <section
        id="experiencia"
        className="py-20 bg-pitaua-cream"
        aria-labelledby="experiencia-pesca-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <SectionHeading
                title={experiencia.title}
                className="mb-8"
              />
              <div className="space-y-5">
                {experiencia.itens.map((item, i) => {
                  const Icon = iconMap[item.icon] || Fish;
                  return (
                    <div key={i} className="flex gap-4">
                      <div className="w-10 h-10 bg-pitaua-earth/10 rounded-xl flex items-center justify-center shrink-0">
                        <Icon size={20} className="text-pitaua-earth" aria-hidden />
                      </div>
                      <div>
                        <h3 className="font-semibold text-pitaua-dark mb-1">{item.title}</h3>
                        <p className="text-pitaua-dark/60 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative aspect-square w-full overflow-hidden rounded-2xl bg-pitaua-cream">
              <Image
                src="/images/pesqueiro/experiencia.jpg"
                alt={experiencia.imagePlaceholder}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
