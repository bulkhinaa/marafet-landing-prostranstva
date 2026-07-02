"use client";

import { cn } from "@/lib/cn";
import { NumberTicker } from "@/components/ui/NumberTicker";

interface Stat {
  value: number;
  suffix?: string;
  label: string;
  caption: string;
  /** Bento колспан на десктопе */
  span?: "wide" | "default";
  tone?: "light" | "accent" | "dark";
}

const STATS: Stat[] = [
  {
    value: 1500,
    label: "локаций",
    caption: "парк бьюти-коворкингов в РФ",
    span: "wide",
    tone: "accent",
  },
  {
    value: 9,
    suffix: " млрд ₽",
    label: "оборот",
    caption: "годовой объём сегмента",
    tone: "light",
  },
  {
    value: 17,
    suffix: "%",
    label: "рост YoY",
    caption: "с 2022 года",
    tone: "light",
  },
  {
    value: 3,
    suffix: "%",
    label: "доля лидера",
    caption: "никто не закрыл нишу",
    tone: "dark",
  },
];

const toneStyles = {
  light: "bg-surface ring-1 ring-inset ring-ink-20",
  accent: "bg-gradient-to-br from-accent-60 to-magenta-60 text-white",
  dark: "bg-ink-100 text-white",
};

/**
 * Bento Grid с разнокалиберными карточками + анимация цифр.
 * Использует NumberTicker для wow-эффекта "рулетки".
 */
export function HeroCounters() {
  return (
    <div className="grid gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4">
      {STATS.map((stat, index) => {
        const isWhite = stat.tone === "accent" || stat.tone === "dark";
        return (
          <div
            key={stat.label}
            className={cn(
              "group relative flex flex-col justify-between gap-4 overflow-hidden rounded-3xl p-6 md:p-7",
              "transition-all duration-300 hover:scale-[1.02] hover:shadow-xl",
              stat.span === "wide" && "lg:col-span-2 lg:row-span-1",
              toneStyles[stat.tone ?? "light"]
            )}
          >
            {/* Декоративный круг с hover-эффектом */}
            <div
              aria-hidden
              className={cn(
                "absolute -right-12 -top-12 h-40 w-40 rounded-full opacity-30 transition-transform duration-500 group-hover:scale-125",
                stat.tone === "accent" && "bg-white",
                stat.tone === "dark" && "bg-accent-60",
                stat.tone === "light" && "bg-accent-30"
              )}
              style={{ filter: "blur(0.5px)" }}
            />

            <div className="relative">
              <div
                className={cn(
                  "font-display font-bold tracking-tight",
                  stat.span === "wide"
                    ? "text-6xl md:text-7xl"
                    : "text-5xl md:text-6xl"
                )}
              >
                <NumberTicker
                  value={stat.value}
                  duration={1.8}
                  delay={0.2 + index * 0.15}
                  variant="slot"
                />
                {stat.suffix && (
                  <span
                    className={cn(
                      "ml-1 text-2xl font-semibold md:text-3xl",
                      isWhite ? "text-white/80" : "text-accent-60"
                    )}
                  >
                    {stat.suffix}
                  </span>
                )}
              </div>
            </div>

            <div className="relative">
              <div
                className={cn(
                  "text-sm font-semibold uppercase tracking-wide",
                  isWhite ? "text-white/85" : "text-accent-60"
                )}
              >
                {stat.label}
              </div>
              <div
                className={cn(
                  "mt-1 text-sm",
                  isWhite ? "text-white/65" : "text-ink-60"
                )}
              >
                {stat.caption}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
