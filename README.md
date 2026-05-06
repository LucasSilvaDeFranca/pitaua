# Pitauá — Centro de Lazer em Socorro-SP

Site institucional e HUB digital do Pitauá, construído com Next.js 16, TypeScript e Tailwind CSS 4.

## Rodar localmente

```bash
npm install
npm run dev
```

Abra `http://localhost:3000` no navegador.

## Build de produção

```bash
npm run build
npm start
```

---

## Estrutura de páginas

| Rota | Área |
|------|------|
| `/` | HUB principal — porta de entrada |
| `/pousada` | Pousada com 15 quartos |
| `/gastronomia` | Restaurante |
| `/pesqueiro` | Pesqueiro / Pesca esportiva |
| `/eventos` | Espaço para eventos + formulário |
| `/sitemap.xml` | Sitemap gerado automaticamente |
| `/robots.txt` | Robots.txt |

---

## Pontos de personalização obrigatórios

### 1. `lib/constants.ts`
Substitua todos os dados de contato e localização:
```ts
WHATSAPP_NUMBER  // número real com DDI+DDD (ex: 5519912345678)
CONTACT.phone    // telefone formatado
CONTACT.email    // e-mail real
ADDRESS.*        // endereço completo e link Google Maps
SOCIAL.*         // links Instagram e Facebook reais
```

### 2. `lib/seo.ts`
Atualize coordenadas GPS e horário de funcionamento em `localBusinessBase`.

### 3. Imagens
Substitua todos os placeholders em `public/images/`:

```
public/images/
├── hub/
│   └── hero-hub.jpg          (panorâmica da propriedade, 1920×1080)
├── pousada/
│   ├── hero-pousada.jpg
│   ├── quarto-standard.jpg
│   ├── quarto-familia.jpg
│   └── quarto-chale.jpg
├── gastronomia/
│   ├── hero-gastronomia.jpg
│   ├── cafe-manha.jpg
│   └── restaurante.jpg
├── pesqueiro/
│   ├── hero-pesqueiro.jpg
│   └── lago.jpg
└── eventos/
    ├── hero-eventos.jpg
    └── espaco.jpg
```

Para usar imagens, encontre os comentários `SUBSTITUIR por imagem real:` nos componentes Hero e descomente o `<Image>` do Next.js.

### 4. Mapa
Em `components/shared/MapSection.tsx`, substitua o bloco de placeholder pelo `<iframe>` do Google Maps Embed (Google Maps > Compartilhar > Incorporar mapa).

### 5. Cardápio
Quando o cardápio estiver pronto, edite `lib/content/gastronomia.ts` e adicione os itens na seção do restaurante.

### 6. Pesqueiro — horários e valores
Atualize `lib/content/pesqueiro.ts` → `infoPraticas.items` com horários e valores reais.

---

## Migração para subdomínios (Fase 2)

Quando o DNS estiver configurado:
1. Aponte os subdomínios no painel do seu provedor:
   - `pousada.pitaua.com.br → seu servidor`
   - `gastronomia.pitaua.com.br → seu servidor`
   - `pesqueiro.pitaua.com.br → seu servidor`
   - `eventos.pitaua.com.br → seu servidor`
2. Abra `proxy.ts` e descomente o bloco do `subdomainMap`
3. Nenhuma outra mudança de código é necessária

---

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS 4
- react-hook-form (formulário de eventos)
- lucide-react (ícones)
- next/font (Playfair Display + Inter)

## SEO implementado

- `<title>` e `<meta description>` por página
- Open Graph por página
- JSON-LD Schema.org: `TouristAttraction`, `LodgingBusiness`, `Restaurant`, `SportsActivityLocation`, `EventVenue`
- `sitemap.xml` dinâmico
- `robots.txt`
- Canonical URLs
- Hierarquia semântica H1→H2→H3
- `alt` em todas as imagens
