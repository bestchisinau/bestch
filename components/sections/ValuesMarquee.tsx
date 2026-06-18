"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { prefersReducedMotion } from "@/lib/motion";
import { VALUES, VALUES_INTRO } from "@/lib/content";

function Words() {
  return (
    <>
      {VALUES.map((v) => (
        <span key={v.name} className="inline-flex items-center">
          <span className="value-word px-6 font-display text-[7vw] font-semibold uppercase leading-none tracking-tight text-paper transition-colors duration-200 hover:text-sun md:text-[5vw]">
            {v.name}
          </span>
          <span className="text-[4vw] text-sun md:text-[2.5vw]">✳</span>
        </span>
      ))}
    </>
  );
}

export function ValuesMarquee() {
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      const loop = gsap.to(track.current, {
        xPercent: -50,
        duration: 26,
        ease: "none",
        repeat: -1,
      });

      // Velocity-reactive: scroll punches the marquee speed, which decays back.
      const speed = { cur: 1 };
      let last = window.scrollY;
      const onScroll = () => {
        const y = window.scrollY;
        const delta = y - last;
        last = y;
        speed.cur = gsap.utils.clamp(-4, 4, 1 + delta * 0.06);
      };
      const tick = () => {
        loop.timeScale(speed.cur);
        speed.cur += (1 - speed.cur) * 0.045;
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      gsap.ticker.add(tick);

      return () => {
        window.removeEventListener("scroll", onScroll);
        gsap.ticker.remove(tick);
        loop.kill();
      };
    },
  );

  return (
    <section id="values" className="bg-paper">
      <div className="overflow-hidden bg-charcoal py-6 md:py-8">
        <div ref={track} className="flex w-max flex-nowrap items-center will-change-transform">
          <div className="flex flex-nowrap items-center" aria-hidden>
            <Words />
          </div>
          <div className="flex flex-nowrap items-center">
            <Words />
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-[1400px] px-5 py-16 md:px-10 md:py-28">
        <div className="mb-12 max-w-2xl md:mb-16">
          <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">
            {VALUES_INTRO.index}
          </p>
          <h2
            data-mask
            className="font-display text-[clamp(2rem,5vw,3.5rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-ink"
          >
            <span data-mask-inner className="inline-block">{VALUES_INTRO.headline}</span>
          </h2>
          <p data-reveal className="mt-5 text-lg text-ink/65">
            {VALUES_INTRO.body}
          </p>
        </div>

        <ul className="border-t border-ink/12">
          {VALUES.map((v) => (
            <li
              key={v.name}
              data-reveal
              className="grid grid-cols-[3rem_1fr] items-baseline gap-4 border-b border-ink/12 py-5 md:grid-cols-[5rem_minmax(0,16rem)_1fr] md:py-7"
            >
              <span className="font-mono text-sm text-ink/40">{v.n}</span>
              <span className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                {v.name}
              </span>
              <span className="col-span-2 text-base text-ink/60 md:col-span-1">{v.gloss}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
