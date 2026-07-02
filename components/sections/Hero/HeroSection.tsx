"use client";

import { ArrowRight, Sparkles as SparklesIcon, Zap } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BorderBeamButton } from "@/components/ui/BorderBeamButton";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { SpotlightCursor } from "@/components/ui/SpotlightCursor";
import { AnimatedLogo } from "@/components/ui/AnimatedLogo";
import { TextReveal } from "@/components/ui/TextReveal";
import { Parallax } from "@/components/ui/Parallax";
import { SparklesOverlay } from "@/components/ui/Sparkles";
import { FloatingElement } from "@/components/ui/FloatingElement";
import { HeroCounters } from "./HeroCounters";

function scrollToProblem(audience: "coworking" | "salon") {
  const target = document.getElementById("problem-solution");
  if (!target) return;
  history.replaceState(null, "", `#problem-solution-${audience}`);
  target.scrollIntoView({ behavior: "smooth", block: "start" });
  window.dispatchEvent(
    new CustomEvent("audience-select", { detail: audience })
  );
}

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative isolate overflow-hidden pt-24 pb-24 md:pt-32 md:pb-32"
    >
      {/* Aurora — самый медленный слой, кажется фоном на большой глубине */}
      <Parallax speed={-0.25} className="absolute inset-0 -z-10">
        <AuroraBackground />
      </Parallax>

      {/* Animated sparkles floating up */}
      <SparklesOverlay count={15} minSize={4} maxSize={12} className="-z-5 opacity-60" />

      <SpotlightCursor />

      <Container size="xl" className="relative z-10">
        <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16 lg:items-center">
          {/* LEFT — Контент */}
          <div className="flex flex-col gap-7 md:gap-9">
            {/* Eyebrow */}
            <div className="opacity-0 animate-[wordIn_0.6s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm font-medium text-accent-80 ring-1 ring-inset ring-accent-30 backdrop-blur shadow-[0_4px_20px_-4px_rgba(122,84,255,0.25)]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent-60 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent-60" />
                </span>
                Партнёрская программа · набор партнёров открыт
              </span>
            </div>

            {/* H1 */}
            <TextReveal
              as="h1"
              text="Заполним ваши кресла мастерами и клиентами. Вы платите только процент с записей"
              delay={0.25}
              stagger={0.05}
              className="font-display text-balance text-[40px] font-bold leading-[1.02] tracking-tight text-ink-100 sm:text-5xl md:text-6xl lg:text-[72px]"
              renderWord={(word) => {
                if (word === "кресла" || word === "процент") {
                  return (
                    <span className="bg-gradient-to-br from-accent-60 via-magenta-60 to-accent-70 bg-clip-text text-transparent">
                      {word}
                    </span>
                  );
                }
                return word;
              }}
            />

            {/* Подзаголовок */}
            <p className="max-w-xl text-pretty text-lg leading-relaxed text-ink-70 md:text-xl opacity-0 animate-[wordIn_0.7s_cubic-bezier(0.16,1,0.3,1)_0.95s_both]">
              Сосредоточьтесь на пространстве. CRM, маркетинг, привлечение
              клиентов и поиск мастеров —{" "}
              <span className="inline-block rounded-md bg-gradient-to-r from-accent-60 to-magenta-60 px-1.5 py-0.5 font-semibold text-white">
                на нас
              </span>
              . Платите только % с записей через приложение.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 opacity-0 animate-[wordIn_0.7s_cubic-bezier(0.16,1,0.3,1)_1.1s_both]">
              <BorderBeamButton
                onClick={() => scrollToProblem("coworking")}
                icon={<ArrowRight className="h-5 w-5" />}
              >
                У меня коворкинг
              </BorderBeamButton>
              <MagneticButton
                variant="ghost"
                onClick={() => scrollToProblem("salon")}
              >
                У меня салон
              </MagneticButton>
            </div>

            {/* Micro-row */}
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-ink-60 opacity-0 animate-[wordIn_0.7s_cubic-bezier(0.16,1,0.3,1)_1.25s_both]">
              <span className="inline-flex items-center gap-1.5">
                <Zap className="h-4 w-4 text-accent-60" />
                7 дней до первого мастера
              </span>
              <span className="inline-flex items-center gap-1.5">
                <SparklesIcon className="h-4 w-4 text-accent-60" />
                Без паушалки, подписок и обязательств
              </span>
            </div>
          </div>

          {/* RIGHT — Анимированный логотип Марафет */}
          <div className="relative hidden lg:flex items-center justify-center opacity-0 animate-[wordIn_1s_cubic-bezier(0.16,1,0.3,1)_0.4s_both]">
            <Parallax speed={0.12} className="relative">
              <AnimatedLogo size={420} />
            </Parallax>
          </div>
        </div>

        {/* Bento Counters — лёгкий параллакс, едва заметный */}
        <Parallax
          speed={-0.05}
          className="mt-16 opacity-0 animate-[wordIn_0.8s_cubic-bezier(0.16,1,0.3,1)_1.4s_both] md:mt-24"
        >
          <div className="mb-6 flex items-center gap-4">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-ink-60">
              Рынок бьюти-коворкингов России · 2026
            </p>
            <div className="h-px flex-1 bg-gradient-to-r from-accent-40 to-transparent" />
          </div>
          <HeroCounters />
        </Parallax>
      </Container>
    </section>
  );
}
