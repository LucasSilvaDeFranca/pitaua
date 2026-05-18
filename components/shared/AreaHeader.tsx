"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowLeft } from "lucide-react";

interface AreaHeaderProps {
  areaName: string;
}

const navItems = [
  { label: "Pousada", href: "/pousada" },
  { label: "Restaurante", href: "/gastronomia" },
  { label: "Pesqueiro", href: "/pesqueiro" },
  { label: "Eventos", href: "/eventos" },
];

export function AreaHeader({ areaName }: AreaHeaderProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => {
      const next = window.scrollY > 60;
      setScrolled((prev) => (prev === next ? prev : next));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        toggleRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 bg-pitaua-paper border-b border-pitaua-rule transition-shadow duration-300 ${
        scrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <div className="flex items-center gap-2 sm:gap-3">
            <Link
              href="/"
              className="inline-flex items-center gap-2 hover:opacity-85 transition-opacity"
              aria-label="Voltar ao início — Pitauá"
            >
              <ArrowLeft size={14} aria-hidden className="text-pitaua-ink/60" />
              <Image
                src="/brand/pitaua-logo.png"
                alt="Pitauá Centro de Lazer"
                width={600}
                height={300}
                priority
                className="h-8 sm:h-10 w-auto"
              />
            </Link>
            <span className="text-pitaua-ink/30 text-lg font-light" aria-hidden>/</span>
            <span className="text-pitaua-ink font-heading italic text-lg">{areaName}</span>
          </div>

          <nav className="hidden md:flex items-center" aria-label="Navegação das áreas">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 text-sm font-bold transition-colors tracking-wide ${
                  item.label === areaName
                    ? "text-pitaua-earth"
                    : "text-pitaua-ink hover:text-pitaua-earth"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="md:hidden p-3 -mr-3 text-pitaua-ink/70 hover:text-pitaua-ink transition-colors"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            aria-controls="area-mobile-menu"
          >
            {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="area-mobile-menu"
          className="md:hidden bg-pitaua-paper border-t border-pitaua-rule px-6 pb-6 pt-2"
          aria-label="Menu mobile das áreas"
        >
          <Link
            href="/"
            className="flex items-center gap-2 py-4 text-sm text-pitaua-ink/55 hover:text-pitaua-ink border-b border-pitaua-rule transition-colors"
            onClick={() => setMenuOpen(false)}
          >
            <ArrowLeft size={14} aria-hidden />
            Início — Pitauá
          </Link>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`flex items-center justify-between py-4 text-base font-bold border-b border-pitaua-rule last:border-0 transition-colors ${
                item.label === areaName ? "text-pitaua-earth" : "text-pitaua-ink hover:text-pitaua-earth"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
