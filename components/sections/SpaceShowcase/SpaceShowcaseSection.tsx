import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Star, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { assetPath } from "@/lib/paths";

/**
 * Промо-блок на главном лендинге: «Реальный кейс — наш флагман».
 * Ведёт на /spaces/marafet-studio.
 * Использует настоящие фото фасада из public/spaces/marafet-studio/.
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
          className="group relative mt-12 grid overflow-hidden rounded-[40px] bg-ink-100 ring-1 ring-inset ring-white/10 shadow-[0_40px_100px_-30px_rgba(122,84,255,0.5)] transition-transform duration-300 hover:scale-[1.005] lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]"
        >
          {/* LEFT — текст */}
          <div className="relative z-10 flex flex-col gap-6 p-8 text-white md:p-12 lg:p-14">
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

          {/* RIGHT — реальные фото */}
          <div className="relative min-h-[420px] overflow-hidden md:min-h-[560px]">
            {/* Главное фото — на всю правую колонку */}
            <Image
              src={assetPath("/spaces/marafet-studio/facade.webp")}
              alt="Марафет на Новочерёмушкинской — флагманская студия"
              fill
              sizes="(min-width: 1024px) 720px, 100vw"
              unoptimized
              className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
              priority
            />

            {/* Subtle dark gradient слева для перехода в текстовую часть */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 lg:bg-gradient-to-r lg:from-ink-100 lg:via-transparent lg:to-transparent"
            />

            {/* Декоративный glow в правом нижнем */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-20 -right-20 h-72 w-72 rounded-full opacity-40 blur-3xl"
              style={{
                background:
                  "radial-gradient(circle, rgba(171,92,233,0.7) 0%, transparent 70%)",
              }}
            />

            {/* Мини-галерея 3 эскизов поверх фото снизу */}
            <div className="absolute inset-x-5 bottom-5 hidden gap-3 sm:flex">
              {[
                "entrance-1.webp",
                "entrance-2.webp",
                "entrance-3.webp",
              ].map((f, i) => (
                <div
                  key={f}
                  className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl ring-2 ring-white/40 backdrop-blur-sm"
                >
                  <Image
                    src={assetPath(`/spaces/marafet-studio/${f}`)}
                    alt={`Ракурс ${i + 1}`}
                    fill
                    sizes="64px"
                    unoptimized
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </Link>
      </Container>
    </Section>
  );
}
