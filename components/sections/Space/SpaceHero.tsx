import { MapPin, Clock, Star, Phone, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { BorderBeamButton } from "@/components/ui/BorderBeamButton";
import { MagneticButton } from "@/components/ui/MagneticButton";

const YANDEX_MAP_URL = "https://yandex.com/maps/-/CPswj4jV";

export function SpaceHero() {
  return (
    <section className="relative isolate overflow-hidden pt-24 pb-16 md:pt-28 md:pb-20">
      {/* Soft bg */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 30% 0%, rgba(122,84,255,0.15), transparent 60%), radial-gradient(ellipse 60% 45% at 90% 100%, rgba(171,92,233,0.12), transparent 65%), linear-gradient(180deg, #F8F6FF 0%, #FFFFFF 100%)",
        }}
      />

      <Container size="xl">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-12 lg:items-center">
          {/* LEFT — Информация */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Breadcrumb */}
            <a
              href="/marafet-landing-prostranstva/"
              className="inline-flex w-fit items-center gap-1 text-sm text-ink-60 hover:text-accent-60 transition-colors"
            >
              ← Все Марафет Пространства
            </a>

            {/* Status badges */}
            <div className="flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-success/10 px-3 py-1 text-sm font-semibold text-success">
                <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
                Открыто до 22:00
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-10 px-3 py-1 text-sm font-medium text-accent-80 ring-1 ring-inset ring-accent-30">
                🏆 Хорошее место 2026
              </span>
            </div>

            {/* H1 */}
            <h1 className="font-display text-balance text-5xl font-bold leading-[1.02] tracking-tight text-ink-100 md:text-6xl lg:text-7xl">
              Марафет{" "}
              <span className="bg-gradient-to-br from-accent-60 to-magenta-60 bg-clip-text text-transparent">
                на Новочерёмушкинской
              </span>
            </h1>

            <p className="text-lg leading-relaxed text-ink-70 md:text-xl">
              Флагманский Марафет — ногтевая студия Москвы. Здесь работают
              лучшие мастера платформы, идёт обкатка стандартов сервиса и
              готовится дизайн-проект сети МПространств.
            </p>

            {/* Rating + stats inline */}
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 fill-warning text-warning"
                      strokeWidth={1.5}
                    />
                  ))}
                </div>
                <span className="font-display text-xl font-bold text-ink-100">
                  5,0
                </span>
                <span className="text-sm text-ink-60">/ 875 оценок</span>
              </div>
              <div className="text-sm text-ink-60">
                <span className="font-semibold text-ink-100">799</span>{" "}
                отзывов на Яндекс.Картах
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#book-cta"
                className="group relative isolate inline-flex h-14 items-center justify-center overflow-hidden rounded-full transition-transform duration-200 ease-out active:scale-[0.97]"
              >
                <span
                  aria-hidden
                  className="absolute inset-0 -z-10 animate-[beamSpin_4s_linear_infinite] will-change-transform"
                  style={{
                    background:
                      "conic-gradient(from 0deg, transparent 0deg, #FFFFFF 30deg, #CABBFF 90deg, transparent 120deg, transparent 360deg)",
                  }}
                />
                <span className="relative inline-flex h-[calc(100%-3px)] items-center gap-2.5 rounded-full gradient-brand px-[calc(2rem-1.5px)] text-base font-semibold text-white">
                  Записаться через приложение
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </a>
              <a
                href={YANDEX_MAP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-14 items-center gap-2 rounded-full bg-accent-10 px-7 text-base font-semibold text-accent-100 ring-1 ring-inset ring-accent-30 transition-colors hover:bg-accent-20"
              >
                Открыть в Яндекс.Картах
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>

            {/* Quick info */}
            <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div className="flex items-start gap-3 rounded-2xl bg-surface p-4 ring-1 ring-inset ring-ink-20">
                <MapPin className="h-5 w-5 shrink-0 text-accent-60" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-60">
                    Адрес
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-ink-100">
                    Москва, Новочерёмушкинская ул., 17
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-3 rounded-2xl bg-surface p-4 ring-1 ring-inset ring-ink-20">
                <Clock className="h-5 w-5 shrink-0 text-accent-60" />
                <div>
                  <div className="text-xs font-semibold uppercase tracking-wide text-ink-60">
                    Часы работы
                  </div>
                  <div className="mt-0.5 text-sm font-medium text-ink-100">
                    Ежедневно · до 22:00
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — Студия (фото или фасад-mockup) */}
          <SpaceFacade />
        </div>
      </Container>
    </section>
  );
}

/**
 * Mockup фасада студии в стиле присланной фотографии:
 * чёрный фасад, неоновая вывеска "М", "СТУДИЯ МАНИКЮРА", фиолетовая подсветка.
 * Если есть реальное фото — заменить на <Image src="/spaces/marafet-studio/facade.jpg" />
 */
function SpaceFacade() {
  return (
    <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[36px] bg-ink-100 shadow-[0_30px_80px_-20px_rgba(122,84,255,0.45)] lg:aspect-[5/6]">
      {/* Текстура кирпича */}
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 32px), repeating-linear-gradient(90deg, rgba(255,255,255,0.04) 0px, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 64px)",
        }}
      />

      {/* Фиолетовая неоновая подсветка снизу */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background:
            "linear-gradient(to top, rgba(171,92,233,0.55), rgba(122,84,255,0.25), transparent)",
        }}
      />

      {/* Вывеска */}
      <div className="absolute inset-x-0 top-[18%] flex flex-col items-center gap-4 px-6">
        <div className="flex items-center gap-4 text-white">
          <span className="text-2xl font-bold tracking-wider md:text-3xl">
            СТУДИЯ
          </span>
          {/* Логотип "М" с glow */}
          <div
            className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white md:h-24 md:w-24"
            style={{
              boxShadow:
                "0 0 40px rgba(122,84,255,0.7), 0 0 90px rgba(122,84,255,0.4)",
            }}
          >
            <span
              className="font-display text-5xl font-bold leading-none md:text-6xl"
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
          <span className="text-2xl font-bold tracking-wider md:text-3xl text-white">
            МАНИКЮРА
          </span>
        </div>
      </div>

      {/* "Витрина" — большие окна с тёплым светом */}
      <div className="absolute inset-x-6 bottom-12 grid grid-cols-2 gap-4 md:inset-x-8 md:bottom-16">
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

      {/* Подсказка о фото */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-white/60 backdrop-blur">
        Mockup · добавьте реальное фото в public/spaces
      </div>
    </div>
  );
}
