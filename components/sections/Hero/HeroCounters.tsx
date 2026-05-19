"use client";

import { useEffect, useRef, useState } from "react";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  caption: string;
}

const STATS: Stat[] = [
  { value: 1500, label: "локаций", caption: "парк бьюти-коворкингов в РФ" },
  {
    value: 9,
    suffix: " млрд ₽",
    label: "оборот",
    caption: "годовой объём сегмента",
  },
  { value: 17, suffix: "%", label: "рост YoY", caption: "с 2022 года" },
  { value: 3, suffix: "%", label: "доля лидера", caption: "никто не закрыл нишу" },
];

/**
 * Анимированные счётчики на чистом requestAnimationFrame (один RAF на всю секцию).
 * Триггер — IntersectionObserver. Без framer-motion, без react-countup.
 */
export function HeroCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          observer.disconnect();
          const start = performance.now();
          const DURATION = 2000;
          function tick(now: number) {
            const t = Math.min(1, (now - start) / DURATION);
            // ease-out cubic
            const eased = 1 - Math.pow(1 - t, 3);
            setProgress(eased);
            if (t < 1) requestAnimationFrame(tick);
          }
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-12"
    >
      {STATS.map((stat) => {
        const current = Math.round(stat.value * progress);
        return (
          <div key={stat.label} className="flex flex-col gap-1">
            <div className="font-display text-4xl font-bold tracking-tight text-ink-100 md:text-5xl tabular-nums">
              {current.toLocaleString("ru-RU")}
              {stat.suffix && (
                <span className="ml-1 text-2xl font-semibold text-accent-60 md:text-3xl">
                  {stat.suffix}
                </span>
              )}
            </div>
            <div className="text-sm font-medium uppercase tracking-wide text-accent-60">
              {stat.label}
            </div>
            <div className="text-sm text-ink-60">{stat.caption}</div>
          </div>
        );
      })}
    </div>
  );
}
