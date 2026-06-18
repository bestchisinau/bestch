"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { SITE } from "@/lib/content";

export const LOADED_EVENT = "best:loaded";

/**
 * Print-registration loader: a charcoal plate with a Clash counter (00→100)
 * and a 1px sunflower rule. At 100 it clip-splits away and fires LOADED_EVENT
 * so the hero "sets" on cue. Skipped instantly for reduced motion and repeat
 * visits (sessionStorage). Locks scroll while visible.
 */
export function Loader() {
  const root = useRef<HTMLDivElement>(null);
  const num = useRef<HTMLSpanElement>(null);
  const rule = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = root.current!;
      const fire = () => {
        (window as Window & { __bestLoaded?: boolean }).__bestLoaded = true;
        window.dispatchEvent(new Event(LOADED_EVENT));
      };

      const seen = typeof sessionStorage !== "undefined" && sessionStorage.getItem("best:seen");
      if (prefersReducedMotion() || seen) {
        gsap.set(el, { display: "none" });
        fire();
        return;
      }
      try {
        sessionStorage.setItem("best:seen", "1");
      } catch {}

      document.documentElement.style.overflow = "hidden";
      const unlock = () => {
        document.documentElement.style.overflow = "";
      };

      const counter = { v: 0 };
      const tl = gsap.timeline({
        onComplete: () => {
          unlock();
          gsap.set(el, { display: "none" });
          fire();
        },
      });

      tl.to(counter, {
        v: 100,
        duration: 1.25,
        ease: "power2.inOut",
        onUpdate: () => {
          if (num.current) num.current.textContent = String(Math.round(counter.v)).padStart(2, "0");
        },
      })
        .fromTo(rule.current, { scaleX: 0 }, { scaleX: 1, duration: 1.25, ease: "power2.inOut" }, 0)
        .to(el, { clipPath: "inset(0 0 100% 0)", duration: 0.75, ease: "expo.inOut" }, ">-0.05");
    },
  );

  return (
    <div
      ref={root}
      className="fixed inset-0 z-[300] flex flex-col justify-between bg-charcoal p-6 md:p-10"
      style={{ clipPath: "inset(0 0 0% 0)" }}
    >
      <div className="flex items-start justify-between font-mono text-[11px] uppercase tracking-[0.22em] text-paper/60">
        <span>{SITE.local}</span>
        <span>Est. 2007</span>
      </div>
      <div className="flex items-end justify-between">
        <span
          ref={num}
          className="font-display text-[22vw] font-semibold leading-none tracking-tighter text-paper md:text-[14vw]"
        >
          00
        </span>
        <span className="mb-3 font-mono text-[11px] uppercase tracking-[0.22em] text-sun md:mb-6">
          Developing…
        </span>
      </div>
      <div className="relative h-px w-full bg-paper/15">
        <div ref={rule} className="absolute inset-y-0 left-0 w-full origin-left bg-sun" />
      </div>
    </div>
  );
}
