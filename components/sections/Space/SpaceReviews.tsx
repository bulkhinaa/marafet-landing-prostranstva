import { Star, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

const YANDEX_BUSINESS_ID = "208648073488";
const YANDEX_MAP_URL = "https://yandex.com/maps/-/CPswj4jV";
const YANDEX_REVIEWS_WIDGET = `https://yandex.ru/maps-reviews-widget/${YANDEX_BUSINESS_ID}?source=widget`;

/**
 * Отзывы — официальный Yandex Reviews Widget (iframe).
 * Это публичный embed Яндекс.Карт: реальные отзывы организации,
 * обновляются автоматически, без API-ключа и без капчи для зрителя.
 * https://yandex.ru/dev/maps/widget/doc/maps/widget/
 */
export function SpaceReviews() {
  return (
    <Section anchor="reviews" tone="light">
      <Container size="xl">
        <SectionHeading
          eyebrow="Отзывы клиентов"
          title="5,0 из 5 на Яндекс.Картах"
          subtitle="875 оценок и 799 отзывов — реальный поток подгружается прямо из Яндекс.Карт ниже"
          align="center"
        />

        {/* Краткое summary */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3 md:gap-5">
          <div className="rounded-3xl bg-accent-10 p-6 ring-1 ring-inset ring-accent-30/40">
            <div className="flex items-center gap-2">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="h-5 w-5 fill-warning text-warning"
                  strokeWidth={1.5}
                />
              ))}
            </div>
            <div className="mt-3 font-display text-4xl font-bold tracking-tight text-ink-100">
              5,0
            </div>
            <div className="mt-1 text-sm text-ink-60">
              средний балл
            </div>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-accent-60 to-magenta-60 p-6 text-white shadow-[0_20px_60px_-20px_rgba(122,84,255,0.5)]">
            <div className="text-sm font-semibold uppercase tracking-wider text-white/75">
              Хорошее место
            </div>
            <div className="mt-3 font-display text-4xl font-bold tracking-tight">
              2026
            </div>
            <div className="mt-1 text-sm text-white/85">
              знак Яндекса за стабильное качество
            </div>
          </div>
          <div className="rounded-3xl bg-ink-100 p-6 text-white">
            <div className="text-sm font-semibold uppercase tracking-wider text-accent-40">
              Отзывов
            </div>
            <div className="mt-3 font-display text-4xl font-bold tracking-tight tabular-nums">
              799
            </div>
            <div className="mt-1 text-sm text-white/70">из 875 оценок</div>
          </div>
        </div>

        {/* Сам Yandex Reviews Widget */}
        <div className="mt-10 overflow-hidden rounded-3xl ring-1 ring-inset ring-ink-20 bg-surface">
          <iframe
            src={YANDEX_REVIEWS_WIDGET}
            title="Отзывы о Марафет на Яндекс.Картах"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[800px] w-full border-0"
          />
        </div>

        <div className="mt-8 text-center">
          <a
            href={YANDEX_MAP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink-100 px-6 text-sm font-semibold text-white transition-colors hover:bg-ink-90"
          >
            Открыть карточку на Яндекс.Картах
            <ArrowUpRight className="h-4 w-4" />
          </a>
        </div>
      </Container>
    </Section>
  );
}
