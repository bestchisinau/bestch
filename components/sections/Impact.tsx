"use client";

import { useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/components/ui/SplitText";
import { prefersReducedMotion } from "@/lib/motion";
import { IMPACT, STATS } from "@/lib/content";
import { IMPACT_IMAGE } from "@/lib/gallery";

const parse = (value: string) => {
  const m = value.match(/^([\d.]+)(.*)$/);
  if (!m) return { num: 0, decimals: 0, suffix: value };
  const decimals = m[1].includes(".") ? m[1].split(".")[1].length : 0;
  return { num: parseFloat(m[1]), decimals, suffix: m[2] };
};

export function Impact() {
  const scope = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (prefersReducedMotion()) return;
      gsap.registerPlugin(ScrollTrigger);
      const nums = gsap.utils.toArray<HTMLElement>(scope.current!.querySelectorAll("[data-count]"));
      ScrollTrigger.create({
        trigger: scope.current,
        start: "top 72%",
        once: true,
        onEnter: () => {
          nums.forEach((el) => {
            const target = parseFloat(el.dataset.count || "0");
            const dec = parseInt(el.dataset.decimals || "0", 10);
            const suffix = el.dataset.suffix || "";
            const o = { v: 0 };
            gsap.to(o, {
              v: target,
              duration: 1.5,
              ease: "power2.out",
              onUpdate: () => {
                el.textContent = o.v.toFixed(dec) + suffix;
              },
            });
          });
        },
      });
    },
  );

  return (
    <section id="impact" ref={scope} className="relative overflow-hidden bg-charcoal text-paper">
      {/* Background photo + scrim */}
      <div aria-hidden className="absolute inset-0">
        <Image src={IMPACT_IMAGE.full} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-charcoal/80" />
      </div>

      <div className="relative z-10 mx-auto max-w-[1400px] px-5 py-24 md:px-10 md:py-36">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-paper/50">
              {IMPACT.index}
            </p>
            <SplitText
              as="h2"
              lines={IMPACT.headline}
              className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-paper"
            />
            <p data-reveal className="mt-6 max-w-md text-lg text-paper/65">
              {IMPACT.body}
            </p>
          </div>

          <div className="grid grid-cols-2 gap-px self-center overflow-hidden rounded-card bg-paper/10">
            {STATS.map((stat) => {
              const { num, decimals, suffix } = parse(stat.value);
              return (
                <div
                  key={stat.label}
                  className={`flex flex-col gap-3 p-6 md:p-8 ${
                    stat.accent ? "bg-sun text-surface" : "bg-charcoal text-paper"
                  }`}
                >
                  <span
                    data-count={num}
                    data-decimals={decimals}
                    data-suffix={suffix}
                    className="font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-none tracking-tight"
                  >
                    {stat.value}
                  </span>
                  <span
                    className={`text-sm leading-snug ${stat.accent ? "text-ink/70" : "text-paper/55"}`}
                  >
                    {stat.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
