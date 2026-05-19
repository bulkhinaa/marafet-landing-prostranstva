"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import CountUp from "react-countup";

interface Stat {
  value: number;
  suffix?: string;
  decimals?: number;
  label: string;
  caption: string;
}

const STATS: Stat[] = [
  { value: 1500, label: "локаций", caption: "парк бьюти-коворкингов в РФ" },
  { value: 9, suffix: " млрд ₽", label: "оборот", caption: "годовой объём сегмента" },
  { value: 17, suffix: "%", label: "рост YoY", caption: "с 2022 года" },
  { value: 3, suffix: "%", label: "доля лидера", caption: "никто не закрыл нишу" },
];

export function HeroCounters() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15% 0px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className="grid grid-cols-2 gap-x-8 gap-y-10 md:grid-cols-4 md:gap-x-12"
    >
      {STATS.map((stat, i) => (
        <motion.div
          key={stat.label}
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.8 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-1"
        >
          <div className="font-display text-4xl font-bold tracking-tight text-ink-100 md:text-5xl">
            {inView ? (
              <CountUp
                end={stat.value}
                duration={2.2}
                decimals={stat.decimals ?? 0}
                separator=" "
              />
            ) : (
              "0"
            )}
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
        </motion.div>
      ))}
    </motion.div>
  );
}
