import {
  Megaphone,
  MapPin,
  Sparkles,
  Calendar,
  CreditCard,
  BarChart3,
  Headphones,
  GraduationCap,
  Image as ImageIcon,
  Gift,
  Scale,
  Users,
} from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";

interface Benefit {
  icon: typeof Megaphone;
  title: string;
  description: string;
  accent?: boolean;
}

const BENEFITS: Benefit[] = [
  {
    icon: Users,
    title: "Поток мастеров",
    description: "23 000+ мастеров в приложении ищут стабильное рабочее место",
    accent: true,
  },
  {
    icon: MapPin,
    title: "Поток клиентов",
    description: "Гео-поиск выводит вашу площадку первой пользователям рядом",
    accent: true,
  },
  {
    icon: Sparkles,
    title: "Брендинг МПространств",
    description: "Готовая айдентика — 4 цвета, 2 гаммы, шаблоны вывесок и мерча",
  },
  {
    icon: Calendar,
    title: "CRM и расписание",
    description: "Каждый мастер ведёт календарь, клиенты записываются сами",
  },
  {
    icon: CreditCard,
    title: "Касса и оплаты",
    description: "Онлайн-оплата, чеки, автоматические выплаты мастерам",
  },
  {
    icon: BarChart3,
    title: "Аналитика",
    description: "Заполняемость, выручка, средний чек, возврат клиентов",
  },
  {
    icon: Headphones,
    title: "Аккаунт-менеджер",
    description: "Персональный куратор сопровождает вас с первого дня",
  },
  {
    icon: GraduationCap,
    title: "Обучение команды",
    description: "База знаний, чек-листы, регулярные вебинары для админов",
  },
  {
    icon: ImageIcon,
    title: "Маркетинговые материалы",
    description: "Шаблоны для соцсетей, постеры, лифлеты, баннеры для геосервисов",
  },
  {
    icon: Gift,
    title: "Реферальная программа",
    description: "Бонусы за приведённых мастеров и партнёров",
  },
  {
    icon: Scale,
    title: "Юридическая база",
    description: "Шаблоны договоров с самозанятыми и арендодателями",
  },
  {
    icon: Megaphone,
    title: "Комьюнити партнёров",
    description: "Telegram-чат, обмен опытом, встречи и совместный маркетинг",
  },
];

export function BenefitsSection() {
  return (
    <Section anchor="benefits" tone="light">
      <Container size="xl">
        <SectionHeading
          eyebrow="12 пунктов пакета"
          title="Что получает Марафет Пространство"
          subtitle="Бесплатный коннект даёт первые 5 пунктов. Полный пакет — все 12 + персонализация под город и формат"
          align="center"
        />

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {BENEFITS.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div
                key={benefit.title}
                className={`group relative flex flex-col gap-3 rounded-3xl p-6 transition-colors duration-200 ${
                  benefit.accent
                    ? "bg-accent-100 text-white ring-1 ring-inset ring-accent-80"
                    : "bg-accent-10 hover:bg-accent-20"
                }`}
              >
                <span
                  className={`inline-flex h-11 w-11 items-center justify-center rounded-2xl ${
                    benefit.accent
                      ? "bg-white/10 text-accent-30"
                      : "bg-surface text-accent-60"
                  }`}
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </span>
                <h3
                  className={`font-display text-xl font-bold tracking-tight ${
                    benefit.accent ? "text-white" : "text-ink-100"
                  }`}
                >
                  {benefit.title}
                </h3>
                <p
                  className={`text-sm leading-relaxed ${
                    benefit.accent ? "text-white/75" : "text-ink-70"
                  }`}
                >
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Подсказка */}
        <p className="mt-10 text-center text-sm text-ink-60">
          Полный список и условия пакета — на следующем созвоне
        </p>
      </Container>
    </Section>
  );
}
