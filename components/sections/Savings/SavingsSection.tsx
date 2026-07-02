"use client";

import {
  Calendar,
  Megaphone,
  UserMinus,
  UserSearch,
  TrendingDown,
  Sparkles,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { NumberTicker } from "@/components/ui/NumberTicker";

interface Saving {
  icon: typeof Calendar;
  title: string;
  usualCost: string;
  usualLabel: string;
  description: string;
}

const SAVINGS: Saving[] = [
  {
    icon: Calendar,
    title: "CRM и онлайн-запись",
    usualCost: "2 000 – 10 000 ₽/мес",
    usualLabel: "стандартные CRM/букеры, кассовое ПО",
    description:
      "Запись, расписание, история клиентов, касса — всё встроено в приложение. Не нужно покупать сторонний сервис и обучать команду.",
  },
  {
    icon: Megaphone,
    title: "Маркетинг и привлечение клиентов",
    usualCost: "50 000 – 150 000 ₽/мес",
    usualLabel: "таргет, SMM, контекст, баннеры",
    description:
      "Приложение само приводит клиентов через гео-поиск, рейтинги и push. Чем раньше подключитесь — тем выше будете в выдаче района.",
  },
  {
    icon: UserMinus,
    title: "Администратор",
    usualCost: "50 000 – 80 000 ₽/мес",
    usualLabel: "зарплата + налоги + поиск замены",
    description:
      "Мастера сами ведут календарь и видят брони в приложении. Клиенты записываются без звонков — нет нужды в человеке у телефона.",
  },
  {
    icon: UserSearch,
    title: "Найм мастеров",
    usualCost: "5 000 – 15 000 ₽ / мастер",
    usualLabel: "HH, рекрутинговые агентства, реклама",
    description:
      "Мастера сами ищут вашу площадку в приложении — гео-поиск, рейтинг, портфолио мастеров рядом. Вы не платите за каждое привлечение.",
  },
];

const ANNUAL_SAVINGS = 1_500_000;

export function SavingsSection() {
  return (
    <Section anchor="savings" tone="dark" className="bg-ink-100">
      {/* Декоративный glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 top-1/4 -z-0 h-[500px] w-[500px] rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(122,84,255,0.7) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-32 bottom-1/4 -z-0 h-[400px] w-[400px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(171,92,233,0.7) 0%, transparent 70%)",
        }}
      />

      <Container size="xl" className="relative">
        <SectionHeading
          eyebrow="Главная экономия"
          title={
            <>
              Сосредоточьтесь{" "}
              <span className="bg-gradient-to-br from-accent-40 via-magenta-50 to-rose-50 bg-clip-text text-transparent">
                на пространстве
              </span>
            </>
          }
          subtitle="CRM, маркетинг, поиск клиентов и мастеров — снимаем с вас. Это работает само и для вас бесплатно."
          align="center"
          className="[&_h2]:!text-white [&_p]:!text-white/75 mx-auto"
        />

        {/* 4 savings cards */}
        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-2 md:gap-6 lg:gap-7">
          {SAVINGS.map((s) => {
            const Icon = s.icon;
            return (
              <article
                key={s.title}
                className="group relative overflow-hidden rounded-3xl bg-white/[0.04] p-7 ring-1 ring-inset ring-white/10 backdrop-blur-sm transition-colors hover:bg-white/[0.07] hover:ring-white/20 md:p-9"
              >
                {/* Subtle gradient corner */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{
                    background:
                      "radial-gradient(circle, rgba(171,92,233,0.8) 0%, transparent 70%)",
                  }}
                />

                <div className="relative flex flex-col gap-5">
                  {/* Icon + title */}
                  <div className="flex items-start gap-4">
                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-60 to-magenta-60 text-white shadow-[0_10px_30px_-8px_rgba(122,84,255,0.6)]">
                      <Icon className="h-6 w-6" strokeWidth={2} />
                    </span>
                    <h3 className="font-display text-xl font-bold tracking-tight text-white md:text-2xl">
                      {s.title}
                    </h3>
                  </div>

                  {/* Usual cost — crossed out */}
                  <div className="flex items-baseline gap-3 rounded-2xl bg-error/10 px-4 py-3 ring-1 ring-inset ring-error/25">
                    <div className="text-xs font-bold uppercase tracking-wider text-error/85">
                      обычно
                    </div>
                    <div className="flex-1 text-right">
                      <div className="font-display text-lg font-bold text-white/70 line-through decoration-error/60 decoration-2 md:text-xl">
                        {s.usualCost}
                      </div>
                      <div className="text-[11px] text-white/45">
                        {s.usualLabel}
                      </div>
                    </div>
                  </div>

                  {/* With Marafet */}
                  <div className="flex items-center gap-3 rounded-2xl bg-success/10 px-4 py-3 ring-1 ring-inset ring-success/30">
                    <div className="text-xs font-bold uppercase tracking-wider text-success">
                      с марафет
                    </div>
                    <div className="flex-1 text-right">
                      <span className="font-display text-2xl font-bold text-success md:text-3xl">
                        0 ₽
                      </span>
                      <span className="ml-2 text-xs font-semibold uppercase tracking-wider text-success/75">
                        входит в пакет
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-sm leading-relaxed text-white/65">
                    {s.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Total savings — mega block */}
        <div className="relative mt-12 overflow-hidden rounded-[40px] bg-gradient-to-br from-accent-60 via-accent-70 to-magenta-70 p-8 text-white shadow-[0_30px_80px_-20px_rgba(122,84,255,0.6)] md:mt-16 md:p-14">
          {/* Decorative orbs inside */}
          <div
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/15 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full bg-magenta-50/40 blur-3xl"
          />

          <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-center lg:gap-14">
            {/* Number + label */}
            <div className="flex flex-col gap-4">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/15 px-3 py-1 text-xs font-bold uppercase tracking-[0.2em] text-white ring-1 ring-inset ring-white/25 backdrop-blur">
                <TrendingDown className="h-3.5 w-3.5" />
                Экономия в год
              </span>
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0">
                <span className="font-display text-4xl font-bold leading-[0.95] tracking-tight md:text-5xl lg:text-6xl">
                  ~
                </span>
                <span className="font-display text-5xl font-bold leading-[0.95] tracking-tight md:text-6xl lg:text-[80px]">
                  <NumberTicker
                    value={ANNUAL_SAVINGS}
                    duration={2.4}
                    delay={0.2}
                    variant="slot"
                  />
                </span>
                <span className="font-display text-3xl font-bold leading-none md:text-4xl lg:text-5xl">
                  ₽
                </span>
              </div>
              <p className="text-base text-white/85 md:text-lg">
                в средней студии: без оплаты CRM, рекламы, администратора и
                рекрутинга
              </p>
              <p className="text-xs italic text-white/55">
                Расчётный пример при среднерыночных ценах на CRM, маркетинг,
                ФОТ администратора и рекрутинг (по данным открытых источников).
                Ваша реальная экономия зависит от размера площадки и сценария
                подключения.
              </p>
            </div>

            {/* Slogan */}
            <div className="flex flex-col gap-5 lg:border-l lg:border-white/20 lg:pl-12">
              <Sparkles className="h-8 w-8 text-white/85" strokeWidth={1.5} />
              <h3 className="font-display text-2xl font-bold leading-[1.15] tracking-tight md:text-3xl lg:text-4xl">
                Делайте пространство удобным.<br />
                Мастера и клиенты это оценят.
              </h3>
              <p className="text-sm leading-relaxed text-white/80 md:text-base">
                Всё остальное: IT, поток клиентов, бренд, поиск мастеров —
                работает на вас и для вас бесплатно. Платите только % с
                реальных записей через приложение.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
