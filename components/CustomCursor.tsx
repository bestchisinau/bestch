"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { MQ, matches } from "@/lib/motion";

/**
 * Contextual cursor disc. The native OS cursor shows everywhere by default;
 * only when the pointer is over an element marked `data-cursor` (e.g. the
 * gallery "DRAG" strip or an Activities "VIEW" row) does the native cursor
 * hide (via CSS) and this labeled disc appear in its place. Fine-pointer only;
 * disabled under reduced motion; desktop only.
 */
export function CustomCursor() {
  const discRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useGSAP(() => {
    if (!matches(MQ.fine) || matches(MQ.reduce)) return;
    const disc = discRef.current!;
    const label = labelRef.current!;

    document.documentElement.classList.add("cursor-active");
    gsap.set(disc, { xPercent: -50, yPercent: -50, scale: 0, autoAlpha: 0 });

    const cx = gsap.quickTo(disc, "x", { duration: 0.3, ease: "power3" });
    const cy = gsap.quickTo(disc, "y", { duration: 0.3, ease: "power3" });

    let active = false;

    const move = (e: PointerEvent) => {
      cx(e.clientX);
      cy(e.clientY);
    };

    const over = (e: PointerEvent) => {
      const target = (e.target as HTMLElement)?.closest?.("[data-cursor]") as HTMLElement | null;
      if (target) {
        label.textContent = target.dataset.cursor || "";
        if (!active) {
          active = true;
          // Snap to the pointer so the disc doesn't fly in from a stale spot.
          gsap.set(disc, { x: e.clientX, y: e.clientY });
          gsap.to(disc, { autoAlpha: 1, scale: 1, duration: 0.35, ease: "expo.out" });
        }
      } else if (active) {
        active = false;
        gsap.to(disc, { autoAlpha: 0, scale: 0, duration: 0.25, ease: "power3" });
      }
    };

    const leave = () => {
      active = false;
      gsap.to(disc, { autoAlpha: 0, scale: 0, duration: 0.2 });
    };

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
