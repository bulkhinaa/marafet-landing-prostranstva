"use client";

import { motion, type Variants } from "framer-motion";
import dynamic from "next/dynamic";
import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroBackground } from "./HeroBackground";
import { HeroCounters } from "./HeroCounters";

const FloatingObjects = dynamic(
  () => import("./FloatingObjects").then((m) => m.FloatingObjects),
  { ssr: false }
);

const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
  },
};

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate flex min-h-dvh items-center overflow-hidden pt-28 pb-24 md:pt-32 md:pb-32"
    >
      <HeroBackground />

      {/* 3D-объекты — только на десктопе, ленивая загрузка */}
      <div className="absolute inset-0 hidden md:block">
        <FloatingObjects />
      </div>

      <Container size="xl" className="relative z-10">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="flex flex-col gap-8 md:gap-10"
        >
          {/* Eyebrow */}
          <motion.div variants={item}>
            <span className="inline-flex items-center gap-2 rounded-full bg-accent-10 px-4 py-2 text-sm font-medium text-accent-80 ring-1 ring-inset ring-accent-30 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-accent-60" />
              Партнёрская программа для бьюти-коворкингов и салонов
            </span>
          </motion.div>

          {/* Title */}
          <motion.h1
            variants={item}
            className="font-display max-w-5xl text-balance text-[44px] font-bold leading-[1.02] tracking-tight text-ink-100 sm:text-6xl md:text-7xl lg:text-[88px]"
          >
            Станьте <span className="shimmer-text">Марафет&nbsp;Пространством</span> —
            с потоком клиентов и&nbsp;мастеров
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={item}
            className="max-w-2xl text-pretty text-lg leading-relaxed text-ink-70 md:text-xl"
          >
            Подключите коворкинг или салон к экосистеме Марафет: мы приводим
            мастеров и клиентов из приложения, делимся брендом, IT и стандартами.
            Гибридная модель: бесплатный коннект + платный пакет.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={item} className="flex flex-wrap gap-4 pt-2">
            <MagneticButton
              variant="primary"
              icon={<ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />}
            >
              У меня коворкинг
            </MagneticButton>
            <MagneticButton variant="ghost">У меня салон</MagneticButton>
          </motion.div>

          {/* Stats divider */}
          <motion.div
            variants={item}
            className="mt-10 border-t border-ink-20/60 pt-10 md:mt-16 md:pt-16"
          >
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-ink-60">
              Рынок бьюти-коворкингов России · 2026
            </p>
            <HeroCounters />
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="flex h-10 w-6 items-start justify-center rounded-full border border-ink-30/60 p-1.5"
        >
          <span className="block h-2 w-1 rounded-full bg-accent-60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
