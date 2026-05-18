export type MenuItem = {
  nome: string;
  descricao?: string;
  porcao?: string;
  preco: string;
  precoApartirDe?: boolean;
  imagem?: string;
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
    title: "Restaurante com alma de interior",
    subtitle: "Sabores autênticos preparados com carinho em Socorro-SP",
    cta: "Ver cardápio",
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
      "Nosso restaurante serve almoços com cardápio regional e é aberto ao público, valorizando os ingredientes locais e as receitas que fazem parte da cultura do interior paulista. O ambiente é perfeito para reunir a família ou confraternizar com amigos em meio à natureza.",
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
          { nome: "Amendoim", preco: "R$ 7,00", imagem: "/images/gastronomia/porcoes/amendoim.png" },
          { nome: "Azeitona", preco: "R$ 7,00", imagem: "/images/gastronomia/porcoes/azeitona.png" },
          { nome: "Batata Frita", descricao: "Sequinhas e crocantes", porcao: "500g", preco: "R$ 32,00", imagem: "/images/gastronomia/porcoes/batata-frita.jpg" },
          { nome: "Batata Frita Especial", descricao: "Com queijo e bacon ou requeijão cremoso", porcao: "500g", preco: "R$ 40,00", imagem: "/images/gastronomia/porcoes/batata-frita-especial.jpg" },
          { nome: "Bolinho de Queijo", descricao: "Aquela mordida que você pede para não acabar", porcao: "12 unidades", preco: "R$ 25,00", imagem: "/images/gastronomia/porcoes/bolinho-queijo.jpg" },
          { nome: "Bolinho de Tilápia", descricao: "Crocantes e saborosos", preco: "R$ 34,00", imagem: "/images/gastronomia/porcoes/bolinho-tilapia.jpg" },
          { nome: "Costelinha de Porco com Barbecue", descricao: "Macias e saborosas", porcao: "800g", preco: "R$ 58,00", imagem: "/images/gastronomia/porcoes/costelinha-barbecue.jpg" },
          { nome: "Costelinha de Porco com Mandioca", descricao: "Sinta a carne derreter", porcao: "400g proteína + 300g mandioca", preco: "R$ 54,00", imagem: "/images/gastronomia/porcoes/costelinha-mandioca.jpg" },
          { nome: "Casquinha de Siri", porcao: "1 unidade - 150g", preco: "R$ 26,00", imagem: "/images/gastronomia/porcoes/casquinha-siri.png" },
          { nome: "Camarão Rosa Empanado", porcao: "12 unidades", preco: "R$ 160,00", imagem: "/images/gastronomia/porcoes/camarao-empanado.jpg" },
          { nome: "Camarão Rosa Alho e Óleo", porcao: "12 unidades", preco: "R$ 154,00", imagem: "/images/gastronomia/porcoes/camarao-alho-oleo.jpeg" },
          { nome: "Ceviche de Salmão", descricao: "Incrível e saboroso", preco: "R$ 42,00", imagem: "/images/gastronomia/porcoes/ceviche.jpg" },
          { nome: "Ceviche de Tilápia", descricao: "Incrível e saboroso", preco: "R$ 42,00", imagem: "/images/gastronomia/porcoes/ceviche.jpg" },
          { nome: "Coxinha", porcao: "12 unidades", preco: "R$ 25,00", imagem: "/images/gastronomia/porcoes/coxinha.jpg" },
          { nome: "Filé de Frango Acebolado na Chapa", porcao: "550g", preco: "R$ 42,00", imagem: "/images/gastronomia/porcoes/frango-acebolado.jpg" },
          { nome: "Frango à Passarinho", descricao: "Saboroso em cada mordida", porcao: "900g", preco: "R$ 48,00", imagem: "/images/gastronomia/porcoes/frango-passarinho.jpg" },
          { nome: "Isca de Filé Mignon", descricao: "Clássico e saboroso", porcao: "500g", preco: "R$ 72,00", imagem: "/images/gastronomia/porcoes/isca-file-mignon.jpg" },
          { nome: "Isca de Tilápia", descricao: "Fatiada e servida em tiras crocantes e saborosas", porcao: "500g", preco: "R$ 58,00", imagem: "/images/gastronomia/porcoes/isca-tilapia.jpg" },
          { nome: "Isca de Tilápia Defumada", porcao: "500g", preco: "R$ 62,00", imagem: "/images/gastronomia/porcoes/isca-tilapia-defumada.jpg" },
          { nome: "Linguiça na Tábua", descricao: "Acompanha farofa, vinagrete e molho da casa", porcao: "800g", preco: "R$ 68,00", imagem: "/images/gastronomia/porcoes/linguica-tabua.png" },
          { nome: "Mandioca Frita", descricao: "Deliciosamente saborosa em cada mordida", preco: "R$ 28,00", imagem: "/images/gastronomia/porcoes/mandioca-frita.jpg" },
          { nome: "Pérolas de Provolone", porcao: "200g", preco: "R$ 28,00", imagem: "/images/gastronomia/porcoes/perolas-provolone.jpg" },
          { nome: "Torresmo de Rolo", descricao: "Crocante e com sabor incomparável", preco: "R$ 76,00", imagem: "/images/gastronomia/porcoes/torresmo-rolo.jpg" },
          { nome: "Arroz", descricao: "2 pessoas: R$ 15,90", porcao: "1 pessoa", preco: "R$ 11,90", precoApartirDe: true, imagem: "/images/gastronomia/porcoes/arroz.jpg" },
          { nome: "Arroz à Grega", descricao: "2 pessoas: R$ 17,90", porcao: "1 pessoa", preco: "R$ 14,90", precoApartirDe: true, imagem: "/images/gastronomia/porcoes/arroz.jpg" },
          { nome: "Feijão", descricao: "2 pessoas: R$ 15,90", porcao: "1 pessoa", preco: "R$ 11,90", precoApartirDe: true, imagem: "/images/gastronomia/porcoes/feijao.jpg" },
          { nome: "Farofa", preco: "R$ 10,90", imagem: "/images/gastronomia/porcoes/farofa.jpg" },
          { nome: "Pirão", preco: "R$ 11,90", imagem: "/images/gastronomia/porcoes/pirao.jpg" },
          { nome: "Vinagrete", preco: "R$ 8,90", imagem: "/images/gastronomia/porcoes/vinagrete.jpg" },
        ],
      },
      {
        id: "saladas",
        titulo: "Saladas",
        itens: [
          {
            nome: "Salada da Casa",
            descricao: "Alface, cebola, ervilha, cenoura, palmito, tomate e azeitona",
            preco: "R$ 30,00",
            imagem: "/images/gastronomia/saladas/salada-casa.jpeg",
          },
          {
            nome: "Salada Italiana",
            descricao: "Alface americana, alcaparras, rúcula, parmesão, tomate seco e molho italiano",
            preco: "R$ 34,00",
            imagem: "/images/gastronomia/saladas/salada-italiana.jpeg",
          },
          {
            nome: "Salada Simples",
            descricao: "Alface, tomate e cebola",
            preco: "R$ 22,00",
            imagem: "/images/gastronomia/saladas/salada-simples.png",
          },
          {
            nome: "Salada de Rúcula",
            descricao: "Rúcula, tomate cereja e palmito",
            preco: "R$ 27,00",
            imagem: "/images/gastronomia/saladas/salada-rucula.jpeg",
          },
          {
            nome: "Risoto de Cogumelos (Vegano)",
            descricao: "Arroz arbóreo, azeite, tomate cereja e cogumelos. Serve 1 pessoa.",
            preco: "R$ 51,00",
            imagem: "/images/gastronomia/saladas/risoto-cogumelos.png",
          },
          {
            nome: "Talharim com Cogumelos (Vegano)",
            descricao: "Macarrão talharim, azeite, alho e cogumelos. Serve 1 pessoa.",
            preco: "R$ 49,00",
            imagem: "/images/gastronomia/saladas/talharim-cogumelos.jpeg",
          },
        ],
      },
      {
        id: "pratos",
        titulo: "Pratos à La Carte",
        itens: [
          {
            nome: "Moqueca Baiana",
            descricao: "Caldeirada de peixe com azeite de dendê, leite de coco, legumes, arroz e pirão",
            preco: "R$ 58,00",
            imagem: "/images/gastronomia/pratos/moqueca-baiana.png",
          },
          {
            nome: "Peixe Delícia Gratinado",
            descricao: "Filé de tilápia à milanesa, arroz, banana, molho branco e muçarela gratinada",
            preco: "R$ 64,00",
            imagem: "/images/gastronomia/pratos/peixe-delicia.png",
          },
          {
            nome: "Pintado na Brasa",
            descricao: "Batata rústica frita, arroz à grega, pirão e farofa. 2 pessoas: R$ 170,00",
            porcao: "1 pessoa",
            preco: "R$ 96,00",
            precoApartirDe: true,
            imagem: "/images/gastronomia/pratos/pintado-brasa.jpeg",
          },
          {
            nome: "Salmão ao Molho de Maracujá",
            descricao: "Acompanha cenoura, brócolis, couve-flor e arroz",
            preco: "R$ 69,00",
            imagem: "/images/gastronomia/pratos/salmao-maracuja.png",
          },
          {
            nome: "Salmão Dell Mare",
            descricao: "Servido sob uma camada de espinafre, pera caramelizada, castanha e uva passas, com arroz",
            preco: "R$ 78,00",
            imagem: "/images/gastronomia/pratos/salmao-dell-mare.png",
          },
          {
            nome: "Tilápia à Belle Meunière",
            descricao: "Camarão, alcaparras, champignon e arroz com brócolis. 2 pessoas: R$ 146,00",
            porcao: "1 pessoa",
            preco: "R$ 82,00",
            precoApartirDe: true,
            imagem: "/images/gastronomia/pratos/tilapia-belle-meuniere.jpg",
          },
          {
            nome: "Tilápia ao Molho Mostarda",
            descricao: "Filé grelhado com batata rústica e arroz",
            preco: "R$ 62,00",
            imagem: "/images/gastronomia/pratos/tilapia-mostarda.png",
          },
          {
            nome: "Tilápia Parmegiana",
            descricao: "Acompanha arroz e batata. 2 pessoas: R$ 126,00",
            porcao: "1 pessoa",
            preco: "R$ 72,00",
            precoApartirDe: true,
            imagem: "/images/gastronomia/pratos/tilapia-parmegiana.jpeg",
          },
          {
            nome: "Tilápia Pitauá",
            descricao: "Arroz, filé de tilápia ao molho branco com muçarela gratinada. 2 pessoas: R$ 126,00",
            porcao: "1 pessoa",
            preco: "R$ 72,00",
            precoApartirDe: true,
            imagem: "/images/gastronomia/pratos/tilapia-pitaua.jpg",
          },
          {
            nome: "Tilápia Soft com Legumes",
            descricao: "Arroz, cenoura, brócolis, mandioquinha e ervilhas. 2 pessoas: R$ 112,00",
            porcao: "1 pessoa",
            preco: "R$ 58,00",
            precoApartirDe: true,
            imagem: "/images/gastronomia/pratos/tilapia-soft.jpeg",
          },
          {
            nome: "Traíra Espalmada",
            descricao: "Sem espinha — arroz, vinagrete e farofa",
            porcao: "Serve 2 pessoas",
            preco: "R$ 112,00",
            imagem: "/images/gastronomia/pratos/tilapia-mostarda.png",
          },
          {
            nome: "Camarão Gratinado",
            descricao: "Arroz cremoso com camarão",
            preco: "R$ 69,00",
            imagem: "/images/gastronomia/pratos/camarao-gratinado.png",
          },
          {
            nome: "Camarão Recheado com Catupiry",
            descricao: "Arroz, batata frita, pirão e camarão rosa. 2 pessoas (6 unidades): R$ 237,00",
            porcao: "1 pessoa (3 unidades)",
            preco: "R$ 144,00",
            precoApartirDe: true,
            imagem: "/images/gastronomia/pratos/camarao-catupiry.jpeg",
          },
          {
            nome: "Espaguete com Camarão e Brócolis",
            descricao: "Ao alho e óleo, com brócolis e camarões. Serve 1 pessoa.",
            preco: "R$ 52,00",
            imagem: "/images/gastronomia/pratos/espaguete-camarao.jpeg",
          },
          {
            nome: "Talharim com Salmão em Cubos",
            descricao: "Ao alho e óleo com cubos de salmão. Serve 1 pessoa.",
            preco: "R$ 48,00",
            imagem: "/images/gastronomia/pratos/talharim-salmao.png",
          },
          {
            nome: "Espaguete ou Macarrão — Alho e Óleo",
            descricao: "Monte sua massa",
            preco: "R$ 37,90",
            imagem: "/images/gastronomia/pratos/monte-sua-massa.png",
          },
          {
            nome: "Espaguete ou Macarrão — Ao Sugo",
            descricao: "Monte sua massa",
            preco: "R$ 39,90",
            imagem: "/images/gastronomia/pratos/monte-sua-massa.png",
          },
          {
            nome: "Espaguete ou Macarrão — Bechamel",
            descricao: "Monte sua massa",
            preco: "R$ 41,90",
            imagem: "/images/gastronomia/pratos/monte-sua-massa.png",
          },
          {
            nome: "Risoto de Camarão",
            descricao: "Arroz arbóreo, manteiga, camarões e parmesão",
            preco: "R$ 68,00",
            imagem: "/images/gastronomia/pratos/risoto-generico.jpg",
          },
          {
            nome: "Risoto de Salmão",
            descricao: "Arroz arbóreo, tomate, cebola e parmesão",
            preco: "R$ 62,00",
            imagem: "/images/gastronomia/pratos/risoto-generico.jpg",
          },
          {
            nome: "Risoto de Alho Poró",
            descricao: "Arroz arbóreo, manteiga, tomate, cebola e alho poró",
            preco: "R$ 58,00",
            imagem: "/images/gastronomia/pratos/risoto-generico.jpg",
          },
          {
            nome: "Risoto de Palmito",
            descricao: "Arroz arbóreo, manteiga, tomate cereja, palmito, amêndoas laminadas e parmesão",
            preco: "R$ 72,00",
            imagem: "/images/gastronomia/pratos/risoto-palmito.png",
          },
          {
            nome: "Filé de Frango à Parmegiana",
            descricao: "Arroz e batata frita. 2 pessoas (500g): R$ 118,00",
            porcao: "1 pessoa - 250g",
            preco: "R$ 68,00",
            precoApartirDe: true,
            imagem: "/images/gastronomia/pratos/parmegiana.jpg",
          },
          {
            nome: "Filé Mignon à Parmegiana",
            descricao: "Arroz e batata frita. 2 pessoas (500g): R$ 152,00",
            porcao: "1 pessoa - 250g",
            preco: "R$ 82,00",
            precoApartirDe: true,
            imagem: "/images/gastronomia/pratos/parmegiana.jpg",
          },
          {
            nome: "Filé Mignon Cremoso",
            descricao: "Filé mignon em tiras com requeijão, batata rústica e arroz",
            porcao: "250g",
            preco: "R$ 82,00",
            imagem: "/images/gastronomia/pratos/parmegiana.jpg",
          },
          {
            nome: "Filé Mignon Grelhado",
            descricao: "Arroz, batata frita e vinagrete da casa",
            porcao: "250g",
            preco: "R$ 74,00",
            imagem: "/images/gastronomia/pratos/parmegiana.jpg",
          },
          {
            nome: "Medalhão Piamontese",
            descricao: "Arroz cremoso e filé mignon",
            preco: "R$ 82,00",
            imagem: "/images/gastronomia/pratos/medalhao-piamontese.png",
          },
        ],
      },
      {
        id: "novos-drinks",
        titulo: "Novos Drinks",
        itens: [
          {
            nome: "Negroni",
            descricao: "Vermute rosso, campari, gin, 2 rodelas de laranja e gelo",
            preco: "R$ 34,90",
            imagem: "/images/gastronomia/drinks/negroni.png",
          },
          {
            nome: "Caipirinha Jack Apple",
            descricao: "Whisky Jack Daniels, meia maçã verde, açúcar e gelo",
            preco: "R$ 34,90",
            imagem: "/images/gastronomia/drinks/caipirinha-jack-apple.png",
          },
          {
            nome: "Coconut",
            descricao: "Coco seco, abacaxi, rum ou vodka, açúcar e gelo",
            preco: "R$ 34,90",
            imagem: "/images/gastronomia/drinks/coconut.png",
          },
          {
            nome: "Caipirinha Dry Martini",
            descricao: "Dry martini, limão siciliano, açúcar e gelo",
            preco: "R$ 28,90",
            imagem: "/images/gastronomia/drinks/caipirinha-dry-martini.png",
          },
          {
            nome: "Moscow Mule",
            descricao: "Vodka, xarope de gengibre, suco de limão, água com gás ou Schweppes citrus, espuma de gengibre",
            preco: "R$ 36,90",
            imagem: "/images/gastronomia/drinks/moscow-mule.png",
          },
          {
            nome: "Aperol Spritz",
            descricao: "Aperol, suco de laranja e espumante",
            preco: "R$ 30,90",
            imagem: "/images/gastronomia/drinks/aperol-spritz.png",
          },
          {
            nome: "Amazônia",
            descricao: "Licor de menta, limão siciliano, água com gás e gelo",
            preco: "R$ 26,90",
            imagem: "/images/gastronomia/drinks/amazonia.png",
          },
          {
            nome: "Caipirinha de Melancia e Hortelã",
            descricao: "Melancia, vodka Smirnoff, hortelã, açúcar e gelo",
            preco: "R$ 27,90",
            imagem: "/images/gastronomia/drinks/caipirinha-melancia-hortela.png",
          },
          {
            nome: "Coconut Sunset",
            descricao: "Rum, suco de abacaxi, suco de laranja, leite de coco e xarope grenadini",
            preco: "R$ 28,90",
            imagem: "/images/gastronomia/drinks/coconut-sunset.png",
          },
          {
            nome: "Caipirinha Campari",
            descricao: "Campari, suco de laranja, abacaxi, açúcar e gelo",
            preco: "R$ 30,90",
            imagem: "/images/gastronomia/drinks/caipirinha-campari.png",
          },
          {
            nome: "Gin Strawberry",
            descricao: "Gin Tanqueray, energético de morango, espuma de morango e gelo",
            preco: "R$ 34,90",
            imagem: "/images/gastronomia/drinks/gin-strawberry.png",
          },
          {
            nome: "Espanhola Sem Álcool",
            descricao: "Morango, leite condensado, suco de uva e gelo",
            preco: "R$ 24,90",
            imagem: "/images/gastronomia/drinks/espanhola-sem-alcool.png",
          },
        ],
      },
      {
        id: "drinks-casa",
        titulo: "Drinks da Casa",
        itens: [
          {
            nome: "Caipiríssima Pitauá",
            descricao:
              "Rum Bacardi, abacaxi com hortelã e limão, servido na fruta do abacaxi. Serve duas pessoas. Refil (2ª unidade): R$ 28,00",
            preco: "R$ 42,00",
            imagem: "/images/gastronomia/drinks/caipirissima-pitaua.jpeg",
          },
          {
            nome: "Espanhola",
            descricao: "Vinho, abacaxi e leite condensado",
            preco: "R$ 26,90",
            imagem: "/images/gastronomia/drinks/espanhola.jpg",
          },
          {
            nome: "Tchay",
            descricao: "Vinho, abacaxi e leite condensado",
            preco: "R$ 26,90",
            imagem: "/images/gastronomia/drinks/tchay.png",
          },
          {
            nome: "Lara Mora com Álcool",
            descricao: "Suco de laranja com sorvete de morango",
            preco: "R$ 26,90",
            imagem: "/images/gastronomia/drinks/lara-mora.jpeg",
          },
          {
            nome: "Marguerita Cuervo",
            preco: "R$ 30,90",
            imagem: "/images/gastronomia/drinks/marguerita-cuervo.jpg",
          },
          {
            nome: "Mojito Cubano",
            descricao: "Hortelã, limão, rum Bacardi e soda",
            preco: "R$ 20,90",
            imagem: "/images/gastronomia/drinks/mojito-cubano.jpg",
          },
          {
            nome: "Sex on the Beach",
            descricao: "Vodka Smirnoff, licor de pêssego, suco de laranja e granadine",
            preco: "R$ 24,90",
            imagem: "/images/gastronomia/drinks/sex-on-the-beach.jpg",
          },
          {
            nome: "Gin Tônica Seagers",
            descricao: "Gin, água tônica, limão siciliano e hortelã",
            preco: "R$ 14,00",
            imagem: "/images/gastronomia/drinks/gin-tonica-seagers.jpg",
          },
          {
            nome: "Gin Tônica Tanqueray",
            descricao: "Gin, água tônica, limão siciliano e hortelã",
            preco: "R$ 26,00",
            imagem: "/images/gastronomia/drinks/gin-tonica-tanqueray.jpg",
          },
        ],
      },
      {
        id: "caipirinhas",
        titulo: "Caipirinhas",
        itens: [
          {
            nome: "Caipirinha Cachaça",
            descricao: "Escolha uma fruta",
            preco: "R$ 21,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipiroska Smirnoff",
            descricao: "Escolha uma fruta",
            preco: "R$ 24,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipiroska Absolut",
            descricao: "Escolha uma fruta",
            preco: "R$ 34,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipi-Sake",
            descricao: "Escolha uma fruta",
            preco: "R$ 22,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipirum",
            descricao: "Escolha uma fruta",
            preco: "R$ 22,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
        ],
      },
      {
        id: "caipirinhas-especiais",
        titulo: "Caipirinhas Especiais",
        itens: [
          {
            nome: "Caipirinha 3 Limões",
            descricao: "Limão-taiti, pérsia e siciliano com vodka Smirnoff",
            preco: "R$ 28,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipirinha da Roça",
            descricao: "Mel, limão, maracujá, Velho Barreiro ou vodka Smirnoff",
            preco: "R$ 28,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipirinha de Heineken",
            descricao: "Heineken Long Neck, vodka Smirnoff, limão e borda de sal",
            preco: "R$ 32,00",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipirinha de Ice",
            descricao: "Smirnoff Ice, vodka Smirnoff, morango e leite condensado",
            preco: "R$ 32,00",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipirinha de Yakult",
            descricao: "Yakult, limão, calda de chocolate e vodka Smirnoff",
            preco: "R$ 28,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Caipirinha de Vinho",
            descricao: "Vinho tinto com limão e morango",
            preco: "R$ 28,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Lima-Pimenta",
            descricao: "Lima-da-pérsia, pimenta dedo-de-moça e vodka Smirnoff",
            preco: "R$ 28,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
          {
            nome: "Frutas Vermelhas",
            descricao: "Mix de frutas vermelhas, pimenta dedo-de-moça e vodka Smirnoff",
            preco: "R$ 28,90",
            imagem: "/images/gastronomia/drinks/caipirinha-classica.jpeg",
          },
        ],
      },
      {
        id: "sobremesa",
        titulo: "Sobremesa",
        itens: [
          {
            nome: "Petit Gateau de Chocolate",
            descricao: "Um clássico francês para adoçar seu paladar",
            preco: "R$ 20,90",
            imagem: "/images/gastronomia/sobremesas/petit-gateau.jpeg",
          },
          {
            nome: "Pudim de Leite Condensado",
            descricao: "A fatia que vai deixar seu dia perfeito",
            preco: "R$ 14,90",
            imagem: "/images/gastronomia/sobremesas/pudim.jpeg",
          },
          {
            nome: "Torta Holandesa",
            descricao: "Cremosa e com sabor inigualável",
            preco: "R$ 22,90",
            imagem: "/images/gastronomia/sobremesas/torta-holandesa.jpeg",
          },
        ],
      },
    ] satisfies MenuSecao[],
  },
  galeria: {
    title: "Um ambiente para boas lembranças",
    imagens: [
      { src: "/images/gastronomia/galeria/espaco-01.jpg", alt: "Ambiente do Restaurante Pitauá em Socorro-SP — mesas e decoração rústica" },
      { src: "/images/gastronomia/galeria/drinks-01.jpg", alt: "Drink autoral servido no Restaurante Pitauá" },
      { src: "/images/gastronomia/galeria/musica-ao-vivo.jpg", alt: "Música ao vivo no Restaurante Pitauá em Socorro-SP" },
      { src: "/images/gastronomia/galeria/espaco-02.jpg", alt: "Detalhes do espaço do Restaurante Pitauá" },
      { src: "/images/gastronomia/galeria/drinks-02.jpg", alt: "Drink artesanal — Restaurante Pitauá Socorro-SP" },
      { src: "/images/gastronomia/galeria/ambiente-01.webp", alt: "Vista interna acolhedora do Restaurante Pitauá" },
      { src: "/images/gastronomia/galeria/espaco-03.jpg", alt: "Espaço do Restaurante Pitauá em Socorro-SP" },
      { src: "/images/gastronomia/galeria/drinks-03.jpg", alt: "Coquetel servido no Restaurante Pitauá" },
      { src: "/images/gastronomia/galeria/drinks-04.jpg", alt: "Drink frio em ambiente rústico do Restaurante Pitauá" },
      { src: "/images/gastronomia/galeria/ambiente-02.webp", alt: "Ambiente acolhedor do Restaurante Pitauá" },
      { src: "/images/gastronomia/galeria/restaurante-geral.jpg", alt: "Visão geral do Restaurante Pitauá em Socorro-SP" },
      { src: "/images/gastronomia/galeria/drinks-05.jpg", alt: "Drinks variados do Restaurante Pitauá" },
      { src: "/images/gastronomia/galeria/espaco-04.jpg", alt: "Detalhes gastronômicos do Restaurante Pitauá" },
      { src: "/images/gastronomia/galeria/restaurante-vista.jpg", alt: "Vista lateral do Restaurante Pitauá em Socorro" },
      { src: "/images/gastronomia/galeria/menu.webp", alt: "Cardápio do Restaurante Pitauá em Socorro-SP" },
      { src: "/images/gastronomia/galeria/espaco-05.jpg", alt: "Ambiente interno do Restaurante Pitauá" },
    ],
  },
  eventos: {
    title: "Eventos e Celebrações",
    description:
      "Nosso espaço gastronômico também está disponível para eventos privados, confraternizações e celebrações especiais. Consulte-nos para montar o menu ideal para o seu evento.",
    cta: "Saiba mais sobre eventos",
  },
};
