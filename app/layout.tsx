import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import localFont from "next/font/local";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

// Branding book — Tipologia da Logomarca.
// LOGOTIPO: Antonio Bold (variable font cobre todos os pesos em um arquivo).
const antonio = localFont({
  src: "./fonts/Antonio-Variable.ttf",
  variable: "--font-antonio",
  weight: "100 900",
  display: "swap",
});

// Branding book — TÍTULO: Trajan Pro.
const trajan = localFont({
  src: [
    { path: "./fonts/TrajanPro-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/TrajanPro-Bold.otf",    weight: "700", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

// Branding book — ASSINATURA: DirtyBitch ("Raízes do Interior").
const dirtyBitch = localFont({
  src: "./fonts/DirtyBitch.ttf",
  variable: "--font-script",
  weight: "400",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Pitauá | Centro de Lazer em Socorro-SP",
    template: "%s | Pitauá",
  },
  description:
    "Pitauá é um centro de lazer completo em Socorro-SP com pousada, restaurante, pesqueiro e espaço para eventos. Natureza, lazer e acolhimento para toda a família.",
  keywords: [
    "pousada em Socorro SP",
    "centro de lazer Socorro",
    "pesqueiro em Socorro SP",
    "restaurante em Socorro SP",
    "eventos em Socorro SP",
    "Pitauá",
    "turismo Socorro SP",
  ],
  metadataBase: new URL(SITE_URL),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: "Pitauá Centro de Lazer",
    images: [{ url: "/og/default.jpg", width: 1200, height: 630, alt: "Pitauá Centro de Lazer em Socorro-SP" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pitauá | Centro de Lazer em Socorro-SP",
    description:
      "Pousada, restaurante, pesqueiro e eventos em Socorro-SP — natureza e acolhimento para toda a família.",
    images: ["/og/default.jpg"],
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#FAF4E6" },
    { media: "(prefers-color-scheme: dark)", color: "#302621" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${antonio.variable} ${trajan.variable} ${dirtyBitch.variable} ${cormorant.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen flex flex-col antialiased">
        <a href="#main-content" className="skip-link">
          Pular para o conteúdo
        </a>
        {children}
      </body>
    </html>
  );
}
