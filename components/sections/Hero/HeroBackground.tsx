"use client";

import { motion } from "framer-motion";

/**
 * Декоративный фон героя — лёгкая версия.
 * Оптимизации:
 *  - 2 orb вместо 3
 *  - blur уменьшен с 128px до ~48px (≈8× дешевле GPU)
 *  - убран grid-pattern (лишняя композиция)
 *  - меньшие orb (340-420px вместо 520-600px)
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden noise"
    >
      {/* Радиальная подсветка (статичная — GPU не нагружает) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 0%, rgba(122,84,255,0.16), transparent 60%), radial-gradient(ellipse 55% 45% at 85% 85%, rgba(171,92,233,0.12), transparent 65%)",
        }}
      />

      {/* Orb 1 — фиолетовый, сверху-слева */}
      <motion.div
        className="absolute -top-24 -left-24 h-[360px] w-[360px] rounded-full opacity-60"
        style={{
          background:
            "radial-gradient(circle, #7A54FF 0%, transparent 70%)",
          filter: "blur(48px)",
          willChange: "transform",
        }}
        animate={{
          x: [0, 36, 0],
          y: [0, -24, 0],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Orb 2 — магента, справа-внизу */}
      <motion.div
        className="absolute -bottom-24 -right-16 h-[420px] w-[420px] rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle, #AB5CE9 0%, transparent 70%)",
          filter: "blur(56px)",
          willChange: "transform",
        }}
        animate={{
          x: [0, -28, 0],
          y: [0, 20, 0],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}
