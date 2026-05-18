"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import type { Testimonial } from "@/lib/content/testimonials";

interface TestimonialsCarouselProps {
  id: string;
  title: string;
  subtitle?: string;
  label?: string;
  testimonials: Testimonial[];
  autoplayMs?: number;
}

export function TestimonialsCarousel({
  id,
  title,
  subtitle,
  label,
  testimonials,
  autoplayMs = 8000,
}: TestimonialsCarouselProps) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const total = testimonials.length;
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (total <= 1 || paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setActive((i) => (i + 1) % total);
    }, autoplayMs);
    return () => window.clearInterval(timer);
  }, [total, paused, reduceMotion, autoplayMs]);

  const goPrev = () => setActive((i) => (i - 1 + total) % total);
  const goNext = () => setActive((i) => (i + 1) % total);

  if (total === 0) return null;

  return (
    <section
      className="py-20 sm:py-24 bg-pitaua-cream"
      aria-labelledby={`${id}-heading`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div id={`${id}-heading`}>
          <SectionHeading
            title={title}
            subtitle={subtitle}
            label={label}
            centered
            className="mb-12 sm:mb-16"
          />
        </div>

        <div
          className="relative"
          role="region"
          aria-roledescription="carrossel"
          aria-label={title}
        >
          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${active * 100}%)` }}
              aria-live="polite"
            >
              {testimonials.map((t, i) => (
                <article
                  key={i}
                  className="w-full shrink-0 px-4 sm:px-12 py-6"
                  aria-roledescription="slide"
                  aria-label={`Depoimento ${i + 1} de ${total}`}
                  aria-hidden={i !== active}
                >
                  <Quote
                    className="text-pitaua-earth/40 mb-6 mx-auto"
                    size={40}
                    aria-hidden
                  />
                  <p className="font-heading italic text-xl sm:text-2xl leading-relaxed text-pitaua-ink text-center mb-8 max-w-2xl mx-auto">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div
                    className="flex justify-center gap-1 mb-4"
                    aria-label={`Avaliação ${t.rating} de 5 estrelas`}
                  >
                    {Array.from({ length: t.rating }).map((_, k) => (
                      <Star
                        key={k}
                        size={16}
                        className="fill-pitaua-sun text-pitaua-sun"
                        aria-hidden
                      />
                    ))}
                  </div>
                  <div className="text-center">
                    <p className="font-medium text-sm text-pitaua-ink">
                      {t.name}
                      {t.location && (
                        <span className="text-pitaua-muted font-normal">
                          {" · "}
                          {t.location}
                        </span>
                      )}
                    </p>
                    {(t.date || t.source) && (
                      <p className="text-xs text-pitaua-muted mt-1.5 italic">
                        {t.date}
                        {t.date && t.source && " · "}
                        {t.source && `via ${t.source}`}
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          {total > 1 && (
            <>
              <button
                type="button"
                onClick={goPrev}
                aria-label="Depoimento anterior"
                className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-2 lg:-ml-6 w-11 h-11 items-center justify-center rounded-full bg-white border border-pitaua-earth/20 text-pitaua-ink/70 hover:text-pitaua-earth hover:border-pitaua-earth/40 hover:shadow-sm transition-all"
              >
                <ChevronLeft size={20} aria-hidden />
              </button>
              <button
                type="button"
                onClick={goNext}
                aria-label="Próximo depoimento"
                className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-2 lg:-mr-6 w-11 h-11 items-center justify-center rounded-full bg-white border border-pitaua-earth/20 text-pitaua-ink/70 hover:text-pitaua-earth hover:border-pitaua-earth/40 hover:shadow-sm transition-all"
              >
                <ChevronRight size={20} aria-hidden />
              </button>

              <div className="flex justify-center gap-2 mt-8" role="tablist">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActive(i)}
                    role="tab"
                    aria-selected={i === active}
                    aria-label={`Ir para depoimento ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all ${
                      i === active
                        ? "w-8 bg-pitaua-earth"
                        : "w-1.5 bg-pitaua-ink/20 hover:bg-pitaua-ink/40"
                    }`}
                  />
                ))}
              </div>

              <div className="flex md:hidden justify-center gap-3 mt-6">
                <button
                  type="button"
                  onClick={goPrev}
                  aria-label="Depoimento anterior"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-pitaua-earth/20 text-pitaua-ink/70 active:bg-pitaua-cream transition-colors"
                >
                  <ChevronLeft size={18} aria-hidden />
                </button>
                <button
                  type="button"
                  onClick={goNext}
                  aria-label="Próximo depoimento"
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-pitaua-earth/20 text-pitaua-ink/70 active:bg-pitaua-cream transition-colors"
                >
                  <ChevronRight size={18} aria-hidden />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
