const items = [
  "Pousada",
  "Restaurante",
  "Pesqueiro",
  "Eventos",
  "Socorro · SP",
  "Natureza",
  "Lazer",
  "Família",
];

export function MarqueeStrip() {
  const repeated = [...items, ...items, ...items, ...items];

  return (
    <div
      className="bg-pitaua-earth py-3.5 overflow-hidden"
      aria-hidden="true"
    >
      <div className="marquee-track">
        {repeated.map((item, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span className="font-display text-pitaua-ink text-xs sm:text-sm font-normal tracking-[0.3em] uppercase px-6">
              {item}
            </span>
            <span className="text-pitaua-ink/50 text-[10px]" aria-hidden>✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
