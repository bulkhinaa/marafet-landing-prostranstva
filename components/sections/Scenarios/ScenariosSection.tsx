"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Building2, Layers, Clock, Wallet, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpotlightCard } from "@/components/ui/SpotlightCard";
import { cn } from "@/lib/cn";

type Scenario = "scratch" | "existing";

interface ScenarioData {
  title: string;
  lead: string;
  duration: string;
  yourInvest: string;
  ourSide: string[];
  yourSide: string[];
  fit: string;
  notFit: string;
}

const DATA: Record<Scenario, ScenarioData> = {
  scratch: {
    title: "Открываем с нуля",
    lead: "Помещение есть, но это голые стены. Хотите запустить бьюти-коворкинг с потоком клиентов с первого дня.",
    duration: "60–90 дней",
    yourInvest: "Ремонт + оборудование. Без паушального взноса и роялти — только % с записей.",
    ourSide: [
      "Анализ локации по геоданным Яндекса (поток, конкуренты, ЦА в радиусе)",
      "Дизайн-проект пространства и план зонирования",
      "Шаблон договора аренды, помощь с переговорами",
      "Подбор подрядчиков с льготными ценами от сети",
      "Полный брендинг: вывеска, фасад, интерьер, мерч",
      "Обучение команды (флористы, админы) и регламент сервиса",
      "Прогрев приложения в районе за 2 недели до открытия",
    ],
    yourSide: [
      "Помещение, аренда, ремонт",
      "Оборудование: кресла, лампы, стерилизация, кассы",
      "Найм мастеров и админа (мы помогаем источниками)",
      "Соблюдение наших стандартов сервиса",
    ],
    fit: "Предприниматели, которые впервые входят в бьюти-индустрию или открывают вторую точку",
    notFit: "Тем, кто хочет получить «франшизу под ключ за неделю» — мы делаем медленно и качественно",
  },
  existing: {
    title: "Подключаем действующий салон",
    lead: "У вас уже работающий салон или коворкинг. Нужен поток мастеров, клиентов и нормальный IT — без перестройки бизнеса.",
    duration: "7–14 дней",
    yourInvest:
      "На старте достаточно вывески — ~30 000 ₽ единоразово. Помещение приводите к гайду МПространства в течение года, когда пойдёт выручка. Без обязательных ремонтов и инвестиций до открытия.",
    ourSide: [
      "Подключение к платформе и заведение карточки в приложении",
      "Геопоиск выдаёт вас первыми пользователям рядом",
      "Доступ к CRM, расписанию, кассе, аналитике загрузки",
      "Push-маркетинг по нашей базе клиентов в районе",
      "Гайд по брендингу + бесплатные шаблоны для соцсетей",
      "Аккаунт-менеджер и доступ к закрытому Telegram комьюнити",
      "Изготовление и монтаж вывески МПространства (~30 000 ₽ — единственные обязательные вложения)",
      "Пошаговый план приведения интерьера к гайду — на год, по мере роста выручки",
    ],
    yourSide: [
      "Помещение работает как раньше — никаких ремонтов до открытия",
      "Принимаете мастеров и клиентов из приложения",
      "Соблюдаете базовые стандарты сервиса",
      "Передаёте платформе % с записей, прошедших через приложение",
      "Постепенно приводите интерьер к гайду МПространства (за год, не разом)",
    ],
    fit: "Действующие салоны, бьюти-коворкинги и студии любого размера и оформления",
    notFit: "Местам, где работают мастера в серую без чеков — нужна легализация перед подключением",
  },
};

const TABS: { id: Scenario; label: string; icon: typeof Building2 }[] = [
  { id: "scratch", label: "С нуля", icon: Building2 },
  { id: "existing", label: "На действующей площадке", icon: Layers },
];

export function ScenariosSection() {
  const [active, setActive] = useState<Scenario>("scratch");
  const d = DATA[active];

  return (
    <Section anchor="scenarios" tone="light">
      <Container size="xl">
        <SectionHeading
          eyebrow="Два сценария подключения"
          title="Откуда вы стартуете"
          subtitle="Подключение бесплатное в обоих случаях. Отличается только объём работ и срок до первого клиента"
          align="center"
        />

        {/* Tabs */}
        <div className="mt-12 flex justify-center">
          <div className="inline-flex flex-wrap justify-center gap-1 rounded-full bg-accent-10 p-1 ring-1 ring-inset ring-accent-30">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActive(tab.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-colors duration-200",
                    active === tab.id
                      ? "bg-ink-100 text-white"
                      : "text-ink-70 hover:text-ink-100"
                  )}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Контент */}
        <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto mt-12 grid max-w-2xl gap-6"
        >
          {/* LEFT — мета (срок + инвестиции + кому/некому) */}
          <div className="flex flex-col gap-4">
            <div className="rounded-3xl bg-gradient-to-br from-accent-60 to-magenta-60 p-7 text-white shadow-[0_20px_60px_-20px_rgba(122,84,255,0.45)]">
              <h3 className="font-display text-3xl font-bold leading-tight md:text-4xl">
                {d.title}
              </h3>
              <p className="mt-3 text-white/85">{d.lead}</p>
            </div>

            <div className="rounded-3xl bg-surface p-6 ring-1 ring-inset ring-ink-20">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-10 text-accent-60">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-60">
                  Срок до первого клиента
                </div>
              </div>
              <div className="mt-3 font-display text-3xl font-bold text-ink-100">
                {d.duration}
              </div>
            </div>

            <div className="rounded-3xl bg-surface p-6 ring-1 ring-inset ring-ink-20">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent-10 text-accent-60">
                  <Wallet className="h-5 w-5" />
                </span>
                <div className="text-xs font-semibold uppercase tracking-wider text-ink-60">
                  Инвестиции партнёра
                </div>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-ink-80">
                {d.yourInvest}
              </p>
            </div>

            <div className="rounded-3xl bg-success/10 p-6 ring-1 ring-inset ring-success/30">
              <div className="text-xs font-bold uppercase tracking-wider text-success">
                Кому подойдёт
              </div>
              <p className="mt-2 text-sm leading-relaxed text-ink-80">{d.fit}</p>
            </div>
          </div>
        </motion.div>
        </AnimatePresence>

        <p className="mt-10 text-center text-sm text-ink-60">
          Не уверены, какой сценарий ваш? На созвоне с аккаунт-менеджером разберёмся за 15 минут
        </p>
      </Container>
    </Section>
  );
}
