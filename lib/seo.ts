import { SITE_URL, ADDRESS, CONTACT, SOCIAL, GEO, OPENING_HOURS } from "./constants";

export function buildJsonLd(type: string, data: Record<string, unknown>) {
  return {
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  };
}

export const localBusinessBase = {
  name: "Pitauá Centro de Lazer",
  url: SITE_URL,
  telephone: CONTACT.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS.street,
    addressLocality: ADDRESS.city,
    addressRegion: ADDRESS.state,
    postalCode: ADDRESS.cep,
    addressCountry: "BR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: GEO.latitude,
    longitude: GEO.longitude,
  },
  openingHours: OPENING_HOURS,
  sameAs: [...SOCIAL.instagrams.map((i) => i.url), SOCIAL.facebook],
};

export const jsonLdHub = buildJsonLd("TouristAttraction", {
  ...localBusinessBase,
  "@type": ["TouristAttraction", "LocalBusiness"],
  description:
    "Centro de lazer completo em Socorro-SP com pousada, restaurante, pesqueiro e espaço para eventos.",
  touristType: ["Families", "Couples", "Groups"],
  availableLanguage: ["Portuguese"],
});

export const jsonLdPousada = buildJsonLd("LodgingBusiness", {
  ...localBusinessBase,
  "@type": "LodgingBusiness",
  name: "Pousada Pitauá — Socorro-SP",
  description:
    "Pousada com 15 quartos em Socorro-SP. Café da manhã incluso, piscina adulto e infantil, playground e mini fazenda.",
  numberOfRooms: 15,
  amenityFeature: [
    { "@type": "LocationFeatureSpecification", name: "Piscina", value: true },
    { "@type": "LocationFeatureSpecification", name: "Café da Manhã Incluso", value: true },
    { "@type": "LocationFeatureSpecification", name: "Wi-Fi", value: true },
    { "@type": "LocationFeatureSpecification", name: "Estacionamento", value: true },
  ],
});

export const jsonLdGastronomia = buildJsonLd("Restaurant", {
  ...localBusinessBase,
  "@type": "Restaurant",
  name: "Restaurante Pitauá — Socorro-SP",
  description:
    "Restaurante com gastronomia regional em Socorro-SP. Café da manhã incluso e almoço com pratos do interior paulista.",
  servesCuisine: ["Brazilian", "Regional"],
  hasMenu: SITE_URL + "/gastronomia/cardapio",
});

export const jsonLdPesqueiro = buildJsonLd("SportsActivityLocation", {
  ...localBusinessBase,
  "@type": "SportsActivityLocation",
  name: "Pesqueiro Pitauá — Socorro-SP",
  description:
    "Pesqueiro com lago de pesca esportiva em Socorro-SP. Ambiente natural e estrutura completa para uma experiência de pesca inesquecível.",
  sport: "Fishing",
});

export const jsonLdEventos = buildJsonLd("EventVenue", {
  ...localBusinessBase,
  "@type": "EventVenue",
  name: "Espaço de Eventos Pitauá — Socorro-SP",
  description:
    "Espaço para eventos em Socorro-SP. Aniversários, confraternizações, eventos corporativos e celebrações especiais em meio à natureza.",
});

export function serializeJsonLd(data: Record<string, unknown>): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}
