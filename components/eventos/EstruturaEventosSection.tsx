import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { eventosContent } from "@/lib/content/eventos";
import { CheckCircle2, Users, Music, ChefHat, ParkingCircle, Wifi, Trees, Waves, Fish } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Users,
  Music,
  ChefHat,
  ParkingCircle,
  Wifi,
  Trees,
  Waves,
  Fish,
};

export function EstruturaEventosSection() {
  const { estrutura, diferenciais } = eventosContent;

  return (
    <section className="py-20 bg-white" aria-labelledby="estrutura-eventos-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 items-center mb-16">
          <div>
            <SectionHeading
              title={estrutura.title}
              className="mb-8"
            />

            <div className="grid grid-cols-2 gap-3 mb-6">
              {estrutura.itens.map((item, i) => {
                const Icon = iconMap[item.icon] || CheckCircle2;
                return (
                  <div
                    key={i}
                    className="flex items-center gap-3 p-3 bg-pitaua-cream rounded-xl"
                  >
                    <Icon size={18} className="text-pitaua-earth shrink-0" aria-hidden />
                    <span className="text-sm text-pitaua-dark/70 font-medium">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <p className="text-pitaua-dark/50 text-xs italic">
              * {estrutura.nota}
            </p>
          </div>

          <div className="space-y-4">
            {estrutura.imagePlaceholders.map((label, i) => (
              <ImagePlaceholder
                key={i}
                label={label}
                aspectRatio={i === 0 ? "video" : "wide"}
                className="rounded-2xl"
              />
            ))}
          </div>
        </div>

        {/* Diferenciais */}
        <div className="bg-pitaua-ink rounded-2xl p-8 md:p-12">
          <h3 className="text-2xl sm:text-3xl font-light italic font-heading text-white mb-8 text-center">
            Por que escolher o Pitauá para o seu evento?
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {diferenciais.map((d, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 size={18} className="text-white shrink-0" aria-hidden />
                <span className="text-white/85 text-sm">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
