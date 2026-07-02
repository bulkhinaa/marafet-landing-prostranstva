"use client";

import { useState, FormEvent } from "react";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Section } from "@/components/ui/Section";
import { ShimmerText } from "@/components/ui/ShimmerText";
import { GlowButton } from "@/components/ui/GlowButton";

type ObjectType = "coworking" | "salon" | "scratch" | "other";
type Status = "idle" | "submitting" | "success" | "error";

const OBJECTS: { id: ObjectType; label: string }[] = [
  { id: "coworking", label: "Действующий коворкинг" },
  { id: "salon", label: "Действующий салон" },
  { id: "scratch", label: "Открываю с нуля" },
  { id: "other", label: "Другое" },
];

export function FinalCTASection() {
  const [status, setStatus] = useState<Status>("idle");
  const [objectType, setObjectType] = useState<ObjectType>("coworking");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    // TODO (бэкенд формы заявок). Форма сейчас скрыта; при включении заложить:
    //  - POST /api/v1/partner-application (marafet-backend) + Liquibase-миграция
    //    partner_application (name, phone, city, object_type, area_sqm, comment, source, created_at)
    //  - Honeypot: скрытое поле-ловушка (напр. "company"/"website"), невидимое для людей —
    //    если заполнено, тихо отклонять запрос как бота (200 OK без записи в БД)
    //  - Time-trap: отклонять сабмиты быстрее ~2-3 сек с момента загрузки формы
    //  - Rate limiting по IP на эндпоинте (эндпоинт публичный — иначе бот-спам)
    //  - Серверная валидация и нормализация телефона/имени
    //  - const data = new FormData(e.currentTarget);
    await new Promise((r) => setTimeout(r, 900));
    setStatus("success");
  }

  return (
    <Section anchor="contact" tone="dark" className="!py-24 md:!py-32">
      {/* Большой radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-0 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-30 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #7A54FF 0%, #AB5CE9 50%, transparent 75%)",
        }}
      />

      <Container size="md" className="relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white/85 ring-1 ring-inset ring-white/15 backdrop-blur">
            <Sparkles className="h-4 w-4 text-accent-40" />
            Ответим в течение 24 часов
          </span>

          <h2 className="font-display max-w-3xl text-balance text-4xl font-bold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl">
            Готовы стать{" "}
            <ShimmerText
              colors={["#CABBFF", "#AB5CE9", "#FF7B9C", "#FFD78A", "#CABBFF"]}
              duration={4}
              className="font-bold"
            >
              Марафет Пространством
            </ShimmerText>
            ?
          </h2>

          <p className="max-w-xl text-pretty text-lg leading-relaxed text-white/70 md:text-xl">
            Оставьте контакты — соберём 30-минутный созвон с аккаунт-менеджером.
            Покажем партнёрский кабинет, обсудим условия и сроки.
          </p>
        </div>

        {/* Форма заявки временно отключена по запросу — не отображается.
            Чтобы вернуть, замените false на true в строке ниже. */}
        {false && (
        <form
          onSubmit={onSubmit}
          className="mt-12 rounded-[36px] bg-white p-6 shadow-[0_30px_80px_-20px_rgba(0,0,0,0.4)] md:p-10"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <span className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-success/15 text-success">
                <Check className="h-8 w-8" strokeWidth={3} />
              </span>
              <h3 className="font-display text-2xl font-bold text-ink-100 md:text-3xl">
                Заявка принята
              </h3>
              <p className="max-w-md text-ink-70">
                Свяжемся с вами в течение 24 часов в Telegram или по телефону.
                В выходные время реакции может быть до 48 часов.
              </p>
            </div>
          ) : (
            <>
              {/* Object type pills */}
              <fieldset>
                <legend className="mb-3 text-sm font-semibold text-ink-100">
                  Что у вас сейчас?
                </legend>
                <div className="flex flex-wrap gap-2">
                  {OBJECTS.map((o) => (
                    <label
                      key={o.id}
                      className={`cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        objectType === o.id
                          ? "bg-ink-100 text-white"
                          : "bg-accent-10 text-ink-80 hover:bg-accent-20"
                      }`}
                    >
                      <input
                        type="radio"
                        name="objectType"
                        value={o.id}
                        checked={objectType === o.id}
                        onChange={() => setObjectType(o.id)}
                        className="sr-only"
                      />
                      {o.label}
                    </label>
                  ))}
                </div>
              </fieldset>

              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="text-sm font-semibold text-ink-100"
                  >
                    Имя
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Артём Бульхин"
                    className="mt-1.5 w-full rounded-2xl bg-accent-10/50 px-4 py-3 text-base text-ink-100 placeholder:text-ink-50 ring-1 ring-inset ring-ink-20 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="text-sm font-semibold text-ink-100"
                  >
                    Телефон
                  </label>
                  <input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+7 (___) ___-__-__"
                    className="mt-1.5 w-full rounded-2xl bg-accent-10/50 px-4 py-3 text-base text-ink-100 placeholder:text-ink-50 ring-1 ring-inset ring-ink-20 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-60"
                  />
                </div>
              </div>

              <div className="mt-4 grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="city"
                    className="text-sm font-semibold text-ink-100"
                  >
                    Город
                  </label>
                  <input
                    id="city"
                    name="city"
                    type="text"
                    required
                    autoComplete="address-level2"
                    placeholder="Москва"
                    className="mt-1.5 w-full rounded-2xl bg-accent-10/50 px-4 py-3 text-base text-ink-100 placeholder:text-ink-50 ring-1 ring-inset ring-ink-20 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-60"
                  />
                </div>
                <div>
                  <label
                    htmlFor="area"
                    className="text-sm font-semibold text-ink-100"
                  >
                    Площадь, м² <span className="text-ink-50">(если есть помещение)</span>
                  </label>
                  <input
                    id="area"
                    name="area"
                    type="number"
                    min={0}
                    placeholder="например, 60"
                    className="mt-1.5 w-full rounded-2xl bg-accent-10/50 px-4 py-3 text-base text-ink-100 placeholder:text-ink-50 ring-1 ring-inset ring-ink-20 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-60"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="comment"
                  className="text-sm font-semibold text-ink-100"
                >
                  Комментарий{" "}
                  <span className="text-ink-50">(необязательно)</span>
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows={3}
                  placeholder="Кратко о вашей площадке или планах"
                  className="mt-1.5 w-full resize-none rounded-2xl bg-accent-10/50 px-4 py-3 text-base text-ink-100 placeholder:text-ink-50 ring-1 ring-inset ring-ink-20 transition-colors focus:bg-white focus:outline-none focus:ring-2 focus:ring-accent-60"
                />
              </div>

              <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:items-center sm:justify-between">
                <p className="text-xs text-ink-60">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных
                  данных согласно ФЗ-152.
                </p>
                <GlowButton
                  type="submit"
                  disabled={status === "submitting"}
                  size="lg"
                  intensity="strong"
                  glowColor="rgba(122, 84, 255, 0.7)"
                  className="h-14"
                >
                  {status === "submitting" ? "Отправляем…" : "Оставить заявку"}
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
                </GlowButton>
              </div>
            </>
          )}
        </form>
        )}

        {/* Trust row */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/55">
          <span>● Без обязательств</span>
          <span>● 24 часа на ответ</span>
          <span>● 30-минутный созвон</span>
          <span>● Можно в Telegram</span>
        </div>
      </Container>
    </Section>
  );
}
