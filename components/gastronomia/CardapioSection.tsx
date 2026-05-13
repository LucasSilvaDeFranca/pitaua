"use client";

import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { gastronomiaContent, type MenuItem } from "@/lib/content/gastronomia";

export function CardapioSection() {
  const { cardapio } = gastronomiaContent;
  const [activeSecao, setActiveSecao] = useState(cardapio.secoes[0].id);
  const [revealed, setRevealed] = useState<Set<string>>(new Set());

  const toggleReveal = (itemKey: string) => {
    setRevealed((prev) => {
      const next = new Set(prev);
      if (next.has(itemKey)) {
        next.delete(itemKey);
      } else {
        next.add(itemKey);
      }
      return next;
    });
  };

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
          <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {secaoAtiva.itens.map((item, i) => {
              const itemKey = `${secaoAtiva.id}-${i}`;
              const isRevealed = revealed.has(itemKey);
              return (
                <li key={itemKey}>
                  <MenuCard
                    item={item}
                    revealed={isRevealed}
                    onToggle={() => toggleReveal(itemKey)}
                  />
                </li>
              );
            })}
          </ul>
        </div>

        <p className="mt-10 text-center text-xs text-pitaua-dark/50 italic max-w-xl mx-auto leading-relaxed">
          {cardapio.nota}
        </p>
      </div>
    </section>
  );
}

function MenuCard({
  item,
  revealed,
  onToggle,
}: {
  item: MenuItem;
  revealed: boolean;
  onToggle: () => void;
}) {
  return (
    <article className="group h-full flex flex-col p-5 bg-white border border-pitaua-rule rounded-2xl transition-all duration-300 hover:border-pitaua-earth/50 hover:shadow-md">
      <div className="flex-1">
        <h3 className="font-heading text-xl text-pitaua-dark leading-snug mb-1">
          {item.nome}
        </h3>
        {item.porcao && (
          <p className="text-[11px] font-medium tracking-wider uppercase text-pitaua-earth mb-2">
            {item.porcao}
          </p>
        )}
        {item.descricao && (
          <p className="text-sm text-pitaua-dark/60 leading-relaxed">
            {item.descricao}
          </p>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-pitaua-rule/60">
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={revealed}
          aria-label={
            revealed
              ? `Ocultar preço de ${item.nome}`
              : `Ver preço de ${item.nome}`
          }
          className="w-full flex items-center justify-between gap-2 text-sm font-medium text-pitaua-dark/70 hover:text-pitaua-brick transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-brick focus-visible:ring-offset-2 rounded-md"
        >
          {revealed ? (
            <>
              <span className="flex items-baseline gap-1.5 text-pitaua-brick font-semibold">
                {item.precoApartirDe && (
                  <span className="text-[10px] uppercase tracking-wider text-pitaua-dark/50 font-normal">
                    A partir de
                  </span>
                )}
                <span className="text-base">{item.preco}</span>
              </span>
              <EyeOff size={15} aria-hidden className="text-pitaua-dark/40" />
            </>
          ) : (
            <>
              <span>Ver preço</span>
              <Eye size={15} aria-hidden className="text-pitaua-dark/40 group-hover:text-pitaua-brick transition-colors" />
            </>
          )}
        </button>
      </div>
    </article>
  );
}
