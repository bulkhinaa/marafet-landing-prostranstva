import Image from "next/image";
import { MapPin, Clock, Star, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { assetPath } from "@/lib/paths";

const YANDEX_MAP_URL = "https://yandex.com/maps/-/CPswj4jV";

const GALLERY = [
  {
    src: assetPath("/spaces/marafet-studio/entrance-1.webp"),
    alt: "Вход в студию Марафет — фасадная вывеска",
  },
  {
    src: assetPath("/spaces/marafet-studio/entrance-2.webp"),
    alt: "Витрина и парадная Марафет",
  },
  {
    src: assetPath("/spaces/marafet-studio/entrance-3.webp"),
    alt: "Деталь логотипа Марафет на фасаде",
  },
];

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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-14 lg:items-center">
          {/* LEFT — Информация */}
          <div className="flex flex-col gap-6 md:gap-8">
            {/* Breadcrumb */}
            <a
              href={assetPath("/")}
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
            <h1 className="font-display text-balance text-5xl font-bold leading-[1.02] tracking-tight text-ink-100 md:text-6xl lg:text-[64px] break-words hyphens-auto">
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

            {/* Rating + stats */}
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

          {/* RIGHT — Реальное фото фасада + галерея */}
          <SpaceFacade />
        </div>
      </Container>
    </section>
  );
}

function SpaceFacade() {
  return (
    <div className="flex flex-col gap-3">
      {/* Главное фото — фасад */}
      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[36px] bg-ink-100 shadow-[0_30px_80px_-20px_rgba(122,84,255,0.45)] ring-1 ring-inset ring-ink-100/10">
        <Image
          src={assetPath("/spaces/marafet-studio/facade.webp")}
          alt="Студия маникюра Марафет — фасадный вид"
          fill
          sizes="(min-width: 1024px) 500px, 100vw"
          priority
          unoptimized
          className="object-cover"
        />
        {/* Лёгкий overlay для глубины */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.4) 100%)",
          }}
        />
        {/* Подпись поверх фото */}
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between">
          <div className="rounded-full bg-white/12 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white backdrop-blur-md ring-1 ring-inset ring-white/15">
            Новочерёмушкинская, 17 · Москва
          </div>
        </div>
      </div>

      {/* Галерея — 3 мини-фото входа */}
      <div className="grid grid-cols-3 gap-3">
        {GALLERY.map((g, i) => (
          <div
            key={i}
            className="relative aspect-square overflow-hidden rounded-2xl bg-ink-100 ring-1 ring-inset ring-ink-100/10"
          >
            <Image
              src={g.src}
              alt={g.alt}
              fill
              sizes="(min-width: 1024px) 165px, 33vw"
              unoptimized
              className="object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
