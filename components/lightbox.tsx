"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function Lightbox({
  imgs,
  name,
  index,
  onClose,
  onNext,
}: {
  imgs: string[];
  name: string;
  index: number;
  onClose: () => void;
  onNext: (i: number) => void;
}) {
  const closeRef = useRef<HTMLButtonElement>(null);
  const count = imgs.length;

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext((index + 1) % count);
      if (e.key === "ArrowLeft") onNext((index - 1 + count) % count);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, count, onClose, onNext]);

  return (
    <div
      className="fixed inset-0 z-[60] bg-black/95 backdrop-blur"
      role="dialog"
      aria-modal="true"
      aria-label={name}
      onClick={onClose}
    >
      <div
        className="relative flex h-full w-full items-center justify-center px-5 md:px-24"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-[62dvh] max-h-[calc(100dvh-10rem)] w-full max-w-[88vw] sm:h-[68dvh] md:h-[78dvh] md:max-h-[calc(100dvh-9rem)]">
          <Image
            src={imgs[index]}
            alt={name}
            fill
            sizes="100vw"
            className="object-contain"
          />
        </div>

        <button
          ref={closeRef}
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center border border-white/40 text-xl font-medium text-white transition-colors duration-300 hover:bg-white hover:text-black md:right-6 md:top-6"
        >
          ×
        </button>
        {count > 1 && (
          <>
            <button
              type="button"
              onClick={() => onNext((index - 1 + count) % count)}
              aria-label="Previous image"
              className="absolute left-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/40 text-xl text-white transition-colors duration-300 hover:bg-white hover:text-black md:left-6"
            >
              ‹
            </button>
            <button
              type="button"
              onClick={() => onNext((index + 1) % count)}
              aria-label="Next image"
              className="absolute right-4 top-1/2 flex h-12 w-12 -translate-y-1/2 items-center justify-center border border-white/40 text-xl text-white transition-colors duration-300 hover:bg-white hover:text-black md:right-6"
            >
              ›
            </button>
          </>
        )}

        <div className="absolute bottom-[max(1.5rem,env(safe-area-inset-bottom))] left-1/2 w-full max-w-xl -translate-x-1/2 px-20 text-center sm:px-24">
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="mt-1 text-[11px] font-medium uppercase tracking-[0.22em] text-white/50">
            {index + 1} / {count}
          </p>
        </div>
      </div>
    </div>
  );
}
