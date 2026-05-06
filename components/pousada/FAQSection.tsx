"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { pousadaContent } from "@/lib/content/pousada";

export function FAQSection() {
  const { faq } = pousadaContent;
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-20 bg-pitaua-cream" aria-labelledby="faq-heading">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Perguntas frequentes"
          subtitle="Tudo que você precisa saber antes da sua visita."
          centered
          className="mb-12"
        />

        <div className="space-y-3">
          {faq.map((item, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-pitaua-earth/10"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-pitaua-earth/5 transition-colors"
                aria-expanded={openIndex === i}
                aria-controls={`faq-answer-${i}`}
              >
                <span className="font-semibold text-pitaua-dark pr-4 text-sm sm:text-base">
                  {item.pergunta}
                </span>
                <ChevronDown
                  size={18}
                  className={`shrink-0 text-pitaua-earth transition-transform duration-200 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  aria-hidden
                />
              </button>

              <div
                id={`faq-answer-${i}`}
                hidden={openIndex !== i}
                className="px-5 pb-5 text-pitaua-dark/65 text-sm leading-relaxed border-t border-pitaua-earth/10 pt-4"
              >
                {item.resposta}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
