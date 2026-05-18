"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { eventosContent } from "@/lib/content/eventos";
import { getWhatsAppLink, AREA_WHATSAPP } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

interface FormData {
  nome: string;
  email: string;
  telefone: string;
  tipoEvento: string;
  dataPrevista: string;
  numeroPessoas: string;
  mensagem: string;
}

export function OrcamentoForm() {
  const { form } = eventosContent;
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();

  function onSubmit(data: FormData) {
    const msg = `Olá! Tenho interesse em realizar um evento no Pitauá.

*Nome:* ${data.nome}
*Tipo de evento:* ${data.tipoEvento}
*Data prevista:* ${data.dataPrevista || "A definir"}
*Nº de pessoas:* ${data.numeroPessoas || "A definir"}
*Mensagem:* ${data.mensagem || "—"}

*Contato:* ${data.email} | ${data.telefone}`;

    window.open(
      getWhatsAppLink(msg, AREA_WHATSAPP.eventos),
      "_blank",
      "noopener,noreferrer",
    );
    setSubmitted(true);
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl border border-pitaua-earth/20 bg-white text-pitaua-dark placeholder:text-pitaua-dark/40 focus:outline-none focus:ring-2 focus:ring-pitaua-earth/40 focus:border-pitaua-earth transition text-sm";

  const errorClass = "mt-1 text-red-500 text-xs";

  if (submitted) {
    return (
      <section
        id="orcamento"
        className="py-20 bg-pitaua-light"
        aria-labelledby="orcamento-heading"
      >
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-pitaua-earth/10 rounded-full mb-6">
            <CheckCircle2 size={32} className="text-pitaua-earth" />
          </div>
          <h2 className="text-3xl font-light italic font-heading text-pitaua-dark mb-3">
            Mensagem enviada!
          </h2>
          <p className="text-pitaua-dark/60 mb-6">
            {form.successMessage}
          </p>
          <button
            type="button"
            onClick={() => {
              reset();
              setSubmitted(false);
            }}
            className="text-sm text-pitaua-earth hover:text-pitaua-ink underline underline-offset-4 transition-colors"
          >
            Enviar outro orçamento
          </button>
        </div>
      </section>
    );
  }

  return (
    <section
      id="orcamento"
      className="py-20 bg-pitaua-light"
      aria-labelledby="orcamento-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6">
        <SectionHeading
          title={form.title}
          subtitle={form.subtitle}
          centered
          className="mb-10"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          className="space-y-5 bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-pitaua-earth/10"
        >
          {/* Nome */}
          <div>
            <label htmlFor="nome" className="block text-sm font-medium text-pitaua-dark mb-1.5">
              Nome completo <span aria-hidden className="text-red-500">*</span>
            </label>
            <input
              id="nome"
              type="text"
              placeholder="Seu nome"
              className={inputClass}
              aria-required="true"
              aria-invalid={!!errors.nome}
              aria-describedby={errors.nome ? "nome-error" : undefined}
              {...register("nome", { required: "Nome é obrigatório" })}
            />
            {errors.nome && <p id="nome-error" className={errorClass} role="alert">{errors.nome.message}</p>}
          </div>

          {/* Email e telefone */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-pitaua-dark mb-1.5">
                E-mail <span aria-hidden className="text-red-500">*</span>
              </label>
              <input
                id="email"
                type="email"
                placeholder="seu@email.com"
                className={inputClass}
                aria-required="true"
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                {...register("email", {
                  required: "E-mail é obrigatório",
                  pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: "E-mail inválido" },
                })}
              />
              {errors.email && <p id="email-error" className={errorClass} role="alert">{errors.email.message}</p>}
            </div>
            <div>
              <label htmlFor="telefone" className="block text-sm font-medium text-pitaua-dark mb-1.5">
                Telefone / WhatsApp <span aria-hidden className="text-red-500">*</span>
              </label>
              <input
                id="telefone"
                type="tel"
                placeholder="(19) 9 0000-0000"
                className={inputClass}
                aria-required="true"
                aria-invalid={!!errors.telefone}
                aria-describedby={errors.telefone ? "telefone-error" : undefined}
                {...register("telefone", { required: "Telefone é obrigatório" })}
              />
              {errors.telefone && <p id="telefone-error" className={errorClass} role="alert">{errors.telefone.message}</p>}
            </div>
          </div>

          {/* Tipo de evento */}
          <div>
            <label htmlFor="tipoEvento" className="block text-sm font-medium text-pitaua-dark mb-1.5">
              Tipo de evento <span aria-hidden className="text-red-500">*</span>
            </label>
            <select
              id="tipoEvento"
              className={inputClass}
              aria-required="true"
              aria-invalid={!!errors.tipoEvento}
              aria-describedby={errors.tipoEvento ? "tipoEvento-error" : undefined}
              defaultValue=""
              {...register("tipoEvento", { required: "Selecione o tipo de evento" })}
            >
              <option value="" disabled>Selecione o tipo de evento</option>
              {form.tiposEvento.map((tipo) => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
            {errors.tipoEvento && <p id="tipoEvento-error" className={errorClass} role="alert">{errors.tipoEvento.message}</p>}
          </div>

          {/* Data e número de pessoas */}
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label htmlFor="dataPrevista" className="block text-sm font-medium text-pitaua-dark mb-1.5">
                Data prevista
              </label>
              <input
                id="dataPrevista"
                type="date"
                className={inputClass}
                {...register("dataPrevista")}
              />
            </div>
            <div>
              <label htmlFor="numeroPessoas" className="block text-sm font-medium text-pitaua-dark mb-1.5">
                Número estimado de pessoas
              </label>
              <input
                id="numeroPessoas"
                type="number"
                min="1"
                placeholder="Ex: 50"
                className={inputClass}
                {...register("numeroPessoas")}
              />
            </div>
          </div>

          {/* Mensagem */}
          <div>
            <label htmlFor="mensagem" className="block text-sm font-medium text-pitaua-dark mb-1.5">
              Mensagem / detalhes adicionais
            </label>
            <textarea
              id="mensagem"
              rows={4}
              placeholder="Conte mais sobre o seu evento, necessidades especiais, dúvidas..."
              className={`${inputClass} resize-none`}
              {...register("mensagem")}
            />
          </div>

          <Button
            type="submit"
            variant="primary"
            size="lg"
            className="w-full"
          >
            Solicitar orçamento pelo WhatsApp
          </Button>

          <p className="text-center text-xs text-pitaua-dark/40">
            Ao enviar, você será direcionado ao WhatsApp para continuar o contato.
          </p>
        </form>
      </div>
    </section>
  );
}
