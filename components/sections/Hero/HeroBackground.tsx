/**
 * Максимально дешёвый фон.
 * Один linear-gradient вместо трёх radial — браузер не пересчитывает
 * сложные углы освещения на каждом перерендере, всё кешируется одним слоем.
 */
export function HeroBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-10"
      style={{
        background:
          "linear-gradient(180deg, #F8F6FF 0%, #FFFFFF 60%, #F8F6FF 100%)",
      }}
    />
  );
}
