import type { Metadata, Viewport } from "next";
import {
  Antonio,
  Cinzel,
  Cormorant_Garamond,
  DM_Sans,
  Petit_Formal_Script,
} from "next/font/google";
import { SITE_URL } from "@/lib/constants";
import "./globals.css";

// Antonio Bold — substituto direto do "Antonio Bold" do branding book oficial.
// Usado em "PITAUÁ" (logotipo wordmark).
const antonio = Antonio({
  variable: "--font-antonio",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  display: "swap",
});

// Cinzel — substituto livre do "Trajan Pro" do branding book.
// Usado em "CENTRO DE LAZER" e outros títulos serif.
const cinzel = Cinzel({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  display: "swap",
});

// Petit Formal Script — substituto livre do "DirtyBitch" do branding book.
// Usado em "Raízes do Interior" (assinatura cursiva).
const petit = Petit_Formal_Script({
  variable: "--font-script",
  subsets: ["latin"],
  weight: ["400"],
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
      className={`${antonio.variable} ${cinzel.variable} ${petit.variable} ${cormorant.variable} ${dmSans.variable}`}
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
