"use client";

import Link from "next/link";
import { ArrowUpRight, Star, MapPin, Calendar } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { GradientBorder } from "@/components/ui/GradientBorder";

export function CasesSection() {
  return (
    <Section anchor="cases" tone="soft">
      <Container size="xl">
        <SectionHeading
          eyebrow="Реальные кейсы"
          title="Что уже работает в сети"
          subtitle="Открытие первой студии стало нашей лабораторией: на ней мы откатываем стандарты, дизайн и IT, которые потом получает каждый партнёр"
          align="center"
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-[1.4fr_1fr] lg:gap-6">
          {/* HERO CASE — наш флагман */}
          <Link
            href="/spaces/marafet-studio"
            className="group relative overflow-hidden rounded-[40px] bg-ink-100 ring-1 ring-inset ring-white/10 transition-transform duration-300 hover:scale-[1.01]"
          >
            {/* Фон */}
            <div className="absolute inset-0 bg-ink-100">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 64px)",
                }}
              />
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-2/3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(171,92,233,0.45), rgba(122,84,255,0.18), transparent)",
                }}
              />
            </div>

            <div className="relative z-10 flex min-h-[460px] flex-col justify-between gap-6 p-8 text-white md:min-h-[540px] md:p-12">
              {/* Top — badges */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  Работает
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85 ring-1 ring-inset ring-white/15">
                  🏆 Хорошее место 2026
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-60 px-3 py-1 text-xs font-bold text-white">
                  Флагман
                </span>
              </div>

              {/* Middle — content */}
              <div className="flex flex-col gap-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-40">
                    Москва · Академический
                  </p>
                  <h3 className="mt-3 font-display text-4xl font-bold leading-[1.05] tracking-tight md:text-5xl">
                    Марафет<br />
                    <span className="bg-gradient-to-br from-accent-40 via-accent-50 to-magenta-50 bg-clip-text text-transparent">
                      на Новочерёмушкинской
                    </span>
                  </h3>
                </div>

                <p className="max-w-md text-base leading-relaxed text-white/70 md:text-lg">
                  Ногтевая студия. Маникюр + Luxio от 2 700 ₽. Идеальное
                  место, которое мы построили сами — и теперь делимся опытом
                  с партнёрами сети.
                </p>

                {/* Stats row */}
                <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm text-white/85">
                  <span className="inline-flex items-center gap-1.5">
                    <Star className="h-4 w-4 fill-warning text-warning" />
                    <span className="font-bold">5,0</span>
                    <span className="text-white/60">/ 875 оценок</span>
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-accent-40" />
                    Новочерёмушкинская, 17
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar className="h-4 w-4 text-accent-40" />
                    Открыто до 22:00
                  </span>
                </div>
              </div>

              {/* Bottom — CTA */}
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-100 transition-transform duration-300 group-hover:translate-x-1">
                  Открыть страницу студии
                  <ArrowUpRight className="h-4 w-4" />
                </span>
                <span className="hidden text-xs uppercase tracking-[0.2em] text-white/40 md:inline">
                  799 отзывов
                </span>
              </div>
            </div>
          </Link>

          {/* Right column — coming-soon placeholders */}
          <div className="grid gap-5">
            <ComingSoonCase
              city="Москва · Хамовники"
              type="Барбершоп"
              status="готовится к открытию"
              eta="Лето 2026"
            />
            <ComingSoonCase
              city="Санкт-Петербург · Центр"
              type="Студия бровей и ресниц"
              status="в дизайн-проекте"
              eta="Осень 2026"
            />
            <ComingSoonCase
              city="Екатеринбург"
              type="Бьюти-коворкинг 6 кресел"
              status="ищем помещение"
              eta="Зима 2026/27"
            />
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-ink-60">
          Хотите стать следующим кейсом в этом списке? Оставьте заявку — ответим за 24 часа
        </p>
      </Container>
    </Section>
  );
}

function ComingSoonCase({
  city,
  type,
  status,
  eta,
}: {
  city: string;
  type: string;
  status: string;
  eta: string;
}) {
  return (
    <SpotlightCard
      borderRadius={24}
      spotlightColor="rgba(122, 84, 255, 0.1)"
      className="group flex flex-col gap-3 bg-surface p-6 ring-1 ring-inset ring-ink-20 hover:ring-accent-40 md:p-7"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-60">
          {city}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-10 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-80">
          скоро
        </span>
      </div>

      <h4 className="font-display text-xl font-bold tracking-tight text-ink-100">
        {type}
      </h4>

      <p className="text-sm text-ink-70">{status}</p>

      <div className="mt-1 flex items-center gap-1.5 text-xs text-ink-60">
        <Calendar className="h-3.5 w-3.5" />
        Открытие: <span className="font-semibold text-ink-100">{eta}</span>
      </div>
    </SpotlightCard>
  );
}
