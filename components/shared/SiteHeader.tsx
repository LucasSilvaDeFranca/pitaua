"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Pousada", href: "/pousada", highlight: false },
  { label: "Restaurante", href: "/gastronomia", highlight: true },
  { label: "Pesqueiro", href: "/pesqueiro", highlight: false },
  { label: "Eventos", href: "/eventos", highlight: false },
];

export function SiteHeader() {
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
          <Link
            href="/"
            className="inline-flex items-center hover:opacity-85 transition-opacity"
            aria-label="Pitauá — início"
          >
            <Image
              src="/brand/pitaua-logo.png"
              alt="Pitauá Centro de Lazer — Raízes do Interior"
              width={600}
              height={300}
              priority
              className="h-9 sm:h-12 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-0" aria-label="Navegação principal">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-5 py-2 text-sm font-bold text-pitaua-ink hover:text-pitaua-earth transition-colors tracking-wide"
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
            aria-controls="site-mobile-menu"
          >
            {menuOpen ? <X size={22} aria-hidden /> : <Menu size={22} aria-hidden />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <nav
          id="site-mobile-menu"
          className="md:hidden bg-pitaua-paper border-t border-pitaua-rule px-6 pb-6 pt-2"
          aria-label="Menu mobile"
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="flex items-center justify-between py-4 border-b border-pitaua-rule last:border-0 transition-colors text-base font-bold text-pitaua-ink hover:text-pitaua-earth"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden>
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
