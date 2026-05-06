"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { X } from "lucide-react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  ariaLabel: string;
  children: ReactNode;
}

export function Modal({ open, onClose, ariaLabel, children }: ModalProps) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const previouslyFocused = document.activeElement as HTMLElement | null;
    closeBtnRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", onKey);
      previouslyFocused?.focus?.();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 animate-[fade-in_0.2s_ease-out]"
      role="dialog"
      aria-modal="true"
      aria-label={ariaLabel}
    >
      <button
        type="button"
        aria-label="Fechar"
        className="absolute inset-0 bg-pitaua-ink/75 backdrop-blur-sm cursor-default"
        onClick={onClose}
        tabIndex={-1}
      />
      <div className="relative bg-pitaua-paper rounded-2xl shadow-2xl max-w-5xl w-full max-h-[92vh] flex flex-col overflow-hidden">
        <button
          ref={closeBtnRef}
          type="button"
          onClick={onClose}
          aria-label="Fechar detalhes"
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-pitaua-paper border border-pitaua-rule text-pitaua-ink/70 hover:text-pitaua-ink hover:bg-pitaua-cream transition-all flex items-center justify-center shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-pitaua-earth focus-visible:ring-offset-2"
        >
          <X size={18} aria-hidden />
        </button>
        <div className="overflow-y-auto">{children}</div>
      </div>
    </div>
  );
}
