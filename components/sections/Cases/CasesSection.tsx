"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
} from "framer-motion";
import { ArrowUpRight, Star, MapPin, Calendar, Users, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { assetPath } from "@/lib/paths";

export function CasesSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Smooth spring for all transforms
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Image zoom effect: starts at scale 1, zooms to 1.8 as you scroll through
  const imageScale = useTransform(smoothProgress, [0.1, 0.5], [1, 1.6]);

  // Image moves up slightly during zoom
  const imageY = useTransform(smoothProgress, [0.1, 0.5], ["0%", "-15%"]);

  // Blur increases as we "pass through" the door
  const imageBlur = useTransform(smoothProgress, [0.35, 0.5], [0, 20]);

  // Overlay opacity for transition
  const overlayOpacity = useTransform(smoothProgress, [0.4, 0.55], [0, 1]);

  // Content appears after transition
  const contentOpacity = useTransform(smoothProgress, [0.45, 0.6], [0, 1]);
  const contentY = useTransform(smoothProgress, [0.45, 0.6], [60, 0]);

  return (
    <Section anchor="cases" tone="soft" className="!py-0">
      <div ref={sectionRef} className="relative min-h-[250vh]">
        {/* Sticky container for the immersive effect */}
        <div className="sticky top-0 h-screen overflow-hidden">
          {/* Background heading - visible initially */}
          <motion.div
            className="absolute inset-x-0 top-16 z-10 text-center md:top-24"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.15, 0.35], [0, 1, 0]),
            }}
          >
            <Container size="xl">
              <SectionHeading
                eyebrow="Реальные кейсы"
                title="Загляните внутрь"
                subtitle="Наша флагманская студия — лаборатория стандартов для всей сети"
                align="center"
              />
            </Container>
          </motion.div>

          {/* Coworking entrance image with zoom effect */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={
              prefersReducedMotion
                ? {}
                : {
                    scale: imageScale,
                    y: imageY,
                  }
            }
          >
            <motion.div
              className="relative h-full w-full"
              style={
                prefersReducedMotion
                  ? {}
                  : {
                      filter: useTransform(
                        imageBlur,
                        (v) => `blur(${v}px)`
                      ),
                    }
              }
            >
              <Image
                src={assetPath("/spaces/marafet-studio/entrance-main.jpg")}
                alt="Марафет студия — вход"
                fill
                className="object-cover object-center"
                priority
                sizes="100vw"
              />
              {/* Vignette overlay */}
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.5) 100%)",
                }}
              />
            </motion.div>
          </motion.div>

          {/* Transition overlay - purple gradient */}
          <motion.div
            className="absolute inset-0 pointer-events-none"
            style={{
              opacity: overlayOpacity,
              background:
                "radial-gradient(ellipse at center, rgba(122,84,255,0.9) 0%, rgba(30,22,57,0.98) 70%)",
            }}
          />

          {/* "Welcome inside" content after transition */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            style={
              prefersReducedMotion
                ? { opacity: 1 }
                : {
                    opacity: contentOpacity,
                    y: contentY,
                  }
            }
          >
            <Container size="xl">
              <div className="grid gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12 lg:items-center">
                {/* Left - Main info card */}
                <Link
                  href="/spaces/marafet-studio"
                  className="group relative overflow-hidden rounded-[32px] bg-white/10 backdrop-blur-xl ring-1 ring-inset ring-white/20 transition-all duration-300 hover:ring-white/40 hover:bg-white/15"
                >
                  <div className="relative z-10 flex flex-col gap-6 p-8 text-white md:p-10">
                    {/* Badges */}
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-success/20 px-3 py-1 text-xs font-semibold text-success backdrop-blur">
                        <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                        Работает
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 ring-1 ring-inset ring-white/20">
                        🏆 Хорошее место 2026
                      </span>
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-50 px-3 py-1 text-xs font-bold text-white">
                        Флагман
                      </span>
                    </div>

                    {/* Title */}
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent-40">
                        Вы внутри · Москва · Академический
                      </p>
                      <h3 className="mt-3 font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
                        Марафет
                        <br />
                        <span className="bg-gradient-to-br from-accent-40 via-magenta-50 to-rose-50 bg-clip-text text-transparent">
                          на Новочерёмушкинской
                        </span>
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="max-w-lg text-base leading-relaxed text-white/75 md:text-lg">
                      Ногтевая студия с командой из 8 мастеров. Маникюр + Luxio
                      от 2 700 ₽. Идеальное место, которое мы построили сами —
                      и теперь делимся опытом с партнёрами сети.
                    </p>

                    {/* Stats grid */}
                    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
                      <StatCard
                        icon={<Star className="h-4 w-4 fill-warning text-warning" />}
                        value="5,0"
                        label="рейтинг"
                      />
                      <StatCard
                        icon={<Users className="h-4 w-4 text-accent-40" />}
                        value="875"
                        label="оценок"
                      />
                      <StatCard
                        icon={<MapPin className="h-4 w-4 text-accent-40" />}
                        value="Ю-З"
                        label="район"
                      />
                      <StatCard
                        icon={<Sparkles className="h-4 w-4 text-accent-40" />}
                        value="8"
                        label="мастеров"
                      />
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-100 transition-all duration-300 group-hover:translate-x-1 group-hover:shadow-lg">
                        Открыть страницу студии
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                      <span className="hidden text-xs uppercase tracking-[0.2em] text-white/50 md:inline">
                        Подробнее →
                      </span>
                    </div>
                  </div>
                </Link>

                {/* Right - Coming soon cards */}
                <div className="grid gap-4">
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-white/60">
                    Скоро в сети
                  </h4>
                  <ComingSoonCase
                    city="Москва · Хамовники"
                    type="Барбершоп"
                    status="готовится к открытию"
                    eta="Лето 2026"
                  />
                  <ComingSoonCase
                    city="Санкт-Петербург"
                    type="Студия бровей и ресниц"
                    status="в дизайн-проекте"
                    eta="Осень 2026"
                  />
                  <ComingSoonCase
                    city="Екатеринбург"
                    type="Бьюти-коворкинг"
                    status="ищем помещение"
                    eta="Зима 2026/27"
                  />
                </div>
              </div>

              <p className="mt-10 text-center text-sm text-white/50">
                Хотите стать следующим кейсом? Оставьте заявку — ответим за 24 часа
              </p>
            </Container>
          </motion.div>

          {/* Scroll indicator at bottom */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            style={{
              opacity: useTransform(smoothProgress, [0, 0.1, 0.25], [0, 1, 0]),
            }}
          >
            <span className="text-xs font-medium uppercase tracking-widest text-white/70">
              Скролльте вниз
            </span>
            <motion.div
              className="h-12 w-6 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
              animate={{ y: [0, 4, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <div className="h-2 w-1.5 rounded-full bg-white/70" />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}

function StatCard({
  icon,
  value,
  label,
}: {
  icon: React.ReactNode;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1 rounded-2xl bg-white/5 p-3 ring-1 ring-inset ring-white/10">
      <div className="flex items-center gap-1.5">
        {icon}
        <span className="font-display text-lg font-bold text-white">{value}</span>
      </div>
      <span className="text-xs text-white/50">{label}</span>
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
      borderRadius={20}
      spotlightColor="rgba(122, 84, 255, 0.15)"
      className="group flex flex-col gap-2 bg-white/5 backdrop-blur-sm p-5 ring-1 ring-inset ring-white/10 hover:ring-white/25 hover:bg-white/10 transition-all"
    >
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.15em] text-accent-40">
          {city}
        </span>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-60/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-accent-40">
          скоро
        </span>
      </div>

      <h4 className="font-display text-lg font-bold tracking-tight text-white">
        {type}
      </h4>

      <div className="flex items-center justify-between text-xs text-white/50">
        <span>{status}</span>
        <span className="flex items-center gap-1">
          <Calendar className="h-3 w-3" />
          {eta}
        </span>
      </div>
    </SpotlightCard>
  );
}
