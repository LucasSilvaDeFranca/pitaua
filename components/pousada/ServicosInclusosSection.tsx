"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import {
  Coffee,
  Waves,
  Utensils,
  Sparkles,
  Image as ImageIcon,
  ZoomIn,
  X,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { BOOKING_URL } from "@/lib/constants";
import { pousadaContent } from "@/lib/content/pousada";

const iconMap: Record<string, LucideIcon> = {
  Coffee,
  Waves,
  Utensils,
  Sparkles,
};

const items = [...pousadaContent.estrutura, ...pousadaContent.servicos];

export function ServicosInclusosSection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (activeIndex === null) {
      if (dialog.open) dialog.close();
    } else if (!dialog.open) {
      dialog.showModal();
    }
  }, [activeIndex]);

  const active = activeIndex !== null ? items[activeIndex] : null;

  return (
    <section className="py-20 bg-pitaua-ink" aria-labelledby="servicos-heading">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="servicos-heading"
            className="text-3xl md:text-4xl font-light italic font-heading text-white mb-3"
          >
            O que está incluso na sua estadia
          </h2>
          <p className="text-white/75 text-lg">
            Na Pousada Pitauá, você chega e aproveita. Sem surpresas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-12">
          {items.map((item, i) => {
            const Icon = iconMap[item.icon] ?? Coffee;
            return (
              <button
                key={i}
                type="button"
                onClick={() => setActiveIndex(i)}
                aria-haspopup="dialog"
                aria-label={`Ver fotos: ${item.title}`}
                className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 hover:border-white/30 hover:bg-white/[0.07] transition-all text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2 focus-visible:ring-offset-pitaua-ink"
              >
                <div className="relative aspect-video w-full bg-white/[0.03] overflow-hidden">
                  {item.cover ? (
                    <Image
                      src={item.cover}
                      alt={item.title}
                      fill
                      sizes="(min-width: 640px) 50vw, 100vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white/25 gap-2">
                      <ImageIcon size={32} aria-hidden />
                      <span className="text-xs tracking-wide">Capa em breve</span>
                    </div>
                  )}

                  <div className="absolute inset-0 bg-gradient-to-t from-pitaua-ink/85 via-pitaua-ink/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-4">
                    <span className="inline-flex items-center gap-1.5 text-white text-xs font-medium bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5">
                      <ZoomIn size={13} aria-hidden /> Ver fotos
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 bg-pitaua-earth/15 rounded-lg flex items-center justify-center">
                      <Icon size={18} className="text-pitaua-earth" aria-hidden />
                    </div>
                    <h3 className="font-semibold text-white text-lg">{item.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="text-center">
          <Button href={BOOKING_URL} variant="secondary" size="lg" external>
            Reserve sua hospedagem
          </Button>
        </div>
      </div>

      <dialog
        ref={dialogRef}
        onClose={() => setActiveIndex(null)}
        onClick={(e) => {
          if (e.target === dialogRef.current) dialogRef.current?.close();
        }}
        aria-labelledby="dialog-title"
        className="m-auto w-[92vw] max-w-4xl max-h-[90vh] p-0 rounded-2xl border-0 bg-pitaua-paper text-pitaua-ink overflow-hidden [&::backdrop]:bg-pitaua-ink/80 [&::backdrop]:backdrop-blur-sm"
      >
        {active && (
          <div className="flex flex-col max-h-[90vh]">
            <header className="flex items-center justify-between gap-4 px-6 py-4 border-b border-pitaua-rule">
              <h2
                id="dialog-title"
                className="text-xl md:text-2xl font-light italic font-heading text-pitaua-ink"
              >
                {active.title}
              </h2>
              <button
                type="button"
                onClick={() => dialogRef.current?.close()}
                aria-label="Fechar"
                className="w-9 h-9 rounded-full hover:bg-pitaua-rule/60 flex items-center justify-center text-pitaua-ink/70 hover:text-pitaua-ink transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth"
              >
                <X size={18} aria-hidden />
              </button>
            </header>

            <div className="overflow-y-auto p-6">
              {active.gallery.length === 0 ? (
                <div className="flex flex-col items-center justify-center text-center py-16 gap-3 text-pitaua-ink/45">
                  <ImageIcon size={40} aria-hidden />
                  <p className="text-sm max-w-xs">
                    Galeria em breve. Em breve adicionaremos fotos de{" "}
                    <span className="font-medium">{active.title}</span> aqui.
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {active.gallery.map((src, i) => (
                    <div
                      key={src}
                      className="relative aspect-square rounded-lg overflow-hidden bg-pitaua-rule"
                    >
                      <Image
                        src={src}
                        alt={`${active.title} — foto ${i + 1}`}
                        fill
                        sizes="(min-width: 768px) 33vw, 50vw"
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </dialog>
    </section>
  );
}
