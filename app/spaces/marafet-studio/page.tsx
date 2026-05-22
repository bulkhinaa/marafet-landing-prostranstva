import type { Metadata } from "next";
import { SpaceHero } from "@/components/sections/Space/SpaceHero";
import { SpaceServices } from "@/components/sections/Space/SpaceServices";
import { SpaceReviews } from "@/components/sections/Space/SpaceReviews";
import { SpaceLocation } from "@/components/sections/Space/SpaceLocation";
import { SpaceBookCTA } from "@/components/sections/Space/SpaceBookCTA";

export const metadata: Metadata = {
  title: "Марафет на Новочерёмушкинской · Ногтевая студия Москва",
  description:
    "Ногтевая студия Марафет на Новочерёмушкинской улице 17. Маникюр с покрытием Luxio от 2 700 ₽. Рейтинг 5,0 / 875 оценок на Яндекс.Картах. Запись через приложение Марафет.",
  openGraph: {
    title: "Марафет на Новочерёмушкинской",
    description: "Флагманская ногтевая студия Марафет в Москве. Запись через приложение.",
    type: "website",
  },
};

export default function MarafetStudioPage() {
  return (
    <main className="relative">
      <SpaceHero />
      <SpaceServices />
      <SpaceReviews />
      <SpaceLocation />
      <SpaceBookCTA />
    </main>
  );
}
