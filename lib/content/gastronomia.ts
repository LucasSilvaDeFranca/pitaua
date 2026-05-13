export type MenuItem = {
  nome: string;
  descricao?: string;
  porcao?: string;
  preco: string;
  precoApartirDe?: boolean;
};

export type MenuSecao = {
  id: string;
  titulo: string;
  itens: MenuItem[];
};

export const gastronomiaContent = {
  meta: {
    title: "Restaurante Pitauá em Socorro-SP | Gastronomia com Sabor do Interior",
    description:
      "Venha saborear a gastronomia do Restaurante Pitauá em Socorro-SP. Café da manhã incluso para hóspedes, almoço com pratos da culinária regional e ambiente acolhedor.",
  },
  hero: {
    title: "Gastronomia com alma de interior",
    subtitle: "Sabores autênticos preparados com carinho em Socorro-SP",
    cta: "Fale conosco",
    imagePlaceholder:
      "IMAGEM HERO: Mesa posta com pratos típicos ou ambiente do restaurante — foto de alta qualidade, iluminação quente",
  },
  intro: {
    title: "Uma experiência gastronômica completa",
    text: "No Pitauá, a gastronomia é parte essencial da experiência. Nosso restaurante funciona em um ambiente acolhedor e rústico, onde os sabores do interior paulista chegam à mesa com qualidade e carinho. Do café da manhã reforçado ao almoço com pratos regionais, cada refeição é uma nova razão para voltar.",
  },
  cafeManha: {
    title: "Café da Manhã",
    subtitle: "O melhor jeito de começar o dia",
    description:
      "O café da manhã do Pitauá é um dos favoritos dos hóspedes. Farto, variado e preparado com ingredientes frescos, inclui pães artesanais, bolos caseiros, frutas da estação, frios, ovos e muito mais — tudo com o sabor de comida feita em casa.",
    itens: [
      "Pães artesanais e bolos caseiros",
      "Frutas frescas da estação",
      "Frios e queijos",
      "Ovos mexidos e estrelados",
      "Sucos naturais",
      "Café, leite e achocolatado",
      "Geleias e doces artesanais",
    ],
    imagePlaceholder:
      "IMAGEM: Mesa de café da manhã farta — pães, frutas, sucos, ambiente acolhedor",
  },
  restaurante: {
    title: "Restaurante",
    subtitle: "Pratos que contam histórias",
    description:
      "Nosso restaurante serve almoços com cardápio regional, valorizando os ingredientes locais e as receitas que fazem parte da cultura do interior paulista. O ambiente é perfeito para reunir a família ou confraternizar com amigos em meio à natureza.",
    horario: "Almoço: domingos e feriados / Consulte disponibilidade para outros dias",
    imagePlaceholder:
      "IMAGEM: Prato principal servido no restaurante — apresentação cuidadosa, ambiente ao fundo",
  },
  cardapio: {
    title: "Cardápio do Restaurante",
    subtitle: "Sabores do interior paulista, à la carte",
    nota: "Preços e itens sujeitos a alteração sem aviso prévio. Consulte disponibilidade pelo WhatsApp.",
    secoes: [
      {
        id: "porcoes",
        titulo: "Porções",
        itens: [
          { nome: "Amendoim", preco: "R$ 7,00" },
          { nome: "Azeitona", preco: "R$ 7,00" },
          { nome: "Batata Frita", porcao: "500gr", preco: "R$ 32,00" },
          { nome: "Batata Frita Especial", descricao: "Queijo e Bacon", porcao: "500gr", preco: "R$ 40,00" },
          { nome: "Bolinho de Tilápia", porcao: "12 und.", preco: "R$ 34,00" },
          { nome: "Bolinha de Queijo", porcao: "12 und.", preco: "R$ 25,00" },
          { nome: "Ceviche de Tilápia", porcao: "250gr", preco: "R$ 42,00" },
          { nome: "Ceviche de Salmão", porcao: "250gr", preco: "R$ 42,00" },
          { nome: "Costelinha de Porco c/ Barbecue", porcao: "800gr", preco: "R$ 58,00" },
          { nome: "Costelinha de Porco c/ Mandioca", porcao: "400gr proteína + 300gr mandioca", preco: "R$ 54,00" },
          { nome: "Coxinha", porcao: "12 und.", preco: "R$ 25,00" },
          { nome: "Frango à Passarinho", porcao: "900gr", preco: "R$ 48,00" },
          { nome: "Isca de Frango Acebolado", porcao: "550gr", preco: "R$ 42,00" },
          { nome: "Isca de Filé Mignon", porcao: "500gr", preco: "R$ 72,00" },
          { nome: "Isca de Tilápia", porcao: "500gr", preco: "R$ 58,00" },
          { nome: "Isca de Tilápia Defumada", porcao: "500gr", preco: "R$ 62,00" },
          { nome: "Mandioca Frita", porcao: "600gr", preco: "R$ 32,00" },
          { nome: "Polenta Frita", porcao: "500gr", preco: "R$ 30,00" },
          { nome: "Pérolas de Provolone", porcao: "200gr", preco: "R$ 28,00" },
          { nome: "Torresmo de Rolo", porcao: "800gr", preco: "R$ 76,00" },
          { nome: "Arroz", preco: "R$ 11,90", precoApartirDe: true },
          { nome: "Arroz à Grega", preco: "R$ 14,90", precoApartirDe: true },
          { nome: "Feijão", preco: "R$ 11,90", precoApartirDe: true },
          { nome: "Farofa", preco: "R$ 10,90" },
          { nome: "Vinagrete", preco: "R$ 8,90" },
          { nome: "Pirão", preco: "R$ 11,90" },
        ],
      },
      {
        id: "saladas",
        titulo: "Saladas",
        itens: [
          {
            nome: "Salada da Casa",
            descricao: "Alface, Tomate, Cebola Roxa, Ervilha, Cenoura, Palmito e Azeitona",
            preco: "R$ 30,00",
          },
          {
            nome: "Salada de Rúcula",
            descricao: "Rúcula, Tomate Cereja e Palmito",
            preco: "R$ 27,00",
          },
          {
            nome: "Salada Italiana",
            descricao: "Alface, Alcaparras, Rúcula, Parmesão, Tomate Seco e Molho italiano",
            preco: "R$ 34,00",
          },
          {
            nome: "Salada Simples",
            descricao: "Alface, Cebola e Tomate",
            preco: "R$ 22,00",
          },
        ],
      },
      {
        id: "pratos",
        titulo: "Pratos à La Carte",
        itens: [
          {
            nome: "Parmegiana de Tilápia",
            descricao: "Acompanha Arroz e Fritas",
            preco: "R$ 72,00",
            precoApartirDe: true,
          },
          {
            nome: "Parmegiana de Frango",
            descricao: "Acompanha Arroz e Fritas",
            preco: "R$ 68,00",
            precoApartirDe: true,
          },
          {
            nome: "Parmegiana de Filé Mignon",
            descricao: "Acompanha Arroz e Fritas",
            preco: "R$ 82,00",
            precoApartirDe: true,
          },
          {
            nome: "Tilápia Soft",
            descricao: "Arroz, Cenoura, Mandioca, Brócolis e Ervilha",
            preco: "R$ 58,00",
            precoApartirDe: true,
          },
          {
            nome: "Salmão ao Molho de Maracujá",
            descricao: "Arroz, Cenoura, Brócolis e Couve-flor",
            preco: "R$ 69,00",
          },
          {
            nome: "Tilápia à Belleamuniere",
            descricao: "Arroz, Brócolis, Camarão, Alcaparras e Champignon",
            preco: "R$ 82,00",
            precoApartirDe: true,
          },
          {
            nome: "Risoto de Camarão",
            descricao: "Arroz arbóreo, Manteiga, Tomate, Camarão, Parmesão e Cebola",
            preco: "R$ 68,00",
          },
          {
            nome: "Risoto de Palmito",
            descricao: "Arroz arbóreo, Manteiga, Tomate, Palmito, Cebola, Amêndoas laminadas e Parmesão",
            preco: "R$ 72,00",
          },
          {
            nome: "Peixe Delícia Gratinado",
            descricao: "Arroz, Tilápia à milanesa, Molho Branco, Banana e Queijo gratinado",
            preco: "R$ 64,00",
          },
          {
            nome: "Camarão Gratinado",
            descricao: "Arroz cremoso, Batata palha, Presunto, Ervilha, Mussarela e Camarão",
            preco: "R$ 69,00",
          },
          {
            nome: "Tilápia Pitauá",
            descricao: "Arroz, Filé de Tilápia, Molho branco e Mussarela gratinada",
            preco: "R$ 72,00",
            precoApartirDe: true,
          },
          {
            nome: "Filé Mignon Grelhado",
            descricao: "Arroz, Batata Frita, Vinagrete e Farofa",
            preco: "R$ 74,00",
          },
        ],
      },
      {
        id: "sobremesa",
        titulo: "Sobremesa",
        itens: [
          { nome: "Torta Holandesa", preco: "R$ 22,90" },
          { nome: "Pudim de Leite Condensado", preco: "R$ 14,90" },
        ],
      },
    ] satisfies MenuSecao[],
  },
  galeria: {
    title: "Um ambiente para boas lembranças",
    imagePlaceholders: [
      "IMAGEM: Interior do restaurante — mesas e decoração",
      "IMAGEM: Prato principal elaborado",
      "IMAGEM: Café da manhã em destaque",
      "IMAGEM: Área externa do restaurante ou varanda",
      "IMAGEM: Detalhes da decoração — objetos rústicos, flores",
      "IMAGEM: Equipe ou cozinha (opcional)",
    ],
  },
  eventos: {
    title: "Eventos e Celebrações",
    description:
      "Nosso espaço gastronômico também está disponível para eventos privados, confraternizações e celebrações especiais. Consulte-nos para montar o menu ideal para o seu evento.",
    cta: "Saiba mais sobre eventos",
  },
};
