"use client";

import { MessageCircle, Users, Calendar, BookOpen, Sparkles, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Marquee } from "@/components/ui/Marquee";
import { TestimonialCard, type Testimonial } from "@/components/ui/TestimonialCard";

interface ChatMsg {
  author: string;
  role: string;
  city: string;
  initial: string;
  color: string;
  time: string;
  text: string;
  reactions?: { emoji: string; count: number }[];
}

const MESSAGES: ChatMsg[] = [
  {
    author: "Ольга К.",
    role: "Бьюти-коворкинг «Айвори»",
    city: "Москва",
    initial: "О",
    color: "from-[#FFA8C5] to-[#FF7B9C]",
    time: "сегодня в 14:21",
    text: "Девочки! Поделюсь — сделали офер «маникюр + педикюр в один визит» с двойным мастером. Запись через приложение, средний чек улетел с 3,5К до 6,2К 🚀",
    reactions: [
      { emoji: "🔥", count: 14 },
      { emoji: "❤️", count: 7 },
    ],
  },
  {
    author: "Денис",
    role: "Барбершоп «Cut»",
    city: "СПб",
    initial: "Д",
    color: "from-[#7A54FF] to-[#AB5CE9]",
    time: "вчера в 19:43",
    text: "Ребят, кто работал с поставщиком NailVision? Думаем подключать аппараты. Нужны отзывы по сервису.",
    reactions: [{ emoji: "💬", count: 8 }],
  },
  {
    author: "Виктория",
    role: "Студия бровей «Brow Up»",
    city: "Казань",
    initial: "В",
    color: "from-[#FFD78A] to-[#FFB347]",
    time: "понедельник",
    text: "Подняла загрузку с 38% до 71% за 2 месяца после подключения. Главное — попасть в гео-поиск и держать рейтинг 4,8+. Делюсь чек-листом завтра в чате 📋",
    reactions: [
      { emoji: "🙏", count: 22 },
      { emoji: "🔥", count: 11 },
    ],
  },
];

const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Анна Соколова",
    role: "Бьюти-коворкинг «Лофт»",
    location: "Москва",
    initial: "А",
    gradient: "from-[#FFA8C5] to-[#FF7B9C]",
    text: "За 3 месяца в сети загрузка выросла с 40% до 78%. Мастера сами приходят, клиенты записываются через приложение — мне остаётся только следить за качеством.",
    rating: 5,
    metric: { value: "+95%", label: "рост загрузки" },
  },
  {
    id: "2",
    author: "Денис Волков",
    role: "Барбершоп «Cut & Style»",
    location: "Санкт-Петербург",
    initial: "Д",
    gradient: "from-[#7A54FF] to-[#AB5CE9]",
    text: "Раньше тратил на рекламу 80К в месяц. Сейчас — ноль. Весь поток идёт из приложения Марафет. Окупаемость просто космическая.",
    rating: 5,
    metric: { value: "0 ₽", label: "на рекламу" },
  },
  {
    id: "3",
    author: "Виктория Ким",
    role: "Студия бровей «Brow Lab»",
    location: "Казань",
    initial: "В",
    gradient: "from-[#FFD78A] to-[#FFB347]",
    text: "Подняла загрузку с 38% до 71% за 2 месяца после подключения. Главное — попасть в гео-поиск и держать рейтинг 4,8+.",
    rating: 5,
    metric: { value: "71%", label: "загрузка" },
  },
  {
    id: "4",
    author: "Ольга Петрова",
    role: "Nail-студия «Gloss»",
    location: "Екатеринбург",
    initial: "О",
    gradient: "from-[#6EE7B7] to-[#3B82F6]",
    text: "Боялась, что мастера уйдут к конкурентам. Вышло наоборот — к нам перешли 4 топовых мастера из других студий. Сеть работает!",
    rating: 5,
    metric: { value: "+4", label: "мастера" },
  },
  {
    id: "5",
    author: "Марина Иванова",
    role: "Салон «Beauty Point»",
    location: "Новосибирск",
    initial: "М",
    gradient: "from-[#F472B6] to-[#C084FC]",
    text: "Средний чек вырос на 40% — клиенты стали записываться на комплексы через приложение. Допродажи работают автоматически.",
    rating: 5,
    metric: { value: "+40%", label: "средний чек" },
  },
  {
    id: "6",
    author: "Елена Смирнова",
    role: "Лэш-студия «Velvet»",
    location: "Краснодар",
    initial: "Е",
    gradient: "from-[#818CF8] to-[#6366F1]",
    text: "Интеграция заняла 3 дня. Уже на второй неделе пошли первые записи из приложения. Поддержка отвечает за минуты, не часы.",
    rating: 5,
    metric: { value: "3 дня", label: "до запуска" },
  },
];

const PERKS = [
  {
    icon: MessageCircle,
    title: "Закрытый Telegram-чат",
    description: "Только подключённые партнёры. Без новичков-зевак",
  },
  {
    icon: Users,
    title: "Обмен поставщиками",
    description: "Списки проверенных подрядчиков с льготными ценами от сети",
  },
  {
    icon: Calendar,
    title: "Партнёрские встречи",
    description: "Раз в квартал — оффлайн в Москве и СПб. Воркшопы и нетворкинг",
  },
  {
    icon: BookOpen,
    title: "База знаний",
    description: "Регламенты, скрипты, чек-листы, шаблоны — всё на одной wiki",
  },
];

export function CommunitySection() {
  return (
    <Section anchor="community" tone="dark">
      {/* Декор — едва заметный мерцающий glow слева */}
      <div
        aria-hidden
        className="absolute -left-32 top-1/4 -z-0 h-96 w-96 rounded-full opacity-20"
        style={{
          background:
            "radial-gradient(circle, #7A54FF 0%, transparent 70%)",
        }}
      />

      <Container size="xl" className="relative">
        <SectionHeading
          eyebrow="Комьюнити партнёров"
          title={
            <>
              Десять сильных партнёров{" "}
              <span className="bg-gradient-to-br from-accent-40 to-magenta-50 bg-clip-text text-transparent">
                сделают больше
              </span>
              <br />
              чем сто одиночек
            </>
          }
          subtitle="Подключившись, вы попадаете не в франшизу с регламентами и контролёрами, а в живую сеть людей которые помогают друг другу"
          align="center"
          className="[&_h2]:!text-white [&_p]:!text-white/70"
        />

        {/* Testimonials Marquee */}
        <div
          className="mt-12 -mx-4 sm:-mx-6 lg:-mx-8"
          style={{ "--marquee-bg": "#0D0D0F" } as React.CSSProperties}
        >
          <Marquee speed={35} gap={20} fadeWidth={60} pauseOnHover>
            {TESTIMONIALS.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </Marquee>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-10 lg:items-start">
          {/* LEFT — перки */}
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
            {PERKS.map((p) => {
              const Icon = p.icon;
              return (
                <div
                  key={p.title}
                  className="flex items-start gap-4 rounded-3xl bg-white/[0.04] p-5 ring-1 ring-inset ring-white/10 transition-colors hover:bg-white/[0.06] md:p-6"
                >
                  <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-60 to-magenta-60 text-white shadow-[0_8px_24px_-8px_rgba(122,84,255,0.6)]">
                    <Icon className="h-5 w-5" strokeWidth={2} />
                  </span>
                  <div>
                    <h3 className="font-display text-lg font-bold tracking-tight text-white">
                      {p.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-white/65">
                      {p.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* RIGHT — chat mockup */}
          <div className="relative overflow-hidden rounded-[36px] bg-ink-90 ring-1 ring-inset ring-white/10 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.5)]">
            {/* Chat header */}
            <div className="flex items-center gap-3 border-b border-white/5 bg-white/[0.02] px-5 py-4">
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-accent-60 to-magenta-60 text-white">
                <Sparkles className="h-5 w-5" strokeWidth={2} />
              </span>
              <div className="flex-1">
                <div className="font-semibold text-white">МПространства · чат</div>
                <div className="text-xs text-success">● 47 онлайн</div>
              </div>
              <span className="rounded-full bg-accent-60 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                private
              </span>
            </div>

            {/* Messages */}
            <div className="flex flex-col gap-4 p-5">
              {MESSAGES.map((m, i) => (
                <article
                  key={i}
                  className="flex gap-3"
                >
                  {/* Avatar */}
                  <div
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${m.color} font-display text-base font-bold text-white`}
                  >
                    {m.initial}
                  </div>
                  {/* Bubble */}
                  <div className="flex flex-1 flex-col gap-1.5">
                    <div className="flex flex-wrap items-baseline gap-x-2">
                      <span className="font-semibold text-white">
                        {m.author}
                      </span>
                      <span className="text-xs text-white/40">
                        {m.role}, {m.city}
                      </span>
                      <span className="text-xs text-white/30">·</span>
                      <span className="text-xs text-white/30">{m.time}</span>
                    </div>
                    <p className="text-[15px] leading-relaxed text-white/85">
                      {m.text}
                    </p>
                    {m.reactions && (
                      <div className="mt-1 flex flex-wrap gap-1.5">
                        {m.reactions.map((r, j) => (
                          <span
                            key={j}
                            className="inline-flex items-center gap-1 rounded-full bg-white/8 px-2 py-0.5 text-xs ring-1 ring-inset ring-white/10"
                          >
                            <span>{r.emoji}</span>
                            <span className="text-white/70">{r.count}</span>
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>

            {/* Composer (decorative) */}
            <div className="border-t border-white/5 bg-white/[0.02] px-5 py-4">
              <div className="flex items-center gap-3">
                <div className="flex-1 rounded-full bg-white/[0.04] px-4 py-2.5 text-sm text-white/40">
                  Сообщение в чат партнёров…
                </div>
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-accent-60 text-white">
                  <Send className="h-4 w-4" strokeWidth={2.5} />
                </span>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-white/55">
          * Сообщения — стилизованный пример формата чата
        </p>
      </Container>
    </Section>
  );
}
