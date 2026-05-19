import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";
const repoName = "marafet-landing-prostranstva";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Static export для GitHub Pages
  output: "export",
  // Папка с собранным сайтом
  distDir: "out",
  // На GH Pages сайт живёт по пути /<repo>/, в проде нужен basePath/assetPrefix
  basePath: isProd ? `/${repoName}` : "",
  assetPrefix: isProd ? `/${repoName}/` : "",
  images: {
    // GH Pages не умеет оптимизацию картинок Next.js
    unoptimized: true,
  },
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  // Для путей с trailing slash — стабильнее на GH Pages
  trailingSlash: true,
};

export default nextConfig;
