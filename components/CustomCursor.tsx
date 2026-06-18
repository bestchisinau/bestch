"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MQ, matches } from "@/lib/motion";

/**
 * Bespoke cursor: a blend-difference dot that tracks precisely, plus a
 * contextual disc that grows and labels itself from the hovered element's
 * `data-cursor` value (e.g. "VIEW", "DRAG", "JOIN", "SCROLL").
 * Fine-pointer only; disabled under reduced motion (never blocks keyboard).
 */
export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const discRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!matches(MQ.fine) || matches(MQ.reduce)) return;
    const dot = dotRef.current!;
    const disc = discRef.current!;
    const label = labelRef.current!;

    document.documentElement.classList.add("cursor-active");
    gsap.set([dot, disc], { xPercent: -50, yPercent: -50, opacity: 0 });
    gsap.set(disc, { scale: 0 });

    const dx = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3" });
    const dy = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3" });
    const cx = gsap.quickTo(disc, "x", { duration: 0.32, ease: "power3" });
    const cy = gsap.quickTo(disc, "y", { duration: 0.32, ease: "power3" });

    let shown = false;
    const move = (e: PointerEvent) => {
      if (!shown) {
        shown = true;
        gsap.to([dot, disc], { opacity: 1, duration: 0.3 });
      }
      dx(e.clientX);
      dy(e.clientY);
      cx(e.clientX);
      cy(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      if (target) {
        label.textContent = target.dataset.cursor || "";
        gsap.to(disc, { scale: 1, duration: 0.4, ease: "expo.out" });
        gsap.to(dot, { scale: 0, duration: 0.3 });
      } else {
        gsap.to(disc, { scale: 0, duration: 0.3, ease: "power3" });
        gsap.to(dot, { scale: 1, duration: 0.3 });
      }
    };

    const leave = () => gsap.to([dot, disc], { opacity: 0, duration: 0.25 });

    window.addEventListener("pointermove", move, { passive: true });
    window.addEventListener("pointerover", over, { passive: true });
    document.addEventListener("pointerleave", leave);

    return () => {
      document.documentElement.classList.remove("cursor-active");
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerover", over);
      document.removeEventListener("pointerleave", leave);
    };
  });

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[200] hidden md:block">
      <div
        ref={dotRef}
        className="fixed left-0 top-0 h-2.5 w-2.5 rounded-full bg-white opacity-0 mix-blend-difference"
      />
      <div
        ref={discRef}
        className="fixed left-0 top-0 flex h-20 w-20 items-center justify-center rounded-full bg-charcoal opacity-0"
      >
        <span
          ref={labelRef}
          className="font-mono text-[10px] uppercase tracking-[0.18em] text-white"
        />
      </div>
    </div>
  );
}
