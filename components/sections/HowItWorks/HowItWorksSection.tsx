"use client";

import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { FloatingElement } from "@/components/ui/FloatingElement";
import { ClipboardCheck, Palette, Users, Sparkle } from "lucide-react";

interface Step {
  icon: typeof ClipboardCheck;
  number: string;
  title: string;
  description: string;
  duration: string;
}

const STEPS: Step[] = [
  {
    icon: ClipboardCheck,
    number: "01",
    title: "Подключение",
    description:
      "Заявка → созвон с аккаунт-менеджером → договор → подключение площадки к платформе и партнёрскому кабинету.",
    duration: "1–3 дня",
  },
  {
    icon: Palette,
    number: "02",
    title: "Брендинг",
    description:
      "Гайд по фирстилю, шаблоны вывесок и POS-материалов, мерч и наклейки. Закупки и работы — через подрядчиков с льготными ценами от нас.",
    duration: "по вашему темпу",
  },
  {
    icon: Users,
    number: "03",
    title: "Мастера",
    description:
      "Мастера из приложения видят вашу площадку в геопоиске, арендуют рабочее место по часам или абонементу.",
    duration: "от 7 дней",
  },
  {
    icon: Sparkle,
    number: "04",
    title: "Клиенты",
    description:
      "Клиенты записываются к мастерам через приложение, ваш коворкинг автоматически попадает в их историю визитов.",
    duration: "сразу",
  },
];

function StepConnector({ idx }: { idx: number }) {
  // Уникальный id градиента — иначе при множественных SVG градиент конфликтует
  const gid = `beam-grad-${idx}`;
  return (
    <svg
      aria-hidden
      className="absolute right-[-30px] top-1/2 hidden h-12 w-[60px] -translate-y-1/2 lg:block z-10"
      viewBox="0 0 60 24"
      fill="none"
    >
      <defs>
        <linearGradient id={gid} x1="0" y1="0" x2="60" y2="0">
          <stop offset="0%" stopColor="#7A54FF" stopOpacity="0" />
          <stop offset="50%" stopColor="#AB5CE9" stopOpacity="1" />
          <stop offset="100%" stopColor="#7A54FF" stopOpacity="0" />
        </linearGradient>
      </defs>
      {/* Подкладка-линия */}
      <path
        d="M2 12h50"
        stroke="#E3DBFF"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      {/* Анимированный луч */}
      <path
        d="M2 12h50m0 0l-8-8m8 8l-8 8"
        stroke={`url(#${gid})`}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeDasharray="60"
        className="animate-[beamFlow_2.4s_ease-in-out_infinite]"
        style={{ animationDelay: `${idx * 0.3}s` }}
      />
    </svg>
  );
}

export function HowItWorksSection() {
  return (
    <Section anchor="how-it-works" tone="soft">
      <Container size="xl">
        <SectionHeading
          eyebrow="Как это устроено"
          title="От заявки до первого мастера — 7 дней"
          subtitle="Подключение бесплатно. Платформа зарабатывает только на комиссии с записей мастеров через приложение"
          align="center"
        />

        <ol className="mt-16 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li key={step.number} className="relative">
                <SpotlightCard
                  borderRadius={24}
                  spotlightColor="rgba(122, 84, 255, 0.12)"
                  className="group h-full flex flex-col gap-4 bg-surface p-6 ring-1 ring-inset ring-ink-20 hover:ring-accent-40 md:p-7"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-3xl font-bold text-accent-60/40">
                      {step.number}
                    </span>
                    <FloatingElement amplitude={4} duration={3 + i * 0.5} delay={i * 0.2}>
                      <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-10 text-accent-60 ring-1 ring-inset ring-accent-30 group-hover:bg-accent-20 transition-colors">
                        <Icon className="h-6 w-6" strokeWidth={2} />
                      </span>
                    </FloatingElement>
                  </div>

                  <h3 className="font-display text-2xl font-bold tracking-tight text-ink-100">
                    {step.title}
                  </h3>

                  <p className="grow text-[15px] leading-relaxed text-ink-70">
                    {step.description}
                  </p>

                  <div className="mt-2 inline-flex w-fit items-center gap-1.5 rounded-full bg-accent-10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent-80">
                    {step.duration}
                  </div>
                </SpotlightCard>

                {i < STEPS.length - 1 && <StepConnector idx={i} />}
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
