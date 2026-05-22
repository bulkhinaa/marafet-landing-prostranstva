import Link from "next/link";
import { ArrowUpRight, Star, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

/**
 * Промо-блок на главном лендинге: "посмотрите как работает на нашей студии".
 * Ведёт на /spaces/marafet-studio.
 */
export function SpaceShowcaseSection() {
  return (
    <Section anchor="showcase" tone="light">
      <Container size="xl">
        <SectionHeading
          eyebrow="Реальный кейс"
          title="Наш флагман — Марафет на Новочерёмушкинской"
          subtitle="Здесь обкатываются стандарты сервиса, дизайн-проект и IT-инструменты. То же самое получит ваш коворкинг или салон при подключении"
          align="center"
        />

        <Link
          href="/spaces/marafet-studio"
          className="group relative mt-12 grid overflow-hidden rounded-[40px] bg-ink-100 ring-1 ring-inset ring-white/10 transition-transform duration-300 hover:scale-[1.01] md:grid-cols-[1.1fr_1fr]"
        >
          {/* LEFT — текст */}
          <div className="relative z-10 flex flex-col gap-6 p-8 text-white md:p-12">
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/15 px-3 py-1 text-xs font-semibold text-success">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Открыто сейчас
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/85 ring-1 ring-inset ring-white/15">
                🏆 Хорошее место 2026
              </span>
            </div>

            <h3 className="font-display text-3xl font-bold leading-[1.05] tracking-tight md:text-4xl lg:text-5xl">
              Марафет<br />
              <span className="bg-gradient-to-br from-accent-40 via-accent-50 to-magenta-50 bg-clip-text text-transparent">
                на Новочерёмушкинской
              </span>
            </h3>

            <p className="max-w-md text-base leading-relaxed text-white/70 md:text-lg">
              Ногтевая студия. Маникюр + Luxio от 2 700 ₽. Идеальное место,
              которое мы построили сами — и теперь делимся опытом с
              партнёрами сети.
            </p>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/85">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4 fill-warning text-warning" />
                <span className="font-bold">5,0</span> / 875 оценок
              </span>
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="h-4 w-4 text-accent-40" />
                Новочерёмушкинская, 17
              </span>
              <span className="text-white/60">·</span>
              <span className="text-white/85">
                <span className="font-bold text-white">799</span> отзывов
              </span>
            </div>

            <span className="mt-2 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-ink-100 transition-transform duration-300 group-hover:translate-x-1">
              Посмотреть страницу студии
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>

          {/* RIGHT — визуал */}
          <div className="relative min-h-[360px] overflow-hidden md:min-h-[480px]">
            {/* Фасад mockup — компактная версия */}
            <div className="absolute inset-0 bg-ink-90">
              <div
                aria-hidden
                className="absolute inset-0"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 64px)",
                }}
              />
              {/* Фиолетовая подсветка снизу */}
              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-1/3"
                style={{
                  background:
                    "linear-gradient(to top, rgba(171,92,233,0.6), rgba(122,84,255,0.3), transparent)",
                }}
              />
              {/* Лого "М" */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className="flex h-32 w-32 items-center justify-center rounded-3xl bg-white md:h-40 md:w-40"
                  style={{
                    boxShadow:
                      "0 0 60px rgba(122,84,255,0.7), 0 0 140px rgba(122,84,255,0.4)",
                  }}
                >
                  <span
                    className="font-display text-7xl font-bold leading-none md:text-8xl"
                    style={{
                      background:
                        "linear-gradient(135deg, #7A54FF 0%, #AB5CE9 100%)",
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    М
                  </span>
                </div>
              </div>
              {/* Окошки */}
              <div className="absolute inset-x-8 bottom-8 grid grid-cols-2 gap-3">
                <div
                  className="aspect-square rounded-xl"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,220,180,0.18) 0%, rgba(255,220,180,0.05) 100%)",
                    boxShadow: "inset 0 0 30px rgba(255,220,180,0.2)",
                  }}
                />
                <div
                  className="aspect-square rounded-xl"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,220,180,0.18) 0%, rgba(255,220,180,0.05) 100%)",
                    boxShadow: "inset 0 0 30px rgba(255,220,180,0.2)",
                  }}
                />
              </div>
            </div>
          </div>
        </Link>
      </Container>
    </Section>
  );
}
