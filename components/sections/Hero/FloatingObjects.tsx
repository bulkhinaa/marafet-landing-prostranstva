/**
 * CSS-only "3D" blobs.
 * Нулевой WebGL, нулевая RAF-петля, нулевой JS.
 * Эффект — conic-gradient + CSS keyframes (GPU-композитор, не CPU).
 */
export function FloatingObjects() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 -z-0 hidden md:block"
    >
      {/* Blob 1 — right */}
      <div
        className="absolute right-[6%] top-[18%] h-72 w-72 rounded-full opacity-80 will-change-transform animate-[blobSpin_28s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 90deg, #7A54FF, #AB5CE9, #CABBFF, #B6A1FF, #7A54FF)",
          filter: "blur(24px) saturate(1.4)",
        }}
      />
      {/* Blob 2 — left */}
      <div
        className="absolute left-[8%] bottom-[22%] h-56 w-56 rounded-full opacity-70 will-change-transform animate-[blobSpinReverse_36s_linear_infinite]"
        style={{
          background:
            "conic-gradient(from 270deg, #AB5CE9, #7A54FF, #E3DBFF, #AB5CE9)",
          filter: "blur(28px) saturate(1.3)",
        }}
      />
    </div>
  );
}
