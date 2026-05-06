import Image from "next/image";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pesqueiroContent } from "@/lib/content/pesqueiro";
import { Clock, DollarSign, PackageCheck, ShieldCheck, CheckCircle2 } from "lucide-react";

const iconMap: Record<string, React.ElementType> = {
  Clock,
  DollarSign,
  PackageCheck,
  ShieldCheck,
};

export function InfoPraticasSection() {
  const { infoPraticas, estrutura } = pesqueiroContent;

  return (
    <>
      {/* Estrutura */}
      <section className="py-20 bg-pitaua-light" aria-labelledby="estrutura-pesqueiro-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-video w-full overflow-hidden rounded-2xl bg-pitaua-cream">
              <Image
                src="/images/pesqueiro/estrutura.jpg"
                alt={estrutura.imagePlaceholder}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div>
              <SectionHeading
                title={estrutura.title}
                className="mb-6"
              />
              <ul className="space-y-3">
                {estrutura.itens.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-pitaua-dark/70">
                    <CheckCircle2 size={16} className="text-pitaua-earth shrink-0" aria-hidden />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Informações práticas */}
      <section className="py-20 bg-pitaua-cream" aria-labelledby="info-praticas-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title={infoPraticas.title}
            centered
            className="mb-12"
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {infoPraticas.items.map((item, i) => {
              const Icon = iconMap[item.icon] || Clock;
              return (
                <div
                  key={i}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm"
                >
                  <div className="w-12 h-12 bg-pitaua-earth/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <Icon size={22} className="text-pitaua-earth" aria-hidden />
                  </div>
                  <h3 className="font-semibold text-pitaua-dark mb-2 text-sm">
                    {item.title}
                  </h3>
                  <p className="text-pitaua-dark/55 text-xs leading-relaxed">
                    {item.content}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
