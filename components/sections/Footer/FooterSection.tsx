import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { LogoMark } from "@/components/ui/Logo";

const NAV_GROUPS = [
  {
    title: "Платформа",
    links: [
      { label: "Главная", href: "/" },
      { label: "Наш флагман", href: "/spaces/marafet-studio" },
      { label: "Marafet.app", href: "https://marafet.app", external: true },
    ],
  },
  {
    title: "Партнёрам",
    links: [
      { label: "Сценарии", href: "/#scenarios" },
      { label: "Финмодель", href: "/#financial" },
      { label: "Условия", href: "/#terms" },
      { label: "Оставить заявку", href: "/#contact" },
    ],
  },
  {
    title: "О сети",
    links: [
      { label: "Как работает", href: "/#how-it-works" },
      { label: "Что получает партнёр", href: "/#benefits" },
      { label: "Кейсы", href: "/#cases" },
      { label: "Комьюнити", href: "/#community" },
    ],
  },
];

export function FooterSection() {
  return (
    <footer className="bg-ink-100 text-white">
      <Container size="xl">
        <div className="grid gap-10 py-16 md:grid-cols-[1.4fr_2fr] md:gap-12 md:py-20">
          {/* LEFT — лого + контакты */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="inline-flex items-center gap-3">
              <LogoMark size={48} glow />
              <div className="flex flex-col">
                <span className="font-display text-lg font-bold leading-tight">
                  Марафет
                </span>
                <span className="text-xs uppercase tracking-[0.2em] text-white/55">
                  Пространства
                </span>
              </div>
            </Link>

            <p className="max-w-sm text-sm leading-relaxed text-white/65">
              Партнёрская сеть бьюти-коворкингов и салонов на платформе Марафет.
              Подключение бесплатное, заработок — на комиссии с записей мастеров
              через приложение.
            </p>

            <div className="flex flex-col gap-2 text-sm">
              <a
                href="mailto:partners@marafet.app"
                className="text-white/85 hover:text-accent-40 transition-colors"
              >
                partners@marafet.app
              </a>
              <a
                href="https://t.me/marafet_partners"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/85 hover:text-accent-40 transition-colors"
              >
                Telegram · @marafet_partners
              </a>
            </div>
          </div>

          {/* RIGHT — навигация */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3">
            {NAV_GROUPS.map((group) => (
              <div key={group.title}>
                <h3 className="text-xs font-bold uppercase tracking-[0.18em] text-accent-40">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-col gap-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      {link.external ? (
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-white/75 hover:text-white transition-colors"
                        >
                          {link.label}
                        </a>
                      ) : (
                        <Link
                          href={link.href}
                          className="text-sm text-white/75 hover:text-white transition-colors"
                        >
                          {link.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom — копирайт + юр */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/55">
            © {new Date().getFullYear()} Марафет · TopSolution. Все права защищены.
          </p>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/55">
            <a
              href="/privacy"
              className="hover:text-white/85 transition-colors"
            >
              Политика конфиденциальности
            </a>
            <a href="/terms" className="hover:text-white/85 transition-colors">
              Пользовательское соглашение
            </a>
            <a href="/offer" className="hover:text-white/85 transition-colors">
              Партнёрское соглашение
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
