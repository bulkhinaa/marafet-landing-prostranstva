"use client";

import { ButtonHTMLAttributes, ReactNode, useRef, MouseEvent } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "ghost";

interface MagneticButtonProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onAnimationStart" | "onDragStart" | "onDrag" | "onDragEnd"> {
  variant?: Variant;
  icon?: ReactNode;
  children: ReactNode;
  magneticStrength?: number;
}

const variantStyles: Record<Variant, string> = {
  primary:
    "gradient-brand text-white shadow-[var(--shadow-glow-md)] hover:shadow-[var(--shadow-glow-lg)]",
  secondary:
    "bg-ink-100 text-white hover:bg-ink-90",
  ghost:
    "bg-accent-10 text-accent-100 ring-1 ring-inset ring-accent-30 hover:bg-accent-20",
};

export function MagneticButton({
  variant = "primary",
  icon,
  children,
  className,
  magneticStrength = 0.35,
  ...rest
}: MagneticButtonProps) {
  const ref = useRef<HTMLButtonElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 200, damping: 18, mass: 0.6 });
  const springY = useSpring(y, { stiffness: 200, damping: 18, mass: 0.6 });

  const rotate = useTransform(springX, [-30, 30], [-3, 3]);

  function handleMouseMove(e: MouseEvent<HTMLButtonElement>) {
    const node = ref.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    x.set((e.clientX - cx) * magneticStrength);
    y.set((e.clientY - cy) * magneticStrength);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY, rotate }}
      whileTap={{ scale: 0.96 }}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2.5",
        "h-14 rounded-full px-8 text-base font-semibold",
        "transition-shadow duration-500 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent-60 focus-visible:ring-offset-2",
        "disabled:opacity-50 disabled:pointer-events-none",
        variantStyles[variant],
        className
      )}
      {...rest}
    >
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10 inline-flex">{icon}</span>}
    </motion.button>
  );
}
