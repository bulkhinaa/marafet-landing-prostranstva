"use client";

import Image from "next/image";
import {
  Apple,
  Smartphone,
  Lock,
  CreditCard,
  Bell,
  Database,
  Shield,
  Zap,
  Search,
  Calendar,
  Wallet,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { FloatingElement } from "@/components/ui/FloatingElement";
import { assetPath } from "@/lib/paths";

interface Feature {
  icon: typeof Apple;
  title: string;
  description: string;
}

const CLIENT_FEATURES: Feature[] = [
  {
    icon: Search,
    title: "Гео-поиск с фильтрами",
    description:
      "Услуга, район, мастер с рейтингом 4.7+ — находит ближайшего за 3 секунды",
  },
  {
    icon: Users,
    title: "Профиль мастера",
    description:
      "Портфолио работ, цены, отзывы и свободные слоты — на одном экране",
  },
  {
    icon: CreditCard,
    title: "Оплата в приложении",
    description:
      "Карта или Сбер ID, чек на почту, остальное автоматически",
  },
];

const MASTER_FEATURES: Feature[] = [
  {
    icon: Calendar,
    title: "Дневное расписание",
    description:
      "Все брони на сегодня одним списком с временами и услугами",
  },
  {
    icon: Zap,
    title: "Статистика за день",
    description:
      "Заработок, план, % выполнения — обновляется в реальном времени",
  },
  {
    icon: Wallet,
    title: "Кошелёк и вывод",
    description:
      "Каждая оплата падает на баланс мастера. Вывод по нажатию кнопки",
  },
];

const PLATFORM_FEATURES: Feature[] = [
  {
    icon: Database,
    title: "Партнёрский кабинет",
    description: "Аналитика загрузки, выручка по креслам, экспорт",
  },
  {
    icon: Bell,
    title: "Push 24/7",
    description: "Клиенту — напоминание, мастеру — новая запись мгновенно",
  },
  {
    icon: Shield,
    title: "ФЗ-152 и шифрование",
    description: "ПДн в РФ, согласия в приложении, JWT с ротацией",
  },
  {
    icon: Lock,
    title: "Самозанятые без бумаг",
    description: "Чеки через Jump.Finance, налог удерживается автоматом",
  },
];

interface PhoneFrameProps {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  width?: number;
}

function PhoneFrame({
  src,
  alt,
  className,
  priority,
  width = 260,
}: PhoneFrameProps) {
  return (
    <div
      className={`relative shrink-0 overflow-hidden rounded-[42px] bg-ink-100 p-[6px] ring-1 ring-inset ring-white/15 shadow-[0_30px_80px_-15px_rgba(0,0,0,0.55)] ${className ?? ""}`}
      style={{ width }}
    >
      <div className="relative aspect-[375/812] w-full overflow-hidden rounded-[36px] bg-white">
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${width}px`}
          priority={priority}
          unoptimized
          className="object-cover"
        />
        <div
          aria-hidden
          className="absolute left-1/2 top-1 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-ink-100"
        />
      </div>
    </div>
  );
}

interface StoryProps {
  eyebrow: string;
  title: React.ReactNode;
  description: string;
  features: Feature[];
  phones: { src: string; alt: string; priority?: boolean }[];
  reverse?: boolean;
  tone: "dark" | "soft";
}

function Story({
  eyebrow,
  title,
  description,
  features,
  phones,
  reverse,
  tone,
}: StoryProps) {
  const isDark = tone === "dark";
  return (
    <div
      className={`relative overflow-hidden rounded-[40px] p-8 md:p-12 ${
        isDark
          ? "bg-gradient-to-br from-accent-100 to-ink-100 text-white shadow-[0_30px_80px_-25px_rgba(122,84,255,0.55)]"
          : "bg-accent-10 ring-1 ring-inset ring-accent-30/40"
      }`}
    >
      {/* Decorative glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{
          background: isDark
            ? "radial-gradient(circle, rgba(171,92,233,0.6) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(122,84,255,0.4) 0%, transparent 70%)",
        }}
      />

      <div
        className={`relative grid gap-10 lg:gap-14 lg:items-center ${
          reverse
            ? "lg:grid-cols-[1fr_1.1fr]"
            : "lg:grid-cols-[1.1fr_1fr]"
        }`}
      >
        {/* Phones */}
        <div
          className={`flex items-center justify-center gap-5 ${reverse ? "lg:order-2" : ""}`}
        >
          {phones.map((p, i) => (
            <PhoneFrame
              key={i}
              src={p.src}
              alt={p.alt}
              priority={p.priority}
              width={phones.length > 1 ? 220 : 280}
              className={
                phones.length > 1 && i === 0
                  ? "translate-y-6"
                  : phones.length > 1 && i === phones.length - 1
                    ? "-translate-y-6"
                    : ""
              }
            />
          ))}
        </div>

        {/* Text */}
        <div className={`flex flex-col gap-6 ${reverse ? "lg:order-1" : ""}`}>
          <span
            className={`inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] ${
              isDark
                ? "bg-white/10 text-accent-40 ring-1 ring-inset ring-white/15"
                : "bg-white text-accent-80 ring-1 ring-inset ring-accent-30"
            }`}
          >
            {eyebrow}
          </span>
          <h3
            className={`font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl ${
              isDark ? "text-white" : "text-ink-100"
            }`}
          >
            {title}
          </h3>
          <p
            className={`text-base leading-relaxed md:text-lg ${
              isDark ? "text-white/70" : "text-ink-70"
            }`}
          >
            {description}
          </p>
          <ul className="mt-2 flex flex-col gap-4">
            {features.map((f) => {
              const Icon = f.icon;
              return (
                <li key={f.title} className="flex items-start gap-3">
                  <span
                    className={`inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl ${
                      isDark
                        ? "bg-white/10 text-accent-40"
                        : "bg-surface text-accent-60 ring-1 ring-inset ring-accent-30"
                    }`}
                  >
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h4
                      className={`font-semibold ${
                        isDark ? "text-white" : "text-ink-100"
                      }`}
                    >
                      {f.title}
                    </h4>
                    <p
                      className={`mt-0.5 text-sm leading-relaxed ${
                        isDark ? "text-white/65" : "text-ink-70"
                      }`}
                    >
                      {f.description}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}

export function TechSection() {
  return (
    <Section anchor="tech" tone="light">
      <Container size="xl">
        <SectionHeading
          eyebrow="Технологии"
          title="Зрелое приложение — на iOS и Android"
          subtitle="Не корпоративный портал и не сайт в обёртке. Полноценное мобильное приложение, через которое работают клиенты и мастера на вашей площадке"
          align="center"
        />

        {/* Story 1 — Клиенты */}
        <div className="mt-14">
          <Story
            tone="dark"
            eyebrow="История клиента"
            title={
              <>
                Так{" "}
                <span className="bg-gradient-to-br from-accent-40 to-magenta-50 bg-clip-text text-transparent">
                  клиенты находят и записываются
                </span>{" "}
                к вашим мастерам
              </>
            }
            description="Клиент в приложении видит карту с площадками рядом, выбирает мастера, смотрит его портфолио и записывается на конкретный слот. Оплата — внутри приложения, чек придёт ему на почту, выплата мастеру — автоматически."
            features={CLIENT_FEATURES}
            phones={[
              {
                src: assetPath("/screens/screen-home.png"),
                alt: "Главная — поиск мастеров рядом",
                priority: true,
              },
              {
                src: assetPath("/screens/screen-master-card.png"),
                alt: "Карточка мастера с услугами и портфолио",
              },
              {
                src: assetPath("/screens/screen-booking.png"),
                alt: "Бронирование услуги и выбор времени",
              },
            ]}
          />
        </div>

        {/* Story 2 — Мастера */}
        <div className="mt-8">
          <Story
            tone="soft"
            reverse
            eyebrow="История мастера"
            title={
              <>
                Так{" "}
                <span className="bg-gradient-to-br from-accent-60 to-magenta-60 bg-clip-text text-transparent">
                  мастер видит свой день
                </span>{" "}
                и зарабатывает у вас
              </>
            }
            description="Мастер открывает приложение и сразу видит — кто приходит, во сколько и на какую услугу. Внизу — счётчик заработка за день и план. Кошелёк показывает баланс, кнопка вывода — деньги на карту."
            features={MASTER_FEATURES}
            phones={[
              {
                src: assetPath("/screens/screen-master-home.png"),
                alt: "Главная мастера — расписание и статистика дня",
              },
              {
                src: assetPath("/screens/screen-wallet.png"),
                alt: "Кошелёк мастера — выручка и история транзакций",
              },
            ]}
          />
        </div>

        {/* Platform — нижний блок 4 фичи */}
        <div className="mt-14">
          <h3 className="mb-6 font-display text-2xl font-bold tracking-tight text-ink-100 md:text-3xl">
            И ещё немного важного — для вас как партнёра
          </h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {PLATFORM_FEATURES.map((f, i) => {
              const Icon = f.icon;
              return (
                <SpotlightCard
                  key={f.title}
                  borderRadius={24}
                  spotlightColor="rgba(122, 84, 255, 0.1)"
                  className="group flex flex-col gap-3 bg-surface p-6 ring-1 ring-inset ring-ink-20 hover:ring-accent-40"
                >
                  <FloatingElement amplitude={3} duration={4 + i * 0.3} delay={i * 0.1}>
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-accent-10 text-accent-60 transition-colors group-hover:bg-accent-20">
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </span>
                  </FloatingElement>
                  <h4 className="font-display text-lg font-bold tracking-tight text-ink-100">
                    {f.title}
                  </h4>
                  <p className="text-sm leading-relaxed text-ink-70">
                    {f.description}
                  </p>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </Container>
    </Section>
  );
}
