import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  experimental: {
    optimizePackageImports: [
      "framer-motion",
      "lucide-react",
      "@react-three/drei",
      "@react-three/fiber",
    ],
  },
  // three.js shipping ESM — Next.js обычно справляется,
  // но на всякий случай транспилируем @react-three/* для совместимости
  transpilePackages: ["three"],
};

export default nextConfig;
