"use client";

import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { DUR, EASE, STAGGER, prefersReducedMotion } from "@/lib/motion";

/**
 * Page-wide reveal engine. Batches the three shared primitives so every
 * section speaks one motion language without per-section boilerplate:
 *   [data-mask] > [data-mask-inner]  — letterpress "set" (type rises)
 *   [data-reveal]                    — fade / slide up
 *   [data-develop]                   — darkroom "develop" (blur+clip+scale)
 *
 * Hero owns its own timeline and does NOT use these attributes, so there is
 * no double-trigger. Reduced motion: do nothing (CSS shows final states).
 */
export function Reveals() {
  useGSAP(() => {
    if (prefersReducedMotion()) return;
    gsap.registerPlugin(ScrollTrigger);

    // The hero owns its own intro timeline — exclude it from the page batches.
    const notHero = (el: Element) => !el.closest("#hero");

    const run = () => {
      const masks = gsap.utils.toArray<HTMLElement>("[data-mask] > [data-mask-inner]").filter(notHero);
      const reveals = gsap.utils.toArray<HTMLElement>("[data-reveal]").filter(notHero);
      const develops = gsap.utils.toArray<HTMLElement>("[data-develop]").filter(notHero);

      ScrollTrigger.batch(masks, {
        start: "top 92%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { y: (_i, el) => (el as HTMLElement).offsetHeight * 1.15 },
            { y: 0, duration: DUR.reveal, ease: EASE.set, stagger: STAGGER.word, overwrite: "auto" },
          ),
      });

      ScrollTrigger.batch(reveals, {
        start: "top 88%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { opacity: 0, y: 32 },
            { opacity: 1, y: 0, duration: DUR.reveal, ease: EASE.enter, stagger: STAGGER.item, overwrite: "auto" },
          ),
      });

      ScrollTrigger.batch(develops, {
        start: "top 85%",
        onEnter: (els) =>
          gsap.fromTo(
            els,
            { clipPath: "inset(0 0 100% 0)", filter: "blur(18px)", scale: 1.06 },
            {
              clipPath: "inset(0 0 0% 0)",
              filter: "blur(0px)",
              scale: 1,
              duration: DUR.slow,
              ease: EASE.enter,
              stagger: 0.12,
              overwrite: "auto",
            },
          ),
      });

      ScrollTrigger.refresh();
    };

    if (document.fonts?.ready) document.fonts.ready.then(run);
    else run();
  });

  return null;
}
