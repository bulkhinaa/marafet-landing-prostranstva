/**
 * Декоративные blob'ы — два статичных radial-gradient круга.
 * Никаких анимаций, никакого blur, никакого conic-gradient.
 * GPU-композитор просто перекладывает уже отрендеренный слой.
 */
export function FloatingObjects() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 hidden md:block"
    >
      <div
        className="absolute right-[6%] top-[18%] h-72 w-72 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(circle at 35% 35%, #B6A1FF 0%, #7A54FF 45%, #AB5CE9 75%, transparent 100%)",
        }}
      />
      <div
        className="absolute left-[8%] bottom-[22%] h-56 w-56 rounded-full opacity-55"
        style={{
          background:
            "radial-gradient(circle at 60% 40%, #E3DBFF 0%, #AB5CE9 50%, #7A54FF 100%)",
        }}
      />
    </div>
  );
}
