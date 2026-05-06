import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventosContent } from "@/lib/content/eventos";
import { Cake, Users, Briefcase, Heart, PartyPopper } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Cake,
  Users,
  Briefcase,
  Heart,
  PartyPopper,
};

export function TiposEventosSection() {
  const { intro, tiposEventos } = eventosContent;

  return (
    <>
      {/* Intro */}
      <section className="py-20 bg-pitaua-light" aria-labelledby="eventos-intro-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SectionHeading
            title={intro.title}
            subtitle={intro.text}
            centered
          />
        </div>
      </section>

      {/* Tipos de eventos */}
      <section className="py-20 bg-pitaua-cream" aria-labelledby="tipos-eventos-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Qual é o seu evento?"
            centered
            className="mb-12"
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {tiposEventos.map((tipo, i) => {
              const Icon = iconMap[tipo.icon] || PartyPopper;
              return (
                <article
                  key={i}
                  className="bg-white rounded-2xl p-6 hover:shadow-md transition-shadow border border-pitaua-cream"
                >
                  <div className="w-12 h-12 bg-pitaua-earth/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon size={22} className="text-pitaua-earth" aria-hidden />
                  </div>
                  <h3 className="text-xl font-light italic font-heading text-pitaua-dark mb-2">
                    {tipo.title}
                  </h3>
                  <p className="text-pitaua-dark/60 text-sm leading-relaxed">
                    {tipo.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
