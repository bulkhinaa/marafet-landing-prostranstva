"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroBackground } from "./HeroBackground";
import { FloatingObjects } from "./FloatingObjects";
import { HeroCounters } from "./HeroCounters";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-dvh items-center overflow-hidden pt-28 pb-24 md:pt-32 md:pb-32"
    >
      <HeroBackground />
      <FloatingObjects />

      <Container size="xl" className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col gap-8 md:gap-10"
        >
          <div>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-10 px-4 py-2 text-sm font-medium text-accent-80 ring-1 ring-inset ring-accent-30">
              <Sparkles className="h-4 w-4 text-accent-60" />
              Партнёрская программа для бьюти-коворкингов и салонов
            </span>
          </div>

          <h1 className="font-display max-w-5xl text-balance text-[44px] font-bold leading-[1.02] tracking-tight text-ink-100 sm:text-6xl md:text-7xl lg:text-[88px]">
            Станьте{" "}
            <span className="shimmer-text">Марафет&nbsp;Пространством</span> —
            с потоком клиентов и&nbsp;мастеров
          </h1>

          <p className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-70 md:text-xl">
            Подключите коворкинг или салон к экосистеме Марафет: мы приводим
            мастеров и клиентов из приложения, делимся брендом, IT и
            стандартами. Гибридная модель: бесплатный коннект + платный пакет.
          </p>

          <div className="flex flex-wrap gap-4 pt-2">
            <MagneticButton
              variant="primary"
              icon={
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              }
            >
              У меня коворкинг
            </MagneticButton>
            <MagneticButton variant="ghost">У меня салон</MagneticButton>
          </div>

          <div className="mt-10 border-t border-ink-20/60 pt-10 md:mt-16 md:pt-16">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-ink-60">
              Рынок бьюти-коворкингов России · 2026
            </p>
            <HeroCounters />
          </div>
        </motion.div>
      </Container>

      <div
        aria-hidden
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex h-10 w-6 items-start justify-center rounded-full border border-ink-30/60 p-1.5"
      >
        <span className="block h-2 w-1 rounded-full bg-accent-60 animate-[scrollHint_2s_ease-in-out_infinite]" />
      </div>
    </section>
  );
}
