import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";

export function SpaceBookCTA() {
  return (
    <Section anchor="book-cta" tone="dark" className="!py-24 md:!py-32">
      <Container size="lg">
        <div className="relative isolate flex flex-col items-center gap-8 text-center">
          {/* Decoration */}
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -z-10 h-96 w-96 -translate-x-1/2 rounded-full opacity-30"
            style={{
              background:
                "radial-gradient(circle, #7A54FF 0%, transparent 70%)",
            }}
          />

          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/85 ring-1 ring-inset ring-white/15">
            <span className="h-2 w-2 rounded-full bg-success animate-pulse" />
            Запись через приложение — за 30 секунд
          </span>

          <h2 className="font-display max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Запишитесь в Марафет на Новочерёмушкинской
          </h2>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
            Откройте приложение Марафет, выберите мастера, услугу и удобный слот.
            Оплата картой в приложении, чек придёт на почту.
          </p>

          {/* Кнопки скачивания приложения скрыты по запросу — не отображаются.
              Чтобы вернуть, раскомментируйте блок ниже.
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href="https://apps.apple.com/ru/app/id6479944842"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-base font-semibold text-ink-100 transition-transform hover:scale-[1.02]"
            >
              <span aria-hidden className="text-2xl"></span>
              App Store
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=ru.topsolution.marafet"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 items-center gap-3 rounded-full bg-white px-7 text-base font-semibold text-ink-100 transition-transform hover:scale-[1.02]"
            >
              <span aria-hidden className="text-2xl">▶</span>
              Google Play
            </a>
          </div>

          <p className="text-xs uppercase tracking-[0.2em] text-white/40">
            Marafet · v1.0 · iOS / Android
          </p>
          */}
        </div>
      </Container>
    </Section>
  );
}
