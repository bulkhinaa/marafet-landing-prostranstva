"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ExternalLink } from "lucide-react";
import { cn } from "@/lib/cn";
import { LogoMark } from "./Logo";
import { MARAFET_APP_URL, PARTNERKA_URL } from "@/lib/paths";

const SECTIONS = [
  { id: "problem-solution", label: "Зачем" },
  { id: "how-it-works", label: "Процесс" },
  { id: "savings", label: "Экономия" },
  { id: "benefits", label: "Пакет" },
  { id: "scenarios", label: "Сценарии" },
  { id: "cases", label: "Кейсы" },
  { id: "tech", label: "IT" },
  { id: "terms", label: "Условия" },
  { id: "faq", label: "FAQ" },
];

function EcosystemChips({ scrolled }: { scrolled: boolean }) {
  return (
    <div
      className={cn(
        "hidden shrink-0 items-center gap-0.5 rounded-full p-0.5 2xl:inline-flex",
        scrolled
          ? "bg-ink-10 ring-1 ring-inset ring-ink-20"
          : "bg-ink-100/5 ring-1 ring-inset ring-ink-20"
      )}
    >
      <a
        href={MARAFET_APP_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full px-3 py-1 text-[11px] font-semibold text-ink-60 transition-colors hover:text-ink-100"
      >
        Приложение
      </a>
      <span className="rounded-full bg-ink-100 px-3 py-1 text-[11px] font-bold text-white">
        Коворкингам
      </span>
      <a
        href={PARTNERKA_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="rounded-full px-3 py-1 text-[11px] font-semibold text-ink-60 transition-colors hover:text-ink-100"
      >
        Партнёрам
      </a>
    </div>
  );
}

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let raf = 0;
    function onScroll() {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = 0;
        setScrolled(window.scrollY > 40);
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    function onResize() {
      if (window.innerWidth >= 1024) setOpen(false);
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex items-center gap-3 rounded-full transition-all duration-300",
          "w-[calc(100%-24px)] max-w-[1400px] px-3 md:gap-4 md:px-5 md:w-[calc(100%-32px)]",
          scrolled || open
            ? "bg-white/95 ring-1 ring-inset ring-ink-20 shadow-[0_10px_40px_-15px_rgba(30,22,57,0.18)] backdrop-blur-md py-2"
            : "bg-white/0 ring-1 ring-inset ring-ink-20 py-3"
        )}
      >
        <Link
          href="/"
          className="inline-flex shrink-0 items-center gap-2.5"
          aria-label="Марафет Пространства · главная"
        >
          <LogoMark size={32} glow />
          <span className="hidden whitespace-nowrap font-display text-sm font-bold tracking-tight text-ink-100 md:inline">
            Марафет
            <span className="hidden text-ink-60 2xl:inline">
              {" · Пространства"}
            </span>
          </span>
        </Link>

        <nav className="hidden min-w-0 flex-1 items-center justify-center gap-0.5 lg:flex xl:gap-1">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="whitespace-nowrap rounded-full px-2 py-1.5 text-[13px] font-medium text-ink-70 transition-colors hover:bg-accent-10 hover:text-ink-100 xl:px-2.5"
            >
              {s.label}
            </a>
          ))}
        </nav>

        <EcosystemChips scrolled={scrolled} />

        {/* CTA «Оставить заявку» скрыт: форма отключена, канала приёма заявок пока нет.
            Вернуть, когда появится форма или рабочий контакт. */}
        {false && (
          <a
            href="#contact"
            className="hidden h-10 shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-ink-100 px-4 text-sm font-semibold text-white transition-colors hover:bg-ink-90 sm:inline-flex md:px-5"
          >
            Оставить заявку
          </a>
        )}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={open}
          className={cn(
            "inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink-100 transition-colors lg:hidden",
            "bg-ink-10 ring-1 ring-inset ring-ink-20 hover:bg-ink-20"
          )}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && <MobileMenu onClose={() => setOpen(false)} />}
    </header>
  );
}

function MobileMenu({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-x-0 bottom-0 top-[64px] z-40 overflow-y-auto bg-white px-5 pb-10 pt-6 lg:hidden">
      <div className="mx-auto flex max-w-md flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-50">
            Разделы страницы
          </p>
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={onClose}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-ink-100 transition-colors hover:bg-accent-10"
            >
              {s.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-1 border-t border-ink-20 pt-5">
          <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-50">
            Экосистема Марафет
          </p>
          <a
            href={MARAFET_APP_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-ink-100 transition-colors hover:bg-accent-10"
          >
            Приложение
            <ExternalLink className="h-4 w-4 text-ink-50" />
          </a>
          <span className="flex items-center justify-between rounded-2xl bg-ink-100 px-4 py-3 text-base font-semibold text-white">
            Коворкингам
            <span className="text-[10px] font-bold uppercase tracking-wider text-white/55">
              сейчас
            </span>
          </span>
          <a
            href={PARTNERKA_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={onClose}
            className="flex items-center justify-between rounded-2xl px-4 py-3 text-base font-semibold text-ink-100 transition-colors hover:bg-accent-10"
          >
            Партнёрам
            <ExternalLink className="h-4 w-4 text-ink-50" />
          </a>
        </div>

        {/* CTA «Оставить заявку» скрыт (форма отключена) — см. комментарий в шапке */}
        {false && (
          <a
            href="#contact"
            onClick={onClose}
            className="mt-2 inline-flex h-12 items-center justify-center rounded-full bg-ink-100 px-6 text-base font-semibold text-white shadow-[0_15px_40px_-12px_rgba(30,22,57,0.55)]"
          >
            Оставить заявку
          </a>
        )}
      </div>
    </div>
  );
}
