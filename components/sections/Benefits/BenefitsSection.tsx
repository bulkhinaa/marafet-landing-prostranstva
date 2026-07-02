"use client";

import {
  Megaphone,
  MapPin,
  Sparkles,
  Calendar,
  CreditCard,
  BarChart3,
  Headphones,
  GraduationCap,
  Image as ImageIcon,
  Gift,
  Scale,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { TiltCard } from "@/components/ui/TiltCard";
import { FloatingElement } from "@/components/ui/FloatingElement";

interface Benefit {
  icon: typeof Megaphone;
  title: string;
  description: string;
  accent?: boolean;
}

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    title: "Поток мастеров",
    description: "23 000+ мастеров в приложении ищут стабильное рабочее место",
    accent: true,
  },
  {
    icon: MapPin,
    title: "Поток клиентов",
    description: "Гео-поиск выводит вашу площадку первой пользователям рядом",
    accent: true,
  },
  {
    icon: Sparkles,
    title: "Брендинг МПространств",
    description: "Готовая айдентика — 4 цвета, 2 гаммы, шаблоны вывесок и мерча",
  },
  {
    icon: Calendar,
    title: "Готовое расписание мастеров",
    description: "Каждый мастер ведёт календарь, клиенты записываются сами без админа",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Заполняемость, выручка, средний чек, возврат клиентов",
  },
  {
    icon: Headphones,
    title: "Аккаунт-менеджер",
    description: "Персональный куратор сопровождает вас с первого дня",
  },
  {
    icon: GraduationCap,
    title: "Обучение команды",
    description: "База знаний, чек-листы, регулярные вебинары для админов",
  },
  {
    icon: Gift,
    title: "Партнёрская программа",
    description: "Бонусы за приведённых мастеров и партнёров",
  },
  {
    icon: Scale,
    title: "Юридическая база",
    description: "Шаблоны договоров с самозанятыми и арендодателями",
  },
];

export function BenefitsSection() {
  return (
    <Section anchor="benefits" tone="light">
      <Container size="xl">
        <SectionHeading
          eyebrow="Что ещё входит в пакет"
          title="Направления поддержки сверх экономии"
          subtitle="Помимо CRM, маркетинга и потока клиентов/мастеров — вот ещё что бесплатно входит в подключение"
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6 [transform-style:preserve-3d]">
          {BENEFITS.map((benefit, i) => {
            const Icon = benefit.icon;
            return (
              <TiltCard
                key={benefit.title}
                maxTilt={6}
                className={`group flex flex-col gap-3 rounded-3xl p-6 ${
                  benefit.accent
                    ? "bg-accent-100 text-white ring-1 ring-inset ring-accent-80"
                    : "bg-accent-10 ring-1 ring-inset ring-accent-30/50"
                }`}
              >
                <FloatingElement amplitude={3} duration={4 + (i % 4) * 0.5} delay={(i % 4) * 0.15}>
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl transition-transform group-hover:scale-110 ${
                      benefit.accent
                        ? "bg-white/10 text-accent-30"
                        : "bg-surface text-accent-60"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                </FloatingElement>
                <h3
                  className={`font-display text-xl font-bold tracking-tight ${
                    benefit.accent ? "text-white" : "text-ink-100"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    benefit.accent ? "text-white/75" : "text-ink-70"
                  }`}
                >
                  {benefit.description}
                </p>
              </TiltCard>
            );
          })}
        </div>

        <p className="mt-10 text-center text-sm text-ink-60">
          Детали и условия комиссии — на 30-минутном созвоне с аккаунт-менеджером
        </p>
      </Container>
    </Section>
  );
}
