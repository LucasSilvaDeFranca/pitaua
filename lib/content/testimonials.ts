/**
 * Depoimentos curados de hóspedes e visitantes.
 *
 * REGRA EDITORIAL: só depoimentos reais e positivos (4-5 estrelas).
 * Apresentar como "Depoimentos" — NUNCA chamar de "Avaliações" para
 * não induzir o leitor a crer que é uma amostra completa do Google.
 */

export type TestimonialSource =
  | "Google"
  | "Tripadvisor"
  | "WhatsApp"
  | "Instagram"
  | "Facebook"
  | "Livro de hóspedes";

export interface Testimonial {
  name: string;
  location?: string;
  rating: 4 | 5;
  text: string;
  date?: string;
  source?: TestimonialSource;
}

export const pousadaTestimonials: Testimonial[] = [
  {
    name: "Daniela Moreti",
    rating: 5,
    text: "Uma experiência maravilhosa, pousada com ótima estrutura. Buffet de café da manhã fantástico. Com certeza voltaremos e super recomendamos.",
    source: "Tripadvisor",
  },
  {
    name: "Maria Marques",
    rating: 5,
    text: "Lugar maravilhoso para descansar. Atendimento dos funcionários foi excelente — chegamos antes do horário do check-in e conseguiram liberar o quarto. Tudo conforme esperávamos.",
    source: "Tripadvisor",
  },
  {
    name: "Tainã Martins",
    rating: 5,
    text: "Que lugar gostoso! Atendimento maravilhoso dos funcionários, muitos bichinhos para as crianças, hidromassagem incrível e espaçosa!",
    source: "Tripadvisor",
  },
  {
    name: "Aracelly Valeska Vidal Amorim Benedito",
    rating: 5,
    text: "A pousada é muito acolhedora e organizada, o restaurante é muito bom e o local é uma delícia! Recomendo.",
    source: "Tripadvisor",
  },
  {
    name: "Francisco Costa",
    rating: 5,
    text: "O atendimento do Murillo foi excelente, e ele ainda deu dicas sobre passeios na região. O café da manhã é maravilhoso.",
    source: "Tripadvisor",
  },
];

export const pesqueiroTestimonials: Testimonial[] = [
  {
    name: "Bruna Spada Damasceno",
    rating: 5,
    text: "Daqueles lugares que a gente visita e já quer voltar. A vista é desbravadora — daquelas que fazem o tempo desacelerar e esquecer da correria. Um lugar especial, perfeito para relaxar, apreciar a natureza e comer bem. Super recomendado!",
    source: "Tripadvisor",
  },
  {
    name: "Taís Rodrigues",
    rating: 5,
    text: "A pesca esportiva é muito boa, inclusive com peixes grandes — chegamos a marcar uma trintada na pesagem! O ambiente transmite paz e tranquilidade, perfeito pra relaxar. Recomendo e com certeza voltaria.",
    source: "Tripadvisor",
  },
  {
    name: "Antônio Duarte",
    rating: 5,
    text: "Conheço muitos locais na região, e posso afirmar: este é o melhor lugar para descanso e lazer. Restaurante muito bonito, vista maravilhosa e comida de primeira linha. Voltarei sempre com minha família.",
    source: "Tripadvisor",
  },
  {
    name: "Valeria Paiva",
    rating: 5,
    text: "O pesqueiro é sensacional, perfeito para relaxar e se divertir. Excelente custo-benefício — vale muito a pena pela estrutura, qualidade do serviço e experiência no geral. Com certeza voltaremos mais vezes. Recomendo demais!",
    source: "Tripadvisor",
  },
  {
    name: "Pedro",
    rating: 5,
    text: "A ótima recepção do João e o atendimento dos garçons, que ajudaram na escolha dos pratos, foram perfeitos. Pratos saborosos e com preço justo. Durante o feriado de Carnaval voltei 2 vezes para experimentar pratos diferentes — valeu a pena!",
    source: "Tripadvisor",
  },
];
