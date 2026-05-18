"use client";

import { useState } from "react";
import Image from "next/image";
import {
  Drumstick,
  Salad,
  Soup,
  Cake,
  Eye,
  UtensilsCrossed,
  ImageIcon,
  Martini,
  Wine,
  Citrus,
  type LucideIcon,
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { getWhatsAppLink, PHONES } from "@/lib/constants";
import {
  gastronomiaContent,
  type MenuItem,
  type MenuSecao,
} from "@/lib/content/gastronomia";

const secaoIcones: Record<string, LucideIcon> = {
  porcoes: Drumstick,
  saladas: Salad,
  pratos: Soup,
  "novos-drinks": Martini,
  "drinks-casa": Wine,
  caipirinhas: Citrus,
  "caipirinhas-especiais": Citrus,
  sobremesa: Cake,
};

export function CardapioSection() {
  const { cardapio } = gastronomiaContent;
  const [activeSecao, setActiveSecao] = useState(cardapio.secoes[0].id);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const secaoAtiva =
    cardapio.secoes.find((s) => s.id === activeSecao) ?? cardapio.secoes[0];

  return (
    <section
      id="cardapio"
      className="py-20 bg-pitaua-paper wave-bg"
      aria-labelledby="cardapio-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id="cardapio-heading">
          <SectionHeading
            title={cardapio.title}
            subtitle={cardapio.subtitle}
            centered
            className="mb-10"
          />
        </div>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label="Seções do cardápio"
          className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10"
        >
          {cardapio.secoes.map((secao) => {
            const isActive = activeSecao === secao.id;
            return (
              <button
                key={secao.id}
                role="tab"
                id={`tab-${secao.id}`}
                aria-controls={`panel-${secao.id}`}
                aria-selected={isActive}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveSecao(secao.id)}
                className={`px-5 py-2.5 text-sm font-medium rounded-full transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-pitaua-brick ${
                  isActive
                    ? "bg-pitaua-brick text-pitaua-paper shadow-sm"
                    : "bg-white text-pitaua-dark/70 hover:bg-pitaua-cream border border-pitaua-rule"
                }`}
              >
                {secao.titulo}
                <span
                  className={`ml-2 text-xs ${
                    isActive ? "text-pitaua-paper/70" : "text-pitaua-dark/40"
                  }`}
                >
                  {secao.itens.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Panel */}
        <div
          role="tabpanel"
          id={`panel-${secaoAtiva.id}`}
          aria-labelledby={`tab-${secaoAtiva.id}`}
          className="animate-fade-in"
        >
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {secaoAtiva.itens.map((item, i) => (
              <li key={`${secaoAtiva.id}-${i}`}>
                <MenuCard
                  item={item}
                  secao={secaoAtiva}
                  onOpen={() => setSelectedItem(item)}
                />
              </li>
            ))}
          </ul>
        </div>

        <p className="mt-10 text-center text-xs text-pitaua-dark/50 italic max-w-xl mx-auto leading-relaxed">
          {cardapio.nota}
        </p>
      </div>

      <MenuItemDetailsModal
        item={selectedItem}
        secaoId={secaoAtiva.id}
        onClose={() => setSelectedItem(null)}
      />
    </section>
  );
}

function MenuCard({
  item,
  secao,
  onOpen,
}: {
  item: MenuItem;
  secao: MenuSecao;
  onOpen: () => void;
}) {
  const Icon = secaoIcones[secao.id] ?? UtensilsCrossed;

  return (
    <article className="group h-full flex flex-col bg-pitaua-surface border border-pitaua-border/40 rounded-2xl overflow-hidden transition-all duration-300 hover:border-pitaua-earth/60 hover:shadow-xl hover:-translate-y-0.5">
      {/* Imagem ou placeholder */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {item.imagem ? (
          <Image
            src={item.imagem}
            alt={item.nome}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div
            className="image-placeholder w-full h-full"
            role="img"
            aria-label={`Foto de ${item.nome} (em breve)`}
          >
            <ImageIcon size={28} className="mb-2 opacity-30" aria-hidden />
            <span className="text-[11px] opacity-50">Foto em breve</span>
          </div>
        )}

        {/* Gradiente para legibilidade do botão */}
        <div
          className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"
          aria-hidden
        />

        {/* Botão Ver detalhes (clica em qualquer parte do card também) */}
        <button
          type="button"
          onClick={onOpen}
          aria-label={`Ver detalhes de ${item.nome}`}
          className="absolute bottom-3 right-3 inline-flex items-center gap-1.5 px-3 py-1.5 bg-white/95 hover:bg-white text-pitaua-ink text-xs font-medium rounded-full shadow-md backdrop-blur-sm transition-all cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2"
        >
          <Eye size={13} aria-hidden />
          Ver detalhes
        </button>
      </div>

      {/* Conteúdo */}
      <div className="flex-1 p-5">
        <div className="flex items-start gap-3 mb-2">
          <span
            className="shrink-0 w-9 h-9 rounded-md bg-pitaua-earth/15 text-pitaua-earth flex items-center justify-center"
            aria-hidden
          >
            <Icon size={18} />
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="font-heading text-lg text-pitaua-paper leading-snug">
              {item.nome}
            </h3>
            {item.porcao && (
              <p className="text-[10px] font-medium tracking-wider uppercase text-pitaua-earth mt-0.5">
                {item.porcao}
              </p>
            )}
          </div>
        </div>

        {item.descricao && (
          <p className="text-sm text-pitaua-paper/65 leading-relaxed">
            {item.descricao}
          </p>
        )}
      </div>
    </article>
  );
}

function MenuItemDetailsModal({
  item,
  secaoId,
  onClose,
}: {
  item: MenuItem | null;
  secaoId: string;
  onClose: () => void;
}) {
  if (!item) return null;
  const Icon = secaoIcones[secaoId] ?? UtensilsCrossed;
  const restauranteWhats =
    PHONES.find((p) => p.label === "Pesqueiro e Restaurante")?.whatsapp;
  const whatsappMsg = `Olá! Gostaria de saber mais sobre o prato "${item.nome}" do restaurante Pitauá.`;

  return (
    <Modal open onClose={onClose} ariaLabel={`Detalhes do prato ${item.nome}`}>
      <div className="grid md:grid-cols-2">
        {/* Imagem */}
        <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[420px] bg-pitaua-surface">
          {item.imagem ? (
            <Image
              src={item.imagem}
              alt={item.nome}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          ) : (
            <div
              className="image-placeholder w-full h-full"
              role="img"
              aria-label={`Foto de ${item.nome} (em breve)`}
            >
              <ImageIcon size={36} className="mb-3 opacity-30" aria-hidden />
              <span className="text-xs opacity-50">Foto em breve</span>
            </div>
          )}
        </div>

        {/* Detalhes */}
        <div className="p-7 sm:p-9 flex flex-col">
          <div className="flex items-start gap-3 mb-4">
            <span
              className="shrink-0 w-11 h-11 rounded-md bg-pitaua-earth/15 text-pitaua-earth flex items-center justify-center"
              aria-hidden
            >
              <Icon size={22} />
            </span>
            <div>
              <h2 className="font-heading text-2xl sm:text-3xl text-pitaua-ink italic leading-tight">
                {item.nome}
              </h2>
              {item.porcao && (
                <p className="text-[11px] font-medium tracking-wider uppercase text-pitaua-earth mt-1.5">
                  {item.porcao}
                </p>
              )}
            </div>
          </div>

          {item.descricao && (
            <p className="text-pitaua-dark/70 leading-relaxed mb-6">
              {item.descricao}
            </p>
          )}

          <div className="mt-auto pt-6 border-t border-pitaua-rule">
            <div className="flex items-baseline gap-2 mb-5">
              {item.precoApartirDe && (
                <span className="text-[11px] uppercase tracking-wider text-pitaua-dark/50">
                  A partir de
                </span>
              )}
              <span className="font-heading text-3xl text-pitaua-brick">
                {item.preco}
              </span>
            </div>

            <Button
              href={getWhatsAppLink(whatsappMsg, restauranteWhats)}
              variant="secondary"
              size="md"
              external
              showWhatsAppIcon
              className="w-full"
            >
              Pedir pelo WhatsApp
            </Button>
            <p className="mt-3 text-[11px] text-pitaua-dark/50 text-center italic">
              Preços e disponibilidade sujeitos a alteração
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
