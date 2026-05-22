import type { Metadata, Viewport } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
  weight: ["600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://prostranstva.marafet.app"),
  title: {
    default: "Марафет Пространства — экосистема для бьюти-коворкингов",
    template: "%s · Марафет Пространства",
  },
  description:
    "Подключите ваш бьюти-коворкинг или салон к экосистеме Марафет: поток мастеров и клиентов, IT-инструменты, бренд, аналитика и поддержка. 1500 локаций на рынке, лидер занимает 3% — окно открыто.",
  keywords: [
    "бьюти-коворкинг",
    "марафет",
    "мпространства",
    "франшиза салона",
    "коворкинг для мастеров",
    "запись к мастеру",
    "бьюти-платформа",
    "партнёрская программа",
  ],
  openGraph: {
    title: "Марафет Пространства — экосистема для бьюти-коворкингов",
    description:
      "Поток мастеров и клиентов, бренд, IT и поддержка. Гибрид: бесплатный коннект + платный пакет.",
    url: "https://prostranstva.marafet.app",
    siteName: "Марафет Пространства",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Марафет Пространства",
    description: "Экосистема для бьюти-коворкингов и салонов России",
  },
  icons: {
    icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#1E1639" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ru"
      className={`${manrope.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-dvh bg-surface text-ink-100 antialiased">
        {children}
      </body>
    </html>
  );
}
