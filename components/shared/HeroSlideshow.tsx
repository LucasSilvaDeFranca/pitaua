"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export interface HeroSlide {
  src: string;
  alt: string;
}

interface HeroSlideshowProps {
  images: HeroSlide[];
  intervalMs?: number;
  className?: string;
}

export function HeroSlideshow({
  images,
  intervalMs = 6000,
  className = "",
}: HeroSlideshowProps) {
  const [active, setActive] = useState(0);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReduceMotion(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (images.length <= 1 || reduceMotion) return;
    const id = window.setInterval(() => {
      setActive((i) => (i + 1) % images.length);
    }, intervalMs);
    return () => window.clearInterval(id);
  }, [images.length, intervalMs, reduceMotion]);

  return (
    <div className={`absolute inset-0 overflow-hidden ${className}`} aria-hidden>
      {images.map((img, i) => (
        <Image
          key={img.src}
          src={img.src}
          alt={img.alt}
          fill
          sizes="100vw"
          priority
          className={`object-cover transition-opacity ease-in-out ${
            i === active ? "opacity-100" : "opacity-0"
          }`}
          style={{ transitionDuration: "700ms" }}
        />
      ))}
    </div>
  );
}
