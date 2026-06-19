"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MQ, matches } from "@/lib/motion";
import { ACTIVITIES, ACTIVITIES_INTRO } from "@/lib/content";
import { ACTIVITY_THUMBS } from "@/lib/gallery";

const thumbFor = (i: number) => ACTIVITY_THUMBS[i % ACTIVITY_THUMBS.length];

export function Activities() {
  const scope = useRef<HTMLElement>(null);
  const thumb = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!matches(MQ.fine) || matches(MQ.reduce)) return;
      const thumbEl = thumb.current!;
      const imgs = gsap.utils.toArray<HTMLElement>(thumbEl.querySelectorAll("[data-thumb-img]"));
      const rows = gsap.utils.toArray<HTMLElement>(scope.current!.querySelectorAll("[data-row]"));

      gsap.set(thumbEl, { xPercent: -50, yPercent: -50, autoAlpha: 0, scale: 0.85 });
      const xTo = gsap.quickTo(thumbEl, "x", { duration: 0.5, ease: "power3" });
      const yTo = gsap.quickTo(thumbEl, "y", { duration: 0.5, ease: "power3" });

      const cleanups: Array<() => void> = [];
      rows.forEach((row, i) => {
        const name = row.querySelector("[data-row-name]");
        const enter = () => {
          imgs.forEach((im, k) => gsap.to(im, { autoAlpha: k === i ? 1 : 0, duration: 0.25 }));
          gsap.to(thumbEl, { autoAlpha: 1, scale: 1, duration: 0.4, ease: "expo.out" });
          gsap.to(name, { x: 24, duration: 0.4, ease: "power3" });
        };
        const move = (e: PointerEvent) => {
          xTo(e.clientX);
          yTo(e.clientY);
        };
        const leave = () => {
          gsap.to(thumbEl, { autoAlpha: 0, scale: 0.85, duration: 0.3 });
          gsap.to(name, { x: 0, duration: 0.4, ease: "power3" });
        };
        row.addEventListener("pointerenter", enter);
        row.addEventListener("pointermove", move);
        row.addEventListener("pointerleave", leave);
        cleanups.push(() => {
          row.removeEventListener("pointerenter", enter);
          row.removeEventListener("pointermove", move);
          row.removeEventListener("pointerleave", leave);
        });
      });
      return () => cleanups.forEach((c) => c());
    },
  );

  return (
    <section id="activities" ref={scope} className="bg-surface">
      <div className="mx-auto max-w-[1400px] px-5 py-20 md:px-10 md:py-32">
        <div className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">
              {ACTIVITIES_INTRO.index}
            </p>
            <h2
              data-mask
              className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink"
            >
              <span data-mask-inner className="inline-block">{ACTIVITIES_INTRO.headline}</span>
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-base text-ink/60">
            {ACTIVITIES_INTRO.body}
          </p>
        </div>

        {/* Desktop: contact-sheet rows */}
        <div className="hidden border-t border-ink/12 md:block">
          {ACTIVITIES.map((a) => (
            <div
              key={a.name}
              data-row
              data-cursor="VIEW"
              data-reveal
              className="group grid cursor-default grid-cols-[4rem_1fr_auto] items-center gap-6 border-b border-ink/12 py-7 transition-colors hover:bg-paper/60"
            >
              <span className="font-mono text-sm text-ink/35">{a.n}</span>
              <span
                data-row-name
                className="font-display text-[clamp(1.75rem,3.6vw,3rem)] font-semibold leading-none tracking-tight text-ink"
              >
                {a.name}
              </span>
              <span className="flex items-center gap-5">
                <span className="hidden max-w-[18rem] text-right text-sm text-ink/55 lg:block">
                  {a.blurb.split(". ")[0]}.
                </span>
                <span className="whitespace-nowrap rounded-pill bg-sun px-4 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-surface">
                  {a.chip}
                </span>
              </span>
            </div>
          ))}
        </div>

        {/* Floating thumbnail (desktop hover) */}
        <div
          ref={thumb}
          aria-hidden
          className="pointer-events-none fixed left-0 top-0 z-20 hidden aspect-[4/3] w-[280px] overflow-hidden rounded-card opacity-0 shadow-2xl md:block"
        >
          {ACTIVITIES.map((a, i) => (
            <div key={a.name} data-thumb-img className="absolute inset-0">
              <Image
                src={thumbFor(i).full}
                alt={thumbFor(i).alt}
                fill
                sizes="280px"
                className="object-cover"
              />
            </div>
          ))}
        </div>

        {/* Mobile: accordion */}
        <div className="md:hidden">
          <Accordion>
            {ACTIVITIES.map((a) => (
              <AccordionItem key={a.name} value={a.name}>
                <AccordionTrigger className="py-5 text-left">
                  <span className="flex flex-col gap-1">
                    <span className="font-display text-2xl font-semibold tracking-tight text-ink">
                      {a.name}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-[0.12em] text-ink/45">
                      {a.chip}
                    </span>
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="relative mb-4 aspect-[4/3] w-full overflow-hidden rounded-card">
                    <Image
                      src={thumbFor(ACTIVITIES.indexOf(a)).full}
                      alt={thumbFor(ACTIVITIES.indexOf(a)).alt}
                      fill
                      sizes="100vw"
                      className="object-cover"
                    />
                  </div>
                  <p className="text-base text-ink/70">{a.blurb}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
