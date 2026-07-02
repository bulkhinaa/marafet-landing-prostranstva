/**
 * Префикс basePath для статических ассетов в production.
 * В dev — пустой; в production GH Pages раздаёт по /marafet-landing-prostranstva/.
 *
 * `next/image` в режиме output:"export" не всегда автоматически добавляет
 * basePath к ассетам из /public — поэтому используем helper.
 */
const isProd = process.env.NODE_ENV === "production";
const BASE_PATH = isProd ? "/marafet-landing-prostranstva" : "";

/** Преобразует /logo.svg → /marafet-landing-prostranstva/logo.svg в проде */
export function assetPath(path: string): string {
  if (path.startsWith("http://") || path.startsWith("https://")) return path;
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${clean}`;
}

/** Экосистема: 3 лендинга */
export const MARAFET_APP_URL =
  "https://bulkhinaa.github.io/marafet-landing/";
export const PARTNERKA_URL =
  "https://bulkhinaa.github.io/marafet-landing-partnerka/";
