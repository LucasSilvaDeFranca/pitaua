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
      "Venha pescar no Pesqueiro Pitauá em Socorro-SP. Lago bem abastecido, estrutura completa e natureza exuberante para uma experiência inesquecível de pesca esportiva.",
  },
  hero: {
    title: "Pesca esportiva no coração da natureza",
    subtitle: "Lago bem abastecido em Socorro-SP para momentos de pura tranquilidade",
    cta: "Fale conosco",
    imagePlaceholder:
      "IMAGEM HERO: Vista do lago de pesca — água límpida, natureza ao redor, pescador ou cana — foto panorâmica de alta qualidade",
  },
  intro: {
    title: "O pesqueiro que você procurava",
    text: "O Pesqueiro Pitauá é um dos destaques do nosso centro de lazer em Socorro-SP. Com lago bem abastecido e um ambiente de tranquilidade única, é o lugar perfeito para quem busca uma pescaria de qualidade cercado pela natureza. Seja você um pescador experiente ou alguém que quer experimentar pela primeira vez, o Pitauá tem estrutura para proporcionar uma experiência completa.",
  },
  experiencia: {
    title: "A experiência de pescar no Pitauá",
    itens: [
      {
        icon: "Fish",
        title: "Lago de pesca",
        description:
          "Um lago bem cuidado e abastecido com peixes de diferentes espécies, em meio à natureza de Socorro-SP. Cenário ideal para pescadores experientes ou para quem está começando.",
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
      "Lago de pesca esportiva",
      "Área de descanso à beira do lago",
      "Estacionamento",
      "Banheiros",
      "Área coberta para aguardar ou descansar",
      "Acesso a restaurante",
    ],
    imagePlaceholder:
      "IMAGEM: Vista geral da área do pesqueiro — lago, estrutura e natureza",
  },
  infoPraticas: {
    title: "Informações práticas",
    items: [
      {
        icon: "Clock",
        title: "Horário de Funcionamento",
        content: "Seg–Sex: 8h às 18h • Sáb e Dom: 8h às 19h",
      },
      {
        icon: "DollarSign",
        title: "Valores",
        content: "Pesca esportiva: R$ 60,00 por pessoa",
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
        openModal: "regulamento" as const,
      },
    ],
    regulamento: {
      label: "Regulamento",
      title: "Regras de pescaria",
      intro:
        "Nosso pesqueiro funciona somente para pesca esportiva (pesque e solte) e não é permitida a pesca noturna. O cumprimento das regras é essencial para que todos desfrutem de uma boa experiência.",
      horarios: {
        title: "Horário de pesca",
        items: [
          { label: "Dias da semana", horario: "8h às 18h" },
          { label: "Finais de semana", horario: "8h às 19h" },
        ],
      },
      regras: [
        "É proibido o uso de alicate de contenção, para qualquer finalidade.",
        "É proibido tocar, segurar, introduzir objetos ou suspender os peixes pelas guelras.",
        "É proibido o uso de anzol com fisgas, garatéia ou utilizar mais de um anzol.",
        "É proibido o uso de iscas artificiais e linhas de multifilamento.",
        "Para fotos ou filmagens, segure o peixe ajoelhado ao chão, junto ao corpo, evitando quedas e ferimentos graves ao animal.",
        "Ao devolver o peixe à água, faça-o na beira do lago utilizando o passaguá e solte-o devagar — nunca jogue o peixe no lago.",
        "Retire o peixe da água somente com o passaguá.",
        "Não deixe o peixe fora d'água por mais de 1 minuto.",
        "Permitidas no máximo 02 varas por pescador.",
        "Não jogue restos de alimentos, cevas, rações, iscas ou objetos no lago. Sobras devem ser levadas embora.",
        "Respeite os demais pescadores — a boa educação é fundamental para a convivência no pesqueiro.",
        "Ao sair do lago, recolha seu lixo e descarte-o no local adequado.",
      ],
      multas: {
        title: "Penalidades",
        intro:
          "O Pesqueiro Pitauá reserva-se o direito de multar ou, em situações mais agravantes, encerrar imediatamente a pescaria.",
        items: [
          {
            valor: "R$ 200,00 / kg",
            descricao:
              "Em caso de má conduta que resulte na morte de algum peixe, independentemente da espécie.",
          },
          {
            valor: "R$ 50,00",
            descricao:
              "Pelo uso de objetos ou itens classificados como proibidos dentro do pesqueiro.",
          },
        ],
      },
    },
  },
  galeria: {
    title: "Galeria do Pesqueiro",
  },
};
