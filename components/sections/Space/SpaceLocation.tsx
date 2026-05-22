import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { MapPin, Train, Car, ArrowUpRight } from "lucide-react";

const YANDEX_MAP_URL = "https://yandex.com/maps/-/CPswj4jV";
// Yandex Maps embed для адреса Новочерёмушкинская 17
const YANDEX_EMBED_URL =
  "https://yandex.com/map-widget/v1/?ll=37.583885%2C55.683498&z=16&pt=37.583885%2C55.683498%2Cpm2rdm";

export function SpaceLocation() {
  return (
    <Section anchor="location" tone="soft">
      <Container size="xl">
        <SectionHeading
          eyebrow="Как добраться"
          title="Новочерёмушкинская улица, 17"
          subtitle="Юго-Запад Москвы, район Академический. 7 минут пешком от метро «Профсоюзная», 8 минут от «Академической»"
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1fr_1.4fr] lg:gap-8">
          {/* Левый блок — детали маршрута */}
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-4 rounded-3xl bg-surface p-6 ring-1 ring-inset ring-ink-20">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-10 text-accent-60">
                <Train className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-100">
                  Метро
                </h3>
                <ul className="mt-2 flex flex-col gap-1 text-sm text-ink-70">
                  <li>
                    <span className="inline-block h-2 w-2 rounded-full bg-[#F58220] mr-2 align-middle" />
                    Профсоюзная — 7 мин пешком
                  </li>
                  <li>
                    <span className="inline-block h-2 w-2 rounded-full bg-[#F58220] mr-2 align-middle" />
                    Академическая — 8 мин пешком
                  </li>
                </ul>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl bg-surface p-6 ring-1 ring-inset ring-ink-20">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-10 text-accent-60">
                <Car className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-100">
                  На машине
                </h3>
                <p className="mt-2 text-sm text-ink-70">
                  Парковка во дворах вокруг дома, свободные места обычно есть в
                  любое время дня. Без шлагбаума.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 rounded-3xl bg-surface p-6 ring-1 ring-inset ring-ink-20">
              <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-accent-10 text-accent-60">
                <MapPin className="h-5 w-5" strokeWidth={2} />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold text-ink-100">
                  Адрес и ориентир
                </h3>
                <p className="mt-2 text-sm text-ink-70">
                  Москва, Новочерёмушкинская ул., 17. Чёрный фасад с
                  фиолетовой вывеской «М». Рядом ресторан Ciro, кафе Soda.
                </p>
                <a
                  href={YANDEX_MAP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-60 hover:text-accent-80"
                >
                  Построить маршрут
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Правый блок — карта */}
          <div className="relative overflow-hidden rounded-3xl ring-1 ring-inset ring-ink-20 min-h-[420px] md:min-h-[480px]">
            <iframe
              src={YANDEX_EMBED_URL}
              title="Марафет на Новочерёмушкинской"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 h-full w-full border-0"
              allow="geolocation"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}
