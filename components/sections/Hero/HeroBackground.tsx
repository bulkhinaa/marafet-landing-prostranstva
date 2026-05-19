"use client";

import { motion } from "framer-motion";

/**
 * Декоративный фон героя: три плавающих orb-шара с blur,
 * мягкая радиальная подсветка и шумовая текстура.
 * Не блокирует pointer-events.
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden noise"
    >
      {/* Радиальный софт-фон */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(122,84,255,0.18), transparent 60%), radial-gradient(ellipse 60% 50% at 85% 80%, rgba(171,92,233,0.14), transparent 65%)",
        }}
      />

      {/* Orb 1 — крупный фиолетовый сверху-слева */}
      <motion.div
        className="absolute -top-32 -left-32 h-[520px] w-[520px] rounded-full opacity-70 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #7A54FF 0%, transparent 70%)",
        }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 2 — мягкая магента справа-внизу */}
      <motion.div
        className="absolute -bottom-40 -right-24 h-[600px] w-[600px] rounded-full opacity-60 blur-[120px]"
        style={{
          background:
            "radial-gradient(circle, #AB5CE9 0%, transparent 70%)",
        }}
        animate={{
          x: [0, -40, 50, 0],
          y: [0, 30, -20, 0],
          scale: [1, 1.15, 0.9, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Orb 3 — мелкий акцент по центру */}
      <motion.div
        className="absolute top-1/3 left-1/2 h-[280px] w-[280px] -translate-x-1/2 rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, #B6A1FF 0%, transparent 70%)",
        }}
        animate={{
          x: [-40, 60, -40],
          y: [-20, 40, -20],
        }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Тонкая «сетка» поверх — современный паттерн */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #1E1639 1px, transparent 1px), linear-gradient(to bottom, #1E1639 1px, transparent 1px)",
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 70% 50% at 50% 50%, black 30%, transparent 80%)",
        }}
      />
    </div>
  );
}
