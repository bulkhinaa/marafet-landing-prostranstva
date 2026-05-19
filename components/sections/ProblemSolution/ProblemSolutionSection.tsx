"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { cn } from "@/lib/cn";

type Audience = "coworking" | "salon";

interface Pair {
  pain: string;
  solution: string;
}

const DATA: Record<Audience, Pair[]> = {
  coworking: [
    {
      pain: "Мастера приходят на месяц-два и уходят с базой клиентов",
      solution: "Мастера держатся за вас, потому что Марафет приводит им клиентов в ваш коворкинг",
    },
    {
      pain: "Маркетинг и SMM съедают четверть выручки",
      solution: "Геопоиск, рейтинги и push-уведомления приложения работают как ваш маркетинг 24/7",
    },
    {
      pain: "Нет нормального инструмента записи — каждый мастер ведёт свой блокнот",
      solution: "Встроенная CRM, расписание, онлайн-оплата и аналитика заполняемости кресел",
    },
    {
      pain: "Сложно понять, что окупается, а что — нет",
      solution: "Аналитика по каждому креслу: загрузка, выручка, средний чек, повторные клиенты",
    },
  ],
  salon: [
    {
      pain: "Пустые кресла в будние дни и сезонные провалы",
      solution: "Поток самозанятых мастеров, готовых платить за смену в кресле",
    },
    {
      pain: "Лучшие мастера уходят к себе домой или конкурентам",
      solution: "Гибридная модель: они работают у вас, но получают клиентов через Марафет",
    },
    {
      pain: "Растущая стоимость привлечения клиентов из соцсетей",
      solution: "Бесплатный поток входящих заявок от приложения с 180 000+ клиентов",
    },
    {
      pain: "Сложная бухгалтерия по самозанятым и налоговые риски",
      solution: "Платформа оформляет чеки и взаиморасчёты — вы не нанимаете мастеров напрямую",
    },
  ],
};

const TABS: { id: Audience; label: string }[] = [
  { id: "coworking", label: "У меня коворкинг" },
  { id: "salon", label: "У меня салон" },
];

export function ProblemSolutionSection() {
  const [active, setActive] = useState<Audience>("coworking");
  const items = DATA[active];

  return (
    <Section anchor="problem-solution" tone="light">
      <Container size="xl">
        <SectionHeading
          eyebrow="Зачем это вам"
          title="Что меняется, когда подключаетесь к Марафет"
          subtitle="Сравните привычные боли с тем, как их решает экосистема"
          align="center"
        />

        {/* Таб-переключатель */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex rounded-full bg-accent-10 p-1 ring-1 ring-inset ring-accent-30">
            {TABS.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActive(tab.id)}
                className={cn(
                  "rounded-full px-6 py-2.5 text-sm font-semibold transition-colors duration-200",
                  active === tab.id
                    ? "bg-ink-100 text-white"
                    : "text-ink-70 hover:text-ink-100"
                )}
                aria-pressed={active === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Сетка пар */}
        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-2 md:gap-x-12 md:gap-y-8">
          {items.map((item, i) => (
            <div
              key={`${active}-${i}`}
              className="grid grid-cols-1 gap-3 rounded-3xl bg-accent-10/60 p-6 md:grid-cols-[1fr_auto_1fr] md:items-center md:gap-6 md:bg-transparent md:p-0"
            >
              <div className="flex items-start gap-3 md:gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-error/15 text-error">
                  <X className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <p className="text-base text-ink-70 line-through decoration-error/40 decoration-2 md:text-lg">
                  {item.pain}
                </p>
              </div>
              <div
                aria-hidden
                className="hidden h-px w-12 bg-gradient-to-r from-error/30 to-success/30 md:block"
              />
              <div className="flex items-start gap-3 md:gap-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-success/15 text-success">
                  <Check className="h-4 w-4" strokeWidth={2.5} />
                </span>
                <p className="text-base font-medium text-ink-100 md:text-lg">
                  {item.solution}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
