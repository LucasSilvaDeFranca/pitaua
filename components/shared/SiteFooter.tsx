import Link from "next/link";
import Image from "next/image";
import { MapPin, Mail, MessageCircle } from "lucide-react";
import { ADDRESS, EMAILS, PHONES, SOCIAL, getWhatsAppLink, WHATSAPP_MESSAGES } from "@/lib/constants";

const areaLinks = [
  { label: "Pousada", href: "/pousada" },
  { label: "Gastronomia", href: "/gastronomia" },
  { label: "Pesqueiro", href: "/pesqueiro" },
  { label: "Eventos", href: "/eventos" },
];

function IconInstagram() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
    </svg>
  );
}

function IconFacebook() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
    </svg>
  );
}

export function SiteFooter() {
  return (
    <footer className="bg-pitaua-paper border-t border-pitaua-rule" role="contentinfo">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-16">

          {/* Brand */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="inline-block mb-5 hover:opacity-85 transition-opacity"
              aria-label="Pitauá — início"
            >
              <Image
                src="/brand/pitaua-logo.png"
                alt="Pitauá Centro de Lazer — Raízes do Interior"
                width={600}
                height={300}
                className="h-20 sm:h-24 w-auto"
              />
            </Link>
            <p className="text-pitaua-muted text-sm leading-relaxed mb-6 font-light">
              Centro de lazer completo em Socorro-SP. Natureza e acolhimento para toda a família.
            </p>
            <div className="flex flex-wrap gap-2">
              {SOCIAL.instagrams.map((ig) => (
                <a
                  key={ig.url}
                  href={ig.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Instagram — ${ig.scope}`}
                  title={`@${ig.url.split("/").filter(Boolean).pop()}`}
                  className="w-9 h-9 rounded-lg border border-pitaua-rule flex items-center justify-center text-pitaua-muted hover:text-pitaua-ink hover:border-pitaua-ink/30 transition-all"
                >
                  <IconInstagram />
                </a>
              ))}
              <a href={SOCIAL.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="w-9 h-9 rounded-lg border border-pitaua-rule flex items-center justify-center text-pitaua-muted hover:text-pitaua-ink hover:border-pitaua-ink/30 transition-all">
                <IconFacebook />
              </a>
              <a href={getWhatsAppLink(WHATSAPP_MESSAGES.geral)} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-9 h-9 rounded-lg border border-[#25D366]/40 flex items-center justify-center text-[#25D366] hover:text-white hover:bg-[#25D366] hover:border-[#25D366] transition-all">
                <MessageCircle size={14} aria-hidden />
              </a>
            </div>
          </div>

          {/* Areas */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-pitaua-muted mb-5">
              Nossas Áreas
            </h3>
            <ul className="space-y-3">
              {areaLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-pitaua-ink/65 hover:text-pitaua-ink text-sm font-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Telefones */}
          <div>
            <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-pitaua-muted mb-5">
              Telefones
            </h3>
            <ul className="space-y-3">
              {PHONES.map((p) => (
                <li key={p.whatsapp}>
                  <a
                    href={getWhatsAppLink(WHATSAPP_MESSAGES.geral, p.whatsapp)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-2.5 text-pitaua-ink/65 hover:text-pitaua-ink text-sm font-light transition-colors"
                  >
                    <MessageCircle
                      size={13}
                      aria-hidden
                      className="text-[#25D366] shrink-0 mt-1"
                    />
                    <span className="flex flex-col">
                      <span>{p.display}</span>
                      <span className="text-[10px] uppercase tracking-wider text-pitaua-ink/40">
                        {p.label}
                      </span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* E-mails + Localização */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-pitaua-muted mb-5">
                E-mails
              </h3>
              <ul className="space-y-3">
                {EMAILS.map((e) => (
                  <li key={e.address}>
                    <a
                      href={`mailto:${e.address}`}
                      className="flex items-start gap-2.5 text-pitaua-ink/65 hover:text-pitaua-ink text-sm font-light transition-colors"
                    >
                      <Mail size={13} aria-hidden className="shrink-0 mt-1" />
                      <span className="flex flex-col break-all">
                        <span>{e.address}</span>
                        <span className="text-[10px] uppercase tracking-wider text-pitaua-ink/40">
                          {e.label}
                        </span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-[10px] font-medium uppercase tracking-[0.2em] text-pitaua-muted mb-5">
                Localização
              </h3>
              <address className="not-italic">
                <a
                  href={ADDRESS.mapsLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-2.5 text-pitaua-ink/65 hover:text-pitaua-ink text-sm font-light transition-colors"
                >
                  <MapPin size={13} aria-hidden className="shrink-0 mt-0.5" />
                  <span>{ADDRESS.full}</span>
                </a>
              </address>
            </div>
          </div>
        </div>

        <div className="gold-rule mt-12 mb-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-pitaua-muted">
          <p>© {new Date().getFullYear()} Pitauá Centro de Lazer — Socorro-SP</p>
          <p>Feito com carinho para o turismo de Socorro-SP</p>
        </div>
      </div>
    </footer>
  );
}
