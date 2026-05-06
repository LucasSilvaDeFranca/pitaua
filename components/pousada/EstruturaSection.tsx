import { SectionHeading } from "@/components/ui/SectionHeading";
import { pousadaContent } from "@/lib/content/pousada";
import {
  Coffee,
  Waves,
  Utensils,
  Sparkles,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Waves,
  Utensils,
  Sparkles,
};

export function EstruturaSection() {
  const items = [...pousadaContent.estrutura, ...pousadaContent.servicos];

  return (
    <section
      className="py-20 bg-pitaua-cream"
      aria-labelledby="estrutura-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Estrutura completa para o seu descanso"
          subtitle="Tudo que você precisa para uma estadia tranquila — e um cuidado a mais quando quiser."
          centered
          className="mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Coffee;
            return (
              <div
                key={i}
                className="bg-white rounded-2xl p-6 text-center hover:shadow-md transition-shadow border border-pitaua-rule"
              >
                <div className="w-12 h-12 bg-pitaua-earth/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon size={22} className="text-pitaua-earth" aria-hidden />
                </div>
                <h3 className="font-semibold text-pitaua-ink text-base mb-1.5">
                  {item.title}
                </h3>
                <p className="text-pitaua-ink/60 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
