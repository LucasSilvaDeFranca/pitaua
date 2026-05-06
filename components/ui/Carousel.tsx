"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselProps {
  children: ReactNode;
  autoPlay?: boolean;
  intervalMs?: number;
  ariaLabel?: string;
  /**
   * Tailwind classes for each slide's width across breakpoints.
   * Default fits ~3 cards on lg. Use "w-full" for single-image galleries.
   */
  slideClassName?: string;
}

const DEFAULT_SLIDE_CLASS =
  "w-[88%] sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]";

export function Carousel({
  children,
  autoPlay = true,
  intervalMs = 5000,
  ariaLabel = "Carrossel",
  slideClassName = DEFAULT_SLIDE_CLASS,
}: CarouselProps) {
  const items = (Array.isArray(children) ? children : [children]).filter(Boolean);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  const goTo = useCallback(
    (index: number) => {
      const track = trackRef.current;
      if (!track) return;
      const slide = track.children[index] as HTMLElement | undefined;
      if (!slide) return;
      track.scrollTo({
        left: slide.offsetLeft - track.offsetLeft,
        behavior: reduceMotion ? "auto" : "smooth",
      });
    },
    [reduceMotion],
  );

  const next = useCallback(() => {
    setActive((current) => {
      const n = (current + 1) % items.length;
      goTo(n);
      return n;
    });
  }, [items.length, goTo]);

  const prev = useCallback(() => {
    setActive((current) => {
      const p = (current - 1 + items.length) % items.length;
      goTo(p);
      return p;
    });
  }, [items.length, goTo]);

  // Auto-advance — disabled if reduceMotion or paused
  useEffect(() => {
    if (!autoPlay || paused || reduceMotion) return;
    const id = window.setInterval(next, intervalMs);
    return () => window.clearInterval(id);
  }, [autoPlay, paused, reduceMotion, intervalMs, next]);

  // Sync active index when user scrolls/swipes manually
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    const onScroll = () => {
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const slides = Array.from(track.children) as HTMLElement[];
        const center = track.scrollLeft + track.clientWidth / 2;
        let bestIdx = 0;
        let bestDist = Infinity;
        slides.forEach((slide, i) => {
          const slideCenter = slide.offsetLeft - track.offsetLeft + slide.offsetWidth / 2;
          const dist = Math.abs(slideCenter - center);
          if (dist < bestDist) {
            bestDist = dist;
            bestIdx = i;
          }
        });
        setActive((prev) => (prev === bestIdx ? prev : bestIdx));
      });
    };
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [items.length]);

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label={ariaLabel}
    >
      <div
        ref={trackRef}
        className="flex overflow-x-auto snap-x snap-mandatory gap-6 no-scrollbar scroll-smooth pb-2 -mx-4 px-4 sm:-mx-0 sm:px-0"
        tabIndex={0}
        aria-live="polite"
      >
        {items.map((child, i) => (
          <div
            key={i}
            className={`snap-center sm:snap-start shrink-0 ${slideClassName}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${items.length}`}
          >
            {child}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-center gap-4 mt-8">
        <button
          type="button"
          onClick={prev}
          aria-label="Slide anterior"
          className="w-10 h-10 rounded-full border border-pitaua-rule text-pitaua-ink/60 hover:text-pitaua-ink hover:border-pitaua-ink/30 hover:bg-pitaua-cream/50 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2"
        >
          <ChevronLeft size={18} aria-hidden />
        </button>

        <div className="flex items-center gap-2" role="tablist" aria-label="Selecionar slide">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => {
                setActive(i);
                goTo(i);
              }}
              role="tab"
              aria-selected={i === active}
              aria-label={`Ir para slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2 ${
                i === active
                  ? "w-7 bg-pitaua-earth"
                  : "w-1.5 bg-pitaua-ink/20 hover:bg-pitaua-ink/40"
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          aria-label="Próximo slide"
          className="w-10 h-10 rounded-full border border-pitaua-rule text-pitaua-ink/60 hover:text-pitaua-ink hover:border-pitaua-ink/30 hover:bg-pitaua-cream/50 transition-all flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2"
        >
          <ChevronRight size={18} aria-hidden />
        </button>
      </div>
    </div>
  );
}
