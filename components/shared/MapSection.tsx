import { MapPin } from "lucide-react";
import { ADDRESS } from "@/lib/constants";

export function MapSection() {
  return (
    <section className="bg-pitaua-surface py-20 border-t border-pitaua-border" aria-label="Localização">
      <div className="max-w-7xl mx-auto px-6 sm:px-10">
        <div className="flex items-start gap-4 mb-8">
          <div className="w-10 h-10 rounded-xl border border-pitaua-border flex items-center justify-center shrink-0">
            <MapPin size={18} className="text-pitaua-earth" aria-hidden />
          </div>
          <div>
            <h2 className="text-2xl font-light italic text-pitaua-cream font-heading">
              Como chegar
            </h2>
            <address className="not-italic text-pitaua-muted text-sm mt-1 font-light">
              {ADDRESS.full}
            </address>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden border border-pitaua-border bg-pitaua-dark/50 aspect-video">
          <iframe
            src={ADDRESS.mapsEmbed}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localização do Pitauá em Socorro-SP"
          />
        </div>

        <div className="mt-6 flex justify-center">
          <a
            href={ADDRESS.mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 border border-pitaua-border text-pitaua-cream/60 hover:text-pitaua-cream hover:border-pitaua-cream/30 text-xs font-medium rounded-full transition-all"
          >
            Ver no Google Maps
            <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden>
              <path d="M1 6h10M6 1l5 5-5 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
