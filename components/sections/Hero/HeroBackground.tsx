/**
 * Декоративный фон героя — максимально лёгкий.
 * Статичные radial-gradients (GPU-композитор), нулевая JS-анимация.
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
    >
      <div
        className="absolute inset-0"
        style={{
          background: [
            "radial-gradient(ellipse 70% 50% at 18% 12%, rgba(122,84,255,0.22), transparent 60%)",
            "radial-gradient(ellipse 60% 45% at 88% 88%, rgba(171,92,233,0.18), transparent 65%)",
            "radial-gradient(ellipse 50% 40% at 50% 50%, rgba(202,187,255,0.10), transparent 70%)",
          ].join(", "),
        }}
      />
    </div>
  );
}
