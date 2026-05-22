import { Check, X, Percent, FileText, Banknote, ShieldCheck } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface TermItem {
  label: string;
  value: string;
  detail: string;
  good: boolean;
}

const TERMS: TermItem[] = [
  {
    label: "Подключение",
    value: "Бесплатно",
    detail: "Заявка, договор, активация в приложении",
    good: true,
  },
  {
    label: "Паушальный взнос",
    value: "Нет",
    detail: "Не берём ни рубля за вход в сеть",
    good: true,
  },
  {
    label: "Ежемесячная подписка",
    value: "Нет",
    detail: "Никаких абонплат, премиум-планов и тарифов",
    good: true,
  },
  {
    label: "Маркетинговый взнос",
    value: "Нет",
    detail: "Реклама в приложении — наша забота, не ваша",
    good: true,
  },
  {
    label: "Минимальный срок партнёрства",
    value: "Нет",
    detail: "Отключиться можно в любой момент — без штрафов",
    good: true,
  },
  {
    label: "Комиссия с записей через приложение",
    value: "По договорённости",
    detail: "Точная ставка обсуждается на созвоне — зависит от формата и города",
    good: false,
  },
];

const HOW_IT_WORKS = [
  {
    icon: Percent,
    title: "Только с реальных записей",
    description:
      "Комиссия снимается только когда клиент пришёл, услуга оказана, оплата прошла",
  },
  {
    icon: Banknote,
    title: "Автоматический расчёт",
    description:
      "Платформа удерживает % от поступления, остаток мгновенно у мастера и площадки",
  },
  {
    icon: FileText,
    title: "Прозрачная отчётность",
    description:
      "Каждая транзакция видна в партнёрском кабинете, чеки приходят на почту",
  },
  {
    icon: ShieldCheck,
    title: "Договор — лист, а не книга",
    description:
      "Стандартный шаблон на 4 страницы. Без юристов на полгода и юридических уловок",
  },
];

export function TermsSection() {
  return (
    <Section anchor="terms" tone="soft">
      <Container size="xl">
        <SectionHeading
          eyebrow="Условия партнёрства"
          title="Прозрачно как стекло"
          subtitle="Ниже — все деньги которые мы берём и не берём. Никаких звёздочек мелким шрифтом, скрытых пунктов и автопродлений"
          align="center"
        />

        {/* Таблица условий */}
        <div className="mt-12 overflow-hidden rounded-3xl bg-surface ring-1 ring-inset ring-ink-20">
          {TERMS.map((t, i) => (
            <div
              key={t.label}
              className={`grid grid-cols-1 gap-4 px-6 py-5 md:grid-cols-[1fr_auto_1.5fr] md:items-center md:gap-8 md:px-8 md:py-6 ${
                i < TERMS.length - 1 ? "border-b border-ink-20/60" : ""
              }`}
            >
              {/* Label */}
              <div className="text-base font-semibold text-ink-100 md:text-lg">
                {t.label}
              </div>

              {/* Value pill */}
              <div className="md:text-center">
                <span
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold ${
                    t.good
                      ? "bg-success/15 text-success"
                      : "bg-accent-60/15 text-accent-80"
                  }`}
                >
                  {t.good ? (
                    <Check className="h-4 w-4" strokeWidth={3} />
                  ) : (
                    <Percent className="h-4 w-4" strokeWidth={3} />
                  )}
                  {t.value}
                </span>
              </div>

              {/* Detail */}
              <div className="text-sm leading-relaxed text-ink-70">
                {t.detail}
              </div>
            </div>
          ))}
        </div>

        {/* 4 принципа */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5">
          {HOW_IT_WORKS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="flex flex-col gap-3 rounded-3xl bg-surface p-6 ring-1 ring-inset ring-accent-30/50"
              >
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-60 to-magenta-60 text-white shadow-[0_8px_20px_-6px_rgba(122,84,255,0.5)]">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3 className="font-display text-base font-bold tracking-tight text-ink-100">
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed text-ink-70">
                  {p.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Disclaimer */}
        <div className="mt-10 rounded-2xl bg-accent-10/60 p-5 text-center ring-1 ring-inset ring-accent-30/40">
          <p className="text-sm leading-relaxed text-ink-80">
            <X className="mr-1 inline h-4 w-4 text-error" strokeWidth={3} />
            Никаких эксклюзивов на район.
            <X className="mx-1 ml-3 inline h-4 w-4 text-error" strokeWidth={3} />
            Никаких обязательных закупок у нас.
            <X className="mx-1 ml-3 inline h-4 w-4 text-error" strokeWidth={3} />
            Никаких контролёров в духе франшизы.
          </p>
        </div>
      </Container>
    </Section>
  );
}
