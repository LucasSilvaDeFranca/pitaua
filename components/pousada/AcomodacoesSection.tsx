"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { CheckCircle2, ChevronLeft, ChevronRight, Heart, Maximize2, PawPrint, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Carousel } from "@/components/ui/Carousel";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { pousadaContent } from "@/lib/content/pousada";
import { getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";

const brl = (value: number) =>
  value.toLocaleString("pt-BR", {
    style: "currency",
    currency: "BRL",
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });

interface RoomGalleryProps {
  images: readonly string[];
  alt: string;
}

function RoomGallery({ images, alt }: RoomGalleryProps) {
  const [idx, setIdx] = useState(0);
  const stripRef = useRef<HTMLDivElement>(null);

  // Keep active thumbnail visible in the strip
  useEffect(() => {
    const strip = stripRef.current;
    if (!strip) return;
    const thumb = strip.children[idx] as HTMLElement | undefined;
    if (!thumb) return;
    thumb.scrollIntoView({
      behavior: "smooth",
      inline: "center",
      block: "nearest",
    });
  }, [idx]);

  const next = () => setIdx((i) => (i + 1) % images.length);
  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);

  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden bg-pitaua-rule group">
        <Image
          src={images[idx]}
          alt={`${alt} — foto ${idx + 1}`}
          fill
          sizes="(max-width: 1024px) 92vw, 46vw"
          className="object-cover"
          priority={idx === 0}
        />

        <button
          type="button"
          onClick={prev}
          aria-label="Foto anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pitaua-paper/85 backdrop-blur-sm border border-pitaua-rule text-pitaua-ink/80 hover:bg-pitaua-paper hover:text-pitaua-ink transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth"
        >
          <ChevronLeft size={18} aria-hidden />
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Próxima foto"
          className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pitaua-paper/85 backdrop-blur-sm border border-pitaua-rule text-pitaua-ink/80 hover:bg-pitaua-paper hover:text-pitaua-ink transition-all flex items-center justify-center opacity-0 group-hover:opacity-100 focus-visible:opacity-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth"
        >
          <ChevronRight size={18} aria-hidden />
        </button>

        <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-full bg-pitaua-ink/70 text-pitaua-paper text-[11px] font-medium tracking-wide backdrop-blur-sm">
          {idx + 1} / {images.length}
        </div>
      </div>

      <div
        ref={stripRef}
        role="tablist"
        aria-label="Navegar entre fotos"
        className="flex gap-2 overflow-x-auto no-scrollbar snap-x snap-mandatory pb-1"
      >
        {images.map((src, i) => (
          <button
            key={src}
            type="button"
            role="tab"
            aria-selected={i === idx}
            aria-label={`Foto ${i + 1} de ${images.length}`}
            onClick={() => setIdx(i)}
            className={`relative aspect-[4/3] w-[calc(33.333%-6px)] shrink-0 snap-start rounded-lg overflow-hidden border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2 ${
              i === idx
                ? "border-pitaua-earth opacity-100"
                : "border-transparent opacity-60 hover:opacity-100"
            }`}
          >
            <Image
              src={src}
              alt=""
              fill
              sizes="200px"
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export function AcomodacoesSection() {
  const { quartos, intro } = pousadaContent;
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const activeQuarto = openIdx !== null ? quartos[openIdx] : null;

  return (
    <section
      id="acomodacoes"
      className="py-20 bg-pitaua-light"
      aria-labelledby="quartos-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <SectionHeading
            title={intro.title}
            subtitle={intro.text}
            centered
          />
        </div>

        <Carousel
          ariaLabel="Quartos da Pousada Pitauá"
          intervalMs={5500}
          autoPlay={openIdx === null}
        >
          {quartos.map((quarto, i) => (
            <button
              key={quarto.id}
              type="button"
              onClick={() => setOpenIdx(i)}
              aria-label={`Ver detalhes — ${quarto.nome}`}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-pitaua-rule h-full w-full text-left flex flex-col cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2"
            >
              <div className="relative aspect-video overflow-hidden bg-pitaua-cream">
                <Image
                  src={quarto.images[0]}
                  alt={quarto.nome}
                  fill
                  sizes="(max-width: 640px) 88vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div
                  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-pitaua-paper/90 backdrop-blur-sm border border-pitaua-rule flex items-center justify-center text-pitaua-ink/70 group-hover:bg-pitaua-paper group-hover:text-pitaua-ink transition-all"
                  aria-hidden
                >
                  <Maximize2 size={15} />
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-2xl font-light italic font-heading text-pitaua-ink mb-2">
                  {quarto.nome}
                </h3>
                <div className="flex flex-wrap gap-x-3 gap-y-1.5 text-[11px] font-medium uppercase tracking-wider text-pitaua-ink/55 mb-3">
                  {quarto.exclusivoCasais ? (
                    <span className="inline-flex items-center gap-1">
                      <Heart size={12} aria-hidden />
                      Apenas casais
                    </span>
                  ) : (
                    <>
                      <span className="inline-flex items-center gap-1">
                        <Users size={12} aria-hidden />
                        Até {quarto.capacidade} pessoas
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <PawPrint
                          size={12}
                          className={quarto.aceitaPet ? "" : "opacity-40"}
                          aria-hidden
                        />
                        {quarto.aceitaPet ? "Pet-friendly" : "Sem pet"}
                      </span>
                    </>
                  )}
                </div>
                <p className="text-pitaua-ink/65 text-sm leading-relaxed mb-4 flex-1">
                  {quarto.descricao}
                </p>
                <ul className="space-y-1.5 mb-4">
                  {quarto.destaques.map((d, k) => (
                    <li
                      key={k}
                      className="flex items-center gap-2 text-sm text-pitaua-ink/70"
                    >
                      <CheckCircle2
                        size={15}
                        className="text-pitaua-earth shrink-0"
                        aria-hidden
                      />
                      {d}
                    </li>
                  ))}
                </ul>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-pitaua-earth tracking-wide uppercase mt-auto">
                  Ver detalhes
                  <svg
                    width="11"
                    height="11"
                    viewBox="0 0 12 12"
                    fill="none"
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    <path
                      d="M1 6h10M6 1l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </div>
            </button>
          ))}
        </Carousel>

        <p className="text-center text-pitaua-ink/55 text-sm mt-10">
          Clique em um quarto para ver mais fotos e detalhes. Reservas pelo WhatsApp.
        </p>
      </div>

      <Modal
        open={activeQuarto !== null}
        onClose={() => setOpenIdx(null)}
        ariaLabel={activeQuarto ? `Detalhes — ${activeQuarto.nome}` : "Detalhes"}
      >
        {activeQuarto && (
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Gallery */}
            <div className="bg-pitaua-cream lg:p-8 p-4">
              <RoomGallery
                key={activeQuarto.id}
                images={activeQuarto.images}
                alt={activeQuarto.nome}
              />
            </div>

            {/* Details */}
            <div className="p-6 sm:p-10 lg:p-12 flex flex-col">
              <p className="font-display text-pitaua-ochre text-xs font-normal tracking-[0.3em] uppercase mb-3">
                Pousada Pitauá · Socorro-SP
              </p>
              <h3 className="text-3xl sm:text-4xl font-light italic font-heading text-pitaua-ink leading-tight mb-4">
                {activeQuarto.nome}
              </h3>
              <div className="gold-rule w-12 mb-6" />
              <p className="text-pitaua-ink/70 text-base leading-relaxed mb-6">
                {activeQuarto.descricao}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pitaua-cream border border-pitaua-rule text-xs font-medium text-pitaua-ink/75">
                  <Users size={13} aria-hidden />
                  {activeQuarto.exclusivoCasais
                    ? "Exclusivo para casais"
                    : `Até ${activeQuarto.capacidade} pessoas`}
                </span>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full border text-xs font-medium ${
                    activeQuarto.aceitaPet
                      ? "bg-pitaua-cream border-pitaua-rule text-pitaua-ink/75"
                      : "border-pitaua-rule text-pitaua-ink/45"
                  }`}
                >
                  <PawPrint size={13} aria-hidden />
                  {activeQuarto.aceitaPet ? "Aceita pet" : "Não aceita pet"}
                </span>
              </div>

              <div className="mb-8">
                <h4 className="font-display text-pitaua-ink/70 text-xs font-normal tracking-[0.25em] uppercase mb-4">
                  Amenidades
                </h4>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {activeQuarto.amenidades.map((d, k) => (
                    <li
                      key={k}
                      className="flex items-center gap-2.5 text-sm text-pitaua-ink/80"
                    >
                      <CheckCircle2
                        size={16}
                        className="text-pitaua-earth shrink-0"
                        aria-hidden
                      />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-8">
                <h4 className="font-display text-pitaua-ink/70 text-xs font-normal tracking-[0.25em] uppercase mb-4">
                  Diária
                </h4>
                <dl className="grid grid-cols-2 gap-3">
                  <div className="rounded-lg border border-pitaua-rule bg-pitaua-cream/50 px-4 py-3">
                    <dt className="text-[11px] font-medium uppercase tracking-wider text-pitaua-ink/55 mb-1">
                      Semana
                    </dt>
                    <dd className="text-xl font-light text-pitaua-ink">
                      {brl(activeQuarto.precos.semana)}
                    </dd>
                  </div>
                  <div className="rounded-lg border border-pitaua-rule bg-pitaua-cream/50 px-4 py-3">
                    <dt className="text-[11px] font-medium uppercase tracking-wider text-pitaua-ink/55 mb-1">
                      Finais de semana
                    </dt>
                    <dd className="text-xl font-light text-pitaua-ink">
                      {brl(activeQuarto.precos.finalSemana)}
                    </dd>
                  </div>
                </dl>
              </div>

              <div className="mt-auto pt-6 border-t border-pitaua-rule flex flex-col sm:flex-row gap-3">
                <Button
                  href={getWhatsAppLink(
                    `${WHATSAPP_MESSAGES.pousada} Tenho interesse na ${activeQuarto.nome}.`,
                  )}
                  variant="primary"
                  size="md"
                  external
                  showWhatsAppIcon
                  className="flex-1"
                >
                  Reservar pelo WhatsApp
                </Button>
                <Button
                  variant="outline"
                  size="md"
                  onClick={() => setOpenIdx(null)}
                  className="flex-1"
                >
                  Ver outros quartos
                </Button>
              </div>
            </div>
          </div>
        )}
      </Modal>
    </section>
  );
}
