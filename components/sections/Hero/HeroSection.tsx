"use client";

import { ArrowRight, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { HeroBackground } from "./HeroBackground";
import { FloatingObjects } from "./FloatingObjects";
import { HeroCounters } from "./HeroCounters";

/**
 * Прокрутка к секции "Боль/Решение" с предустановкой нужного таба.
 * Таб коммуницируется через URL hash, секция читает window.location.hash.
 */
function scrollToProblem(audience: "coworking" | "salon") {
  const target = document.getElementById("problem-solution");
  if (!target) return;
  // Сохраняем намерение в hash, чтобы ProblemSolutionSection прочитала его
  history.replaceState(null, "", `#problem-solution-${audience}`);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  // Триггерим custom event для секции
  window.dispatchEvent(
    new CustomEvent("audience-select", { detail: audience })
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-28 pb-24 md:pt-32 md:pb-32"
    >
      <HeroBackground />
      <FloatingObjects />

      <Container size="xl" className="relative z-10">
        <div className="flex flex-col gap-8 md:gap-10 animate-[heroIn_0.45s_cubic-bezier(0.16,1,0.3,1)_both]">
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
              icon={<ArrowRight className="h-5 w-5" />}
              onClick={() => scrollToProblem("coworking")}
            >
              У меня коворкинг
            </MagneticButton>
            <MagneticButton
              variant="ghost"
              onClick={() => scrollToProblem("salon")}
            >
              У меня салон
            </MagneticButton>
          </div>

          <div className="mt-10 border-t border-ink-20/60 pt-10 md:mt-16 md:pt-16">
            <p className="mb-8 text-xs font-semibold uppercase tracking-[0.22em] text-ink-60">
              Рынок бьюти-коворкингов России · 2026
            </p>
            <HeroCounters />
          </div>
        </div>
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
