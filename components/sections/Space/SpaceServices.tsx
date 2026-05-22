import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Service {
  title: string;
  description: string;
  priceFrom: number;
  highlight?: boolean;
}

const SERVICES: Service[] = [
  {
    title: "Маникюр + Luxio",
    description: "Аппаратный маникюр + покрытие гель-лак Luxio (LCN)",
    priceFrom: 2700,
    highlight: true,
  },
  {
    title: "Аппаратный маникюр",
    description: "Без покрытия, с уходом за кутикулой",
    priceFrom: 1800,
  },
  {
    title: "Маникюр + классический гель-лак",
    description: "Аппаратный маникюр + покрытие любого бренда из палитры",
    priceFrom: 2400,
  },
  {
    title: "Покрытие на свои ногти",
    description: "Только покрытие, если маникюр уже сделан",
    priceFrom: 1500,
  },
  {
    title: "Снятие покрытия",
    description: "Аккуратное снятие предыдущего гель-лака",
    priceFrom: 500,
  },
  {
    title: "Дизайн (за 1 ноготь)",
    description: "Френч, омбре, втирка, стразы, ручная роспись",
    priceFrom: 100,
  },
];

export function SpaceServices() {
  return (
    <Section anchor="services" tone="soft">
      <Container size="xl">
        <SectionHeading
          eyebrow="Услуги и цены"
          title="Что можно записать"
          subtitle="Базовые услуги студии. Точная стоимость зависит от мастера и сложности — финальная цена показывается в приложении при выборе слота"
          align="center"
        />

        <div className="mt-12 grid gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {SERVICES.map((service) => (
            <div
              key={service.title}
              className={`relative flex flex-col gap-3 rounded-3xl p-6 transition-colors md:p-7 ${
                service.highlight
                  ? "bg-gradient-to-br from-accent-60 to-magenta-60 text-white shadow-[0_20px_60px_-20px_rgba(122,84,255,0.5)]"
                  : "bg-surface ring-1 ring-inset ring-ink-20 hover:ring-accent-40"
              }`}
            >
              {service.highlight && (
                <span className="absolute right-4 top-4 rounded-full bg-white/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                  хит
                </span>
              )}
              <h3
                className={`font-display text-xl font-bold tracking-tight ${
                  service.highlight ? "text-white" : "text-ink-100"
                }`}
              >
                {service.title}
              </h3>
              <p
                className={`grow text-sm leading-relaxed ${
                  service.highlight ? "text-white/80" : "text-ink-70"
                }`}
              >
                {service.description}
              </p>
              <div className="mt-2 flex items-baseline gap-2">
                <span
                  className={`text-xs font-medium uppercase tracking-wide ${
                    service.highlight ? "text-white/70" : "text-ink-60"
                  }`}
                >
                  от
                </span>
                <span
                  className={`font-display text-3xl font-bold tabular-nums ${
                    service.highlight ? "text-white" : "text-ink-100"
                  }`}
                >
                  {service.priceFrom.toLocaleString("ru-RU")}
                </span>
                <span
                  className={`text-lg font-semibold ${
                    service.highlight ? "text-white/85" : "text-accent-60"
                  }`}
                >
                  ₽
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-ink-60">
          Полный прейскурант и состав услуг — в приложении Марафет
        </p>
      </Container>
    </Section>
  );
}
