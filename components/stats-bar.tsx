"use client";

import { useEffect, useRef, useState } from "react";

type Stat = {
  value: number;
  suffix: string;
  label: string;
};

const DURATION_MS = 1200;

function formatValue(value: number) {
  return new Intl.NumberFormat("en-PH").format(value);
}

export default function StatsBar({ stats }: { stats: readonly Stat[] }) {
  const sectionRef = useRef<HTMLElement>(null);
  const hasAnimated = useRef(false);
  const animationFrame = useRef<number | null>(null);
  const [displayValues, setDisplayValues] = useState(() => stats.map(({ value }) => value));

  useEffect(() => {
    const section = sectionRef.current;
    if (!section || !window.IntersectionObserver) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reducedMotion) return;

    const animate = () => {
      if (hasAnimated.current) return;
      hasAnimated.current = true;
      setDisplayValues(stats.map(() => 0));

      const startedAt = performance.now();
      const tick = (now: number) => {
        const progress = Math.min((now - startedAt) / DURATION_MS, 1);
        const easedProgress = 1 - (1 - progress) ** 4;

        setDisplayValues(stats.map(({ value }) => Math.round(value * easedProgress)));

        if (progress < 1) {
          animationFrame.current = window.requestAnimationFrame(tick);
        }
      };

      animationFrame.current = window.requestAnimationFrame(tick);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        animate();
        observer.disconnect();
      },
      { threshold: 0.35 },
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
      if (animationFrame.current) window.cancelAnimationFrame(animationFrame.current);
    };
  }, [stats]);

  return (
    <section
      ref={sectionRef}
      className="border-b border-line bg-surface py-12 md:py-16"
      aria-label="Huswell Trading statistics"
    >
      <div className="mx-auto grid w-full max-w-6xl grid-cols-2 gap-x-6 gap-y-10 px-5 text-center md:grid-cols-4 md:px-8">
        {stats.map(({ value, suffix, label }, index) => (
          <div key={label} aria-label={`${formatValue(value)}${suffix} ${label}`}>
            <p aria-hidden="true" className="text-3xl font-semibold tracking-[-0.03em] text-ink md:text-4xl">
              {formatValue(displayValues[index])}{suffix}
            </p>
            <p className="micro-label mt-3 text-mute">{label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
