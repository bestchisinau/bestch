"use client";

import { createContext, useContext, useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { LENIS_OPTIONS, prefersReducedMotion } from "@/lib/motion";

type ScrollToOptions = { offset?: number; immediate?: boolean };
type LenisCtx = {
  scrollTo: (target: string | number | HTMLElement, opts?: ScrollToOptions) => void;
};

const Ctx = createContext<LenisCtx>({ scrollTo: () => {} });
export const useLenis = () => useContext(Ctx);

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Reduced motion: no smooth scroll, no ticker hijack — native scrolling only.
    if (prefersReducedMotion()) {
      return;
    }

    const lenis = new Lenis(LENIS_OPTIONS);
    lenisRef.current = lenis;

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    // Pin math depends on final font metrics + first images — refresh after both.
    const refresh = () => ScrollTrigger.refresh();
    if (document.fonts?.ready) {
      document.fonts.ready.then(refresh);
    }
    window.addEventListener("load", refresh);

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
      window.removeEventListener("load", refresh);
    };
  }, []);

  const scrollTo: LenisCtx["scrollTo"] = (target, opts) => {
    const lenis = lenisRef.current;
    if (lenis) {
      lenis.scrollTo(target, { offset: opts?.offset ?? 0, immediate: opts?.immediate });
      return;
    }
    // Fallback (reduced motion / no lenis): native scroll.
    if (typeof target === "string") {
      document.querySelector(target)?.scrollIntoView({ behavior: "auto", block: "start" });
    } else if (target instanceof HTMLElement) {
      target.scrollIntoView({ behavior: "auto", block: "start" });
    } else {
      window.scrollTo({ top: target, behavior: "auto" });
    }
  };

  return <Ctx.Provider value={{ scrollTo }}>{children}</Ctx.Provider>;
}
