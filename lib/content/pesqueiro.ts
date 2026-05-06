import fs from "node:fs";
import path from "node:path";

export function getPesqueiroGaleriaImages() {
  const dir = path.join(process.cwd(), "public/images/pesqueiro/galeria");
  if (!fs.existsSync(dir)) return [];
  return fs
    .readdirSync(dir)
    .filter((f) => /\.(jpe?g|png|webp|avif)$/i.test(f))
    .sort((a, b) => a.localeCompare(b, undefined, { numeric: true }))
    .map((file, i) => ({
      src: `/images/pesqueiro/galeria/${file}`,
      alt: `Pesqueiro Pitauá em Socorro-SP — foto ${i + 1}`,
    }));
}

export const pesqueiroContent = {
  meta: {
    title: "Pesqueiro Pitauá em Socorro-SP | Pesca Esportiva em Plena Natureza",
    description:
      "Venha pescar no Pesqueiro Pitauá em Socorro-SP. Lagos bem abastecidos, estrutura completa e natureza exuberante para uma experiência inesquecível de pesca esportiva.",
  },
  hero: {
    title: "Pesca esportiva no coração da natureza",
    subtitle: "Lagos bem abastecidos em Socorro-SP para momentos de pura tranquilidade",
    cta: "Fale conosco",
    imagePlaceholder:
      "IMAGEM HERO: Vista do lago de pesca — água límpida, natureza ao redor, pescador ou cana — foto panorâmica de alta qualidade",
  },
  intro: {
    title: "O pesqueiro que você procurava",
    text: "O Pesqueiro Pitauá é um dos destaques do nosso centro de lazer em Socorro-SP. Com lagos bem abastecidos e um ambiente de tranquilidade única, é o lugar perfeito para quem busca uma pescaria de qualidade cercado pela natureza. Seja você um pescador experiente ou alguém que quer experimentar pela primeira vez, o Pitauá tem estrutura para proporcionar uma experiência completa.",
  },
  experiencia: {
    title: "A experiência de pescar no Pitauá",
    itens: [
      {
        icon: "Fish",
        title: "Lagos Bem Abastecidos",
        description:
          "Nossos lagos são mantidos com peixes de diferentes espécies, garantindo boas pescadas para visitantes de todos os níveis de experiência.",
      },
      {
        icon: "Trees",
        title: "Natureza Preservada",
        description:
          "Pescar no Pitauá é pescar cercado de natureza. Árvores, pássaros e ar puro fazem parte da experiência e tornam cada momento ainda mais especial.",
      },
      {
        icon: "Users",
        title: "Ideal para Grupos",
        description:
          "O pesqueiro é uma ótima opção para grupos de amigos, famílias ou confraternizações que querem unir lazer e natureza.",
      },
      {
        icon: "Sun",
        title: "Ambiente Tranquilo",
        description:
          "Longe do barulho e da correria, o pesqueiro do Pitauá oferece o ambiente perfeito para descansar enquanto pesca.",
      },
    ],
    imagePlaceholder:
      "IMAGEM: Pescador com vara na margem do lago — ambiente natural, reflexo na água",
  },
  estrutura: {
    title: "Estrutura disponível",
    itens: [
      "Lagos de pesca esportiva",
      "Área de descanso à beira do lago",
      "Estacionamento",
      "Banheiros",
      "Área coberta para aguardar ou descansar",
      "Acesso a restaurante",
    ],
    imagePlaceholder:
      "IMAGEM: Vista geral da área do pesqueiro — lagos, estrutura e natureza",
  },
  infoPraticas: {
    title: "Informações práticas",
    items: [
      {
        icon: "Clock",
        title: "Horário de Funcionamento",
        content: "Consulte horários atualizados pelo WhatsApp", // SUBSTITUIR quando disponível
      },
      {
        icon: "DollarSign",
        title: "Valores",
        content: "Consulte valores e pacotes disponíveis pelo WhatsApp", // SUBSTITUIR quando disponível
      },
      {
        icon: "PackageCheck",
        title: "O que levar",
        content: "Vara de pesca, isca, protetor solar, chapéu e roupas confortáveis",
      },
      {
        icon: "ShieldCheck",
        title: "Regras",
        content: "Pesca e soltura ou pesca para consumo. Consulte as regras vigentes no local.",
      },
    ],
  },
  galeria: {
    title: "Galeria do Pesqueiro",
  },
};
