import Link from "next/link";
import { SiteHeader } from "@/components/shared/SiteHeader";
import { SiteFooter } from "@/components/shared/SiteFooter";

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main
        id="main-content"
        className="min-h-screen flex flex-col items-center justify-center bg-pitaua-dark text-center px-6"
      >
        <p className="text-pitaua-earth text-xs font-medium tracking-[0.2em] uppercase mb-6">
          Erro 404
        </p>
        <h1 className="text-5xl sm:text-7xl font-light italic font-heading text-pitaua-cream mb-5 leading-none">
          Página não encontrada
        </h1>
        <div className="gold-rule w-16 mx-auto mb-8" />
        <p className="text-pitaua-cream/65 text-lg max-w-md mb-10 font-light leading-relaxed">
          O caminho que você procura não existe — mas o Pitauá continua aqui, em Socorro-SP.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-7 py-3.5 bg-pitaua-earth text-pitaua-ink text-sm font-medium rounded-full hover:bg-pitaua-ochre transition-all duration-300"
        >
          Voltar ao início
        </Link>
      </main>
      <SiteFooter />
    </>
  );
}
