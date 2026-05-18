"use client";

import { useState } from "react";
import {
  Clock,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";
import { Modal } from "@/components/ui/Modal";
import { SectionHeading } from "@/components/ui/SectionHeading";

// Tipo definido localmente para evitar importar pesqueiro.ts (que toca node:fs)
// dentro de um client component — isso quebra o bundle do navegador.
export interface RegulamentoData {
  label: string;
  title: string;
  intro: string;
  horarios: {
    title: string;
    items: ReadonlyArray<{ label: string; horario: string }>;
  };
  regras: ReadonlyArray<string>;
  multas: {
    title: string;
    intro: string;
    items: ReadonlyArray<{ valor: string; descricao: string }>;
  };
}

interface RegrasModalTriggerProps {
  title: string;
  content: string;
  regulamento: RegulamentoData;
}

// Componentes React não podem ser passados de Server → Client via props.
// Por isso o ícone é importado e fixado aqui no próprio client component.
export function RegrasModalTrigger({
  title,
  content,
  regulamento,
}: RegrasModalTriggerProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-haspopup="dialog"
        aria-expanded={open}
        className="group bg-white rounded-2xl p-6 text-center shadow-sm cursor-pointer transition-all hover:shadow-md hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2"
      >
        <div className="w-12 h-12 bg-pitaua-earth/10 rounded-xl flex items-center justify-center mx-auto mb-4 transition-colors group-hover:bg-pitaua-earth/20">
          <ShieldCheck size={22} className="text-pitaua-earth" aria-hidden />
        </div>
        <h3 className="font-semibold text-pitaua-dark mb-2 text-sm">
          {title}
        </h3>
        <p className="text-pitaua-dark/55 text-xs leading-relaxed">
          {content}
        </p>
        <span className="mt-3 inline-block text-[10px] uppercase tracking-[0.18em] text-pitaua-earth/80 group-hover:text-pitaua-earth">
          Ver regulamento
        </span>
      </button>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        ariaLabel={regulamento.title}
      >
        <div className="p-6 sm:p-10">
          <SectionHeading
            label={regulamento.label}
            title={regulamento.title}
            subtitle={regulamento.intro}
            centered
            className="mb-10"
          />

          {/* Horário de pesca */}
          <div className="bg-pitaua-cream/60 rounded-2xl p-6 sm:p-7 mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-pitaua-earth/10 rounded-xl flex items-center justify-center">
                <Clock size={20} className="text-pitaua-earth" aria-hidden />
              </div>
              <h3 className="font-semibold text-pitaua-dark text-base">
                {regulamento.horarios.title}
              </h3>
            </div>
            <dl className="grid sm:grid-cols-2 gap-4">
              {regulamento.horarios.items.map((h) => (
                <div
                  key={h.label}
                  className="flex items-baseline justify-between gap-4 border-b border-pitaua-earth/15 pb-3 last:border-b-0"
                >
                  <dt className="text-pitaua-dark/70 text-sm">{h.label}</dt>
                  <dd className="font-semibold text-pitaua-dark text-base tracking-tight">
                    {h.horario}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* Lista de regras */}
          <div className="bg-pitaua-cream/60 rounded-2xl p-6 sm:p-7 mb-8">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-pitaua-earth/10 rounded-xl flex items-center justify-center">
                <ShieldCheck size={20} className="text-pitaua-earth" aria-hidden />
              </div>
              <h3 className="font-semibold text-pitaua-dark text-base">
                Conduta no pesqueiro
              </h3>
            </div>
            <ul className="space-y-3">
              {regulamento.regras.map((regra, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3 text-pitaua-dark/75"
                >
                  <CheckCircle2
                    size={16}
                    className="text-pitaua-earth shrink-0 mt-1"
                    aria-hidden
                  />
                  <span className="text-sm leading-relaxed text-left">
                    {regra}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Penalidades */}
          <div className="bg-pitaua-earth/8 border border-pitaua-earth/25 rounded-2xl p-6 sm:p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-pitaua-earth/15 rounded-xl flex items-center justify-center">
                <AlertTriangle
                  size={20}
                  className="text-pitaua-earth"
                  aria-hidden
                />
              </div>
              <h3 className="font-semibold text-pitaua-dark text-base">
                {regulamento.multas.title}
              </h3>
            </div>
            <p className="text-pitaua-dark/70 text-sm leading-relaxed mb-5 text-left">
              {regulamento.multas.intro}
            </p>
            <ul className="space-y-4">
              {regulamento.multas.items.map((multa, i) => (
                <li
                  key={i}
                  className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4 border-t border-pitaua-earth/20 pt-4 first:border-t-0 first:pt-0 text-left"
                >
                  <span className="font-semibold text-pitaua-earth text-base sm:text-lg whitespace-nowrap tracking-tight">
                    {multa.valor}
                  </span>
                  <span className="text-pitaua-dark/75 text-sm leading-relaxed">
                    {multa.descricao}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Modal>
    </>
  );
}
