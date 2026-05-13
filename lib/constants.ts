// PERSONALIZE AQUI: substitua com os dados reais do Pitauá.
// Para sobrescrever sem editar o código, use variáveis de ambiente
// (NEXT_PUBLIC_*) — veja .env.example.

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://pitaua.com.br";

// Número WhatsApp principal (Pousada) em formato internacional — só dígitos.
// Pode ser sobrescrito via NEXT_PUBLIC_WHATSAPP_NUMBER. Fallback = Pousada.
const RAW_WHATSAPP =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER ?? "5519996073390";

export const WHATSAPP_NUMBER = RAW_WHATSAPP.replace(/\D/g, "");

export const CONTACT = {
  whatsapp: WHATSAPP_NUMBER,
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL ?? "contato@pitaua.com.br",
  phone: "(19) 99607-3390",
  phoneE164: "+55-19-99607-3390",
};

// Número que atende a bolinha flutuante de WhatsApp em todas as páginas.
// Atendimento principal (Restaurante) — front-of-house é o canal mais ativo.
export const FLOAT_WHATSAPP = "5519997444578";

// Lista completa de canais de contato — usada no footer.
export const PHONES = [
  { label: "Pousada", display: "(19) 99607-3390", whatsapp: "5519996073390" },
  { label: "Pesqueiro e Restaurante", display: "(19) 99744-4578", whatsapp: "5519997444578" },
] as const;

export const EMAILS = [
  { label: "Contato", address: "pousadapitaua@gmail.com" },
] as const;

export const HOURS = [
  {
    label: "Restaurante",
    schedule: "Quarta a Domingo: 11h às 16h",
  },
  {
    label: "Pesqueiro",
    schedule: "Quarta a Domingo: 08h às 18h",
    note: "01 lago de pesca",
  },
] as const;

export const ADDRESS = {
  street: "Rod. Otávio de Oliveira Santos, Km3",
  city: "Socorro",
  state: "SP",
  cep: "", // PENDENTE — preencher com o CEP oficial do Pitauá
  full: "Rod. Otávio de Oliveira Santos, Km3 | Socorro/SP",
  mapsEmbed:
    "https://www.google.com/maps?q=-22.5605463,-46.5404522&hl=pt-BR&z=16&output=embed",
  mapsLink: "https://maps.app.goo.gl/61bWkKfdi1Extug59",
};

export const GEO = {
  latitude: "-22.5605463",
  longitude: "-46.5404522",
};

export const OPENING_HOURS = "Mo-Su 07:00-22:00"; // SUBSTITUIR — formato schema.org

export const SOCIAL = {
  facebook: "https://www.facebook.com/centropitaua.socorrosp",
  instagrams: [
    {
      label: "Centro de Lazer",
      scope: "Restaurante & Pesqueiro",
      url: "https://www.instagram.com/pitauacentrodelazer/",
    },
    {
      label: "Pousada",
      scope: "Pousada Pitauá",
      url: "https://www.instagram.com/pousadapitaua/",
    },
  ],
} as const;

// Sistema de reservas online da Pousada (Cloudbeds).
export const BOOKING_URL =
  process.env.NEXT_PUBLIC_BOOKING_URL ?? "https://hotels.cloudbeds.com/reservas/jFItN4";

export const WHATSAPP_MESSAGES = {
  geral:
    "Olá! Vim pelo site e gostaria de mais informações sobre o Pitauá.",
  pousada:
    "Olá! Gostaria de informações sobre hospedagem na Pousada Pitauá.",
  gastronomia:
    "Olá! Gostaria de informações sobre o restaurante do Pitauá.",
  pesqueiro:
    "Olá! Gostaria de informações sobre o pesqueiro do Pitauá.",
  eventos:
    "Olá! Gostaria de solicitar um orçamento para evento no Pitauá.",
};

export function getWhatsAppLink(message: string, number: string = WHATSAPP_NUMBER): string {
  const digits = number.replace(/\D/g, "");
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;
}
