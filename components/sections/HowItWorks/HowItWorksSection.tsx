import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
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
      "По вашему выбору — лёгкое оформление под МПространство (стикеры, наклейки, мерч) или полный фирменный ребрендинг.",
    duration: "опционально",
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

export function HowItWorksSection() {
  return (
    <Section anchor="how-it-works" tone="soft">
      <Container size="xl">
        <SectionHeading
          eyebrow="Как это устроено"
          title="От первой заявки до первого клиента — 4 шага"
          subtitle="Без длинных тендеров, юристов на полгода и неподъёмных паушальных взносов"
          align="center"
        />

        {/* Шаги */}
        <ol className="mt-16 grid gap-4 md:grid-cols-2 md:gap-6 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <li
                key={step.number}
                className="group relative flex flex-col gap-4 rounded-3xl bg-surface p-6 ring-1 ring-inset ring-ink-20 transition-colors hover:ring-accent-40 md:p-7"
              >
                {/* Number + icon */}
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-bold text-accent-60/40">
                    {step.number}
                  </span>
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-10 text-accent-60">
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  </span>
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

                {/* Соединитель (только десктоп, между карточками) */}
                {i < STEPS.length - 1 && (
                  <div
                    aria-hidden
                    className="absolute right-[-12px] top-1/2 hidden -translate-y-1/2 lg:block"
                  >
                    <svg
                      width="24"
                      height="12"
                      viewBox="0 0 24 12"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 6h22m0 0l-5-5m5 5l-5 5"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="text-accent-40"
                      />
                    </svg>
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      </Container>
    </Section>
  );
}
