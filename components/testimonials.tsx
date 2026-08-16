"use client";

import { useState } from "react";
import { TESTIMONIALS } from "@/lib/site-data";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const q = TESTIMONIALS[index];

  return (
    <div className="relative mx-auto max-w-4xl">
            <blockquote className="relative text-2xl font-medium leading-snug tracking-tight text-ink md:text-4xl">
        <p>{q.text}</p>
      </blockquote>
      <div className="mt-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-base font-medium text-ink">{q.by}</p>
          <p className="mt-1 text-sm text-mute">{q.role}</p>
        </div>
        <div className="flex items-center gap-6">
          <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-mute">
            {String(index + 1).padStart(2, "0")} / {String(TESTIMONIALS.length).padStart(2, "0")}
          </span>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => setIndex((index - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
              className="flex h-12 w-12 items-center justify-center border border-ink/30 text-lg text-ink transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-ink hover:text-canvas"
              aria-label="Previous testimonial"
            >
              &larr;
            </button>
            <button
              type="button"
              onClick={() => setIndex((index + 1) % TESTIMONIALS.length)}
              className="flex h-12 w-12 items-center justify-center border border-ink/30 text-lg text-ink transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)] hover:bg-ink hover:text-canvas"
              aria-label="Next testimonial"
            >
              &rarr;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}