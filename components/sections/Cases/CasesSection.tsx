"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import {
  ArrowUpRight,
  Star,
  MapPin,
  Calendar,
  Users,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { assetPath } from "@/lib/paths";

/**
 * Immersive case-секция «Загляните внутрь».
 *
 * Без sticky (ломался из-за overflow-x-hidden на <main>).
 * Эффект «приближения» — через parallax-зум фоновой картинки по скроллу:
 *  - Когда секция входит в viewport, фасад в scale 1.0
 *  - По мере прокрутки через секцию — фасад зумится до 1.3× и слегка смещается вверх
 *  - Поверх — лёгкое затемнение для читаемости, плюс заголовок и карточка флагмана
 *  - Никакого тяжёлого blur, никакого overlay > 0.65 — фасад всегда виден
 */
export function CasesSection() {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Zoom 1.0 → 1.3 — мягкое приближение к фасаду
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);
  // Slight upward drift
  const imageY = useTransform(scrollYProgress, [0, 1], ["3%", "-7%"]);

  return (
    <section
      ref={ref}
      id="cases"
      className="relative isolate overflow-hidden bg-ink-100 py-24 md:py-32 lg:py-40"
    >
      {/* Background facade — занимает всю секцию, зумится при скролле */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={
          prefersReducedMotion
            ? {}
            : { scale: imageScale, y: imageY }
        }
      >
        <Image
          src={assetPath("/spaces/marafet-studio/facade.webp")}
          alt=""
          fill
          priority
          quality={95}
          sizes="100vw"
          className="object-cover object-center"
        />
      </motion.div>

      {/* Затемнение для читаемости текста (фото видно весь раздел) */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(30,22,57,0.55) 0%, rgba(30,22,57,0.35) 30%, rgba(30,22,57,0.55) 70%, rgba(30,22,57,0.92) 100%)",
        }}
      />

      {/* Левый фиолетовый glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[500px] w-[500px] rounded-full opacity-35 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(171,92,233,0.6) 0%, transparent 70%)",
        }}
      />

      <Container size="xl" className="relative">
        {/* Heading */}
        <SectionHeading
          eyebrow="Реальный кейс · флагман"
          title={
            <>
              Загляните{" "}
              <span className="bg-gradient-to-br from-accent-40 via-magenta-50 to-rose-50 bg-clip-text text-transparent">
                внутрь
              </span>
            </>
          }
          subtitle="Наша флагманская студия в Москве — с неё начинается сеть Марафет Пространств"
          align="center"
          className="[&_h2]:!text-white [&_p]:!text-white/80 mx-auto"
        />

        {/* Content grid: card + coming soon */}
        <div className="mx-auto mt-14 max-w-2xl md:mt-20">
          {/* LEFT — Карточка флагмана */}
          <Link
            href="/spaces/marafet-studio"
            className="group relative overflow-hidden rounded-[28px] bg-white/[0.08] backdrop-blur-xl ring-1 ring-inset ring-white/25 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] transition-all duration-300 hover:ring-white/40 hover:bg-white/[0.12] hover:scale-[1.005]"
          >
            <div className="relative z-10 flex flex-col gap-5 p-7 text-white md:p-8 lg:p-10">
              {/* Badges */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 rounded-full bg-success/25 px-3 py-1 text-xs font-semibold text-success backdrop-blur">
                  <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                  Работает
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/20">
                  🏆 Хорошее место 2026
                </span>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-accent-60 to-magenta-60 px-3 py-1 text-xs font-bold text-white">
                  Флагман
                </span>
              </div>

              {/* Title */}
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-40">
                  Москва · район Академический
                </p>
                <h3 className="mt-2 font-display text-2xl font-bold leading-[1.05] tracking-tight md:text-3xl lg:text-4xl">
                  Марафет на Новочерёмушкинской
                </h3>
              </div>

              <p className="max-w-lg text-sm leading-relaxed text-white/80 md:text-base">
                Ногтевая студия с командой из 8 мастеров. Маникюр + Luxio
                от 2 700 ₽. Место, которое мы построили сами и обкатываем
                стандарты для сети.
              </p>

              {/* Stats grid */}
              <div className="grid grid-cols-4 gap-2.5">
                <MiniStat
                  icon={
                    <Star className="h-3.5 w-3.5 fill-warning text-warning" />
                  }
                  value="5,0"
                  label="рейтинг"
                />
                <MiniStat
                  icon={<Users className="h-3.5 w-3.5 text-accent-40" />}
                  value="875"
                  label="оценок"
                />
                <MiniStat
                  icon={<MapPin className="h-3.5 w-3.5 text-accent-40" />}
                  value="Ю-З"
                  label="район"
                />
                <MiniStat
                  icon={
                    <Sparkles className="h-3.5 w-3.5 text-accent-40" />
                  }
                  value="8"
                  label="мастеров"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-ink-100 transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-lg">
                  Открыть страницу студии
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </div>
          </Link>

        </div>

        <p className="mt-12 text-center text-sm text-white/55">
          Хотите стать следующим кейсом? Напишите нам — контакты в подвале сайта
        </p>
      </Container>
    </section>
  );
}

function MiniStat({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-0.5 rounded-xl bg-white/[0.06] p-2.5 ring-1 ring-inset ring-white/10 backdrop-blur-sm">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="font-display text-base font-bold text-white">
          {value}
        </span>
      </div>
      <span className="text-[10px] text-white/55">{label}</span>
    </div>
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
      borderRadius={18}
      spotlightColor="rgba(122, 84, 255, 0.18)"
      className="group flex flex-col gap-1.5 bg-white/[0.07] backdrop-blur-md p-4 ring-1 ring-inset ring-white/15 hover:ring-white/30 hover:bg-white/10 transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.15em] text-accent-40">
          {city}
        </span>
        <span className="inline-flex items-center gap-1 rounded-full bg-accent-60/25 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-40">
          скоро
        </span>
      </div>

      <h4 className="font-display text-base font-bold tracking-tight text-white">
        {type}
      </h4>

      <div className="flex items-center justify-between text-[11px] text-white/60">
        <span>{status}</span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {eta}
        </span>
      </div>
    </SpotlightCard>
  );
}
