import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pousadaContent } from "@/lib/content/pousada";

export function ExperienciasSection() {
  const { experiencias } = pousadaContent;

  return (
    <section className="py-20 bg-pitaua-light" aria-labelledby="experiencias-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experiências que você não vai esquecer"
          subtitle="Em Socorro-SP, cada dia na pousada é uma nova descoberta."
          centered
          className="mb-14"
        />

        <div className="space-y-16">
          {experiencias.map((exp, i) => (
            <div
              key={i}
              className={`grid md:grid-cols-2 gap-10 items-center ${
                i % 2 === 1 ? "md:grid-flow-dense" : ""
              }`}
            >
              <div className={i % 2 === 1 ? "md:col-start-2" : ""}>
                <div className="relative aspect-video w-full rounded-2xl overflow-hidden bg-pitaua-rule">
                  <Image
                    src={exp.image.src}
                    alt={exp.image.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>
              <div className={i % 2 === 1 ? "md:col-start-1 md:row-start-1" : ""}>
                <span className="text-pitaua-earth text-sm font-semibold uppercase tracking-wider mb-3 block">
                  Experiência {i + 1}
                </span>
                <h3 className="text-2xl md:text-3xl font-light italic font-heading text-pitaua-dark mb-4">
                  {exp.title}
                </h3>
                <p className="text-pitaua-dark/65 leading-relaxed">
                  {exp.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
