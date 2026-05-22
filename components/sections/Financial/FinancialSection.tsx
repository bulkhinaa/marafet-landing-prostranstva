"use client";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { ShimmerText } from "@/components/ui/ShimmerText";

interface Metric {
  label: string;
  before: string;
  after: string;
  delta: string;
  direction: "up" | "down";
  reason: string;
}

const METRICS: Metric[] = [
  {
    label: "Загрузка кресел",
    before: "~40%",
    after: "до 75%",
    delta: "×1.9",
    direction: "up",
    reason:
      "Мастера из приложения распределяются по слотам в реальном времени; геопоиск даёт постоянный приток новых клиентов",
  },
  {
    label: "Стоимость привлечения клиента",
    before: "1 500 ₽",
    after: "350 ₽",
    delta: "−77%",
    direction: "down",
    reason:
      "Приложение приводит клиентов через гео-поиск, рейтинги и push-уведомления без вложений с вашей стороны",
  },
  {
    label: "Доля маркетинга в выручке",
    before: "22%",
    after: "4%",
    delta: "−18 п.п.",
    direction: "down",
    reason:
      "Платформа берёт на себя SMM, гео-сервисы, ретеншн и push — остаётся только локальная активность",
  },
  {
    label: "Текучка мастеров (год)",
    before: "60%",
    after: "20%",
    delta: "×3",
    direction: "down",
    reason:
      "Мастеру в коворкинге Марафет приходит стабильный поток клиентов — нет повода уходить с базой",
  },
  {
    label: "Средний чек",
    before: "2 200 ₽",
    after: "2 900 ₽",
    delta: "+32%",
    direction: "up",
    reason:
      "Запись в приложении показывает мастеру апсейлы (дизайн, уход) и допы — клиент чаще берёт пакет",
  },
  {
    label: "Возврат клиента в течение 60 дней",
    before: "28%",
    after: "61%",
    delta: "×2.2",
    direction: "up",
    reason:
      "Push-напоминание о повторной записи + удобный rebook одной кнопкой через приложение",
  },
];

export function FinancialSection() {
  return (
    <Section anchor="financial" tone="dark">
      <Container size="xl">
        <SectionHeading
          eyebrow="Финансовая модель"
          title={
            <>
              Что меняется в цифрах<br />
              <ShimmerText
                colors={["#CABBFF", "#AB5CE9", "#FF7B9C", "#FFD78A", "#CABBFF"]}
                duration={4}
                className="font-bold"
              >
                после подключения
              </ShimmerText>
            </>
          }
          subtitle="Усреднённые показатели по партнёрам сети. На вашей площадке цифры могут отличаться — рассчитываем точную модель на созвоне"
          align="center"
          className="[&_h2]:!text-white [&_p]:!text-white/70"
        />

        <div className="mt-14 grid gap-3 md:gap-4 lg:grid-cols-2">
          {METRICS.map((m) => {
            const isPositive = m.direction === "up";
            const Arrow = isPositive ? TrendingUp : TrendingDown;
            return (
              <SpotlightCard
                key={m.label}
                borderRadius={24}
                spotlightColor={isPositive ? "rgba(24, 179, 138, 0.15)" : "rgba(122, 84, 255, 0.15)"}
                className="group p-6 md:p-8"
              >
                <div className="mb-5 flex items-center justify-between gap-4">
                  <div className="text-xs font-semibold uppercase tracking-wider text-white/55">
                    {m.label}
                  </div>
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-bold ${
                      isPositive
                        ? "bg-success/15 text-success"
                        : "bg-accent-60/20 text-accent-30"
                    }`}
                  >
                    <Arrow className="h-3 w-3" strokeWidth={3} />
                    {m.delta}
                  </span>
                </div>

                <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-4">
                  {/* Before */}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-white/40">
                      было
                    </span>
                    <span className="mt-1 font-display text-3xl font-bold tracking-tight text-white/55 line-through decoration-white/20 decoration-2 md:text-4xl tabular-nums">
                      {m.before}
                    </span>
                  </div>

                  <Minus className="h-5 w-5 text-white/30" strokeWidth={3} />

                  {/* After */}
                  <div className="flex flex-col">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-accent-40">
                      стало
                    </span>
                    <span className="mt-1 font-display text-3xl font-bold tracking-tight text-white md:text-4xl tabular-nums">
                      {m.after}
                    </span>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-relaxed text-white/65">
                  {m.reason}
                </p>
              </SpotlightCard>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-2xl bg-white/[0.04] p-5 ring-1 ring-inset ring-white/10 text-center">
          <p className="text-xs leading-relaxed text-white/60">
            * Цифры — оценочные на основе агрегированных данных партнёров сети
            и нашей флагманской студии. На конкретной площадке показатели зависят
            от локации, помещения, состава мастеров и сезона. Точную модель под
            ваш объект считаем на 30-минутном созвоне.
          </p>
        </div>
      </Container>
    </Section>
  );
}
