"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { MQ, matches } from "@/lib/motion";
import type { VariantProps } from "class-variance-authority";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: VariantProps<typeof buttonVariants>["variant"];
  size?: VariantProps<typeof buttonVariants>["size"];
  className?: string;
  /** Pointer-origin sunflower clip-wipe fill on hover (the loud CTA). */
  fill?: boolean;
  /** Custom-cursor label, e.g. "JOIN". */
  cursorLabel?: string;
  strength?: number;
};

/**
 * Magnetic CTA. Styled with shadcn's buttonVariants but rendered as a real
 * anchor (accessible, navigable). The button leans toward the pointer; with
 * `fill`, a sunflower layer wipes in from the pointer origin and swaps the
 * label to ink — the single loudest yellow moment. No-op on touch / reduced motion.
 */
export function MagneticButton({
  href,
  children,
  variant = "brand",
  size = "pill",
  className,
  fill = false,
  cursorLabel,
  strength = 0.35,
}: Props) {
  const root = useRef<HTMLAnchorElement>(null);
  const label = useRef<HTMLSpanElement>(null);
  const overlay = useRef<HTMLSpanElement>(null);

  useGSAP(
    () => {
      if (!matches(MQ.fine) || matches(MQ.reduce)) return;
      const el = root.current!;
      const lbl = label.current!;
      const ov = overlay.current;

      const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
      const lx = gsap.quickTo(lbl, "x", { duration: 0.6, ease: "power3" });
      const ly = gsap.quickTo(lbl, "y", { duration: 0.6, ease: "power3" });

      const move = (e: PointerEvent) => {
        const r = el.getBoundingClientRect();
        const relX = e.clientX - (r.left + r.width / 2);
        const relY = e.clientY - (r.top + r.height / 2);
        xTo(relX * strength);
        yTo(relY * strength);
        lx(relX * strength * 0.5);
        ly(relY * strength * 0.5);
      };

      const enter = (e: PointerEvent) => {
        if (ov && fill) {
          const r = el.getBoundingClientRect();
          const px = ((e.clientX - r.left) / r.width) * 100;
          const py = ((e.clientY - r.top) / r.height) * 100;
          gsap.set(ov, { clipPath: `circle(0% at ${px}% ${py}%)` });
          gsap.to(ov, { clipPath: `circle(141% at ${px}% ${py}%)`, duration: 0.55, ease: "expo.out" });
        }
      };

      const leave = (e: PointerEvent) => {
        xTo(0);
        yTo(0);
        lx(0);
        ly(0);
        if (ov && fill) {
          const r = el.getBoundingClientRect();
          const px = ((e.clientX - r.left) / r.width) * 100;
          const py = ((e.clientY - r.top) / r.height) * 100;
          gsap.to(ov, { clipPath: `circle(0% at ${px}% ${py}%)`, duration: 0.45, ease: "power3" });
        }
      };

      el.addEventListener("pointermove", move);
      el.addEventListener("pointerenter", enter);
      el.addEventListener("pointerleave", leave);
      return () => {
        el.removeEventListener("pointermove", move);
        el.removeEventListener("pointerenter", enter);
        el.removeEventListener("pointerleave", leave);
      };
    },
  );

  return (
    <a
      ref={root}
      href={href}
      data-cursor={cursorLabel}
      className={cn(buttonVariants({ variant, size }), "relative overflow-hidden", className)}
    >
      <span ref={label} className="relative z-10 inline-flex items-center gap-2">
        {children}
      </span>
      {fill ? (
        <span
          ref={overlay}
          aria-hidden
          className="absolute inset-0 z-20 flex items-center justify-center bg-sun text-ink"
          style={{ clipPath: "circle(0% at 50% 50%)" }}
        >
          <span className="inline-flex items-center gap-2">{children}</span>
        </span>
      ) : null}
    </a>
  );
}
