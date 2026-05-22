"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { LogoMark } from "./Logo";

const SECTIONS = [
  { id: "problem-solution", label: "Зачем" },
  { id: "how-it-works", label: "Как работает" },
  { id: "benefits", label: "Пакет" },
  { id: "scenarios", label: "Сценарии" },
  { id: "financial", label: "Цифры" },
  { id: "cases", label: "Кейсы" },
  { id: "tech", label: "IT" },
  { id: "terms", label: "Условия" },
  { id: "faq", label: "FAQ" },
];

export function StickyNav() {
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "py-3" : "py-5"
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-4 rounded-full px-4 transition-all duration-300 md:px-6",
          scrolled
            ? "bg-white/85 ring-1 ring-inset ring-ink-20 shadow-[0_10px_40px_-15px_rgba(30,22,57,0.18)] backdrop-blur-md py-2"
            : "bg-transparent py-3"
        )}
        style={{
          width: scrolled ? "min(1100px, calc(100% - 32px))" : "min(1280px, calc(100% - 48px))",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          className="inline-flex items-center gap-2.5 shrink-0"
          aria-label="Марафет Пространства · главная"
        >
          <LogoMark size={36} glow />
          <span className="hidden font-display text-sm font-bold tracking-tight text-ink-100 sm:inline">
            Марафет<span className="text-ink-60"> · Пространства</span>
          </span>
        </Link>

        {/* Nav */}
        <nav className="hidden flex-1 items-center justify-center gap-1 lg:flex">
          {SECTIONS.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              className="rounded-full px-3 py-1.5 text-sm font-medium text-ink-70 transition-colors hover:bg-accent-10 hover:text-ink-100"
            >
              {s.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <a
          href="#contact"
          className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-full bg-ink-100 px-5 text-sm font-semibold text-white transition-colors hover:bg-ink-90"
        >
          Оставить заявку
        </a>
      </div>
    </header>
  );
}
