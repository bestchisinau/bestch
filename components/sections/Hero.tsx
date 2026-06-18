"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLenis } from "@/components/providers/SmoothScroll";
import { LOADED_EVENT } from "@/components/Loader";
import { DUR, EASE, MQ, STAGGER, prefersReducedMotion } from "@/lib/motion";
import { HERO, APPLY_URL } from "@/lib/content";
import { HERO_IMAGE } from "@/lib/gallery";

const yearClass =
  "font-display block font-semibold leading-[0.78] tracking-[-0.04em] text-[clamp(6rem,27vw,24rem)]";

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const pin = useRef<HTMLDivElement>(null);
  const photo = useRef<HTMLDivElement>(null);
  const yearFill = useRef<HTMLSpanElement>(null);
  const underline = useRef<HTMLDivElement>(null);
  const { scrollTo } = useLenis();

  // Intro "set" — plain effect with manual gsap cleanup (not auto-reverted by
  // useGSAP, which was leaving the masked headline stuck at its start value).
  useEffect(() => {
    const root = scope.current;
    if (!root || prefersReducedMotion()) return;

    const masks = root.querySelectorAll("[data-mask-inner]");
    const reveals = root.querySelectorAll("[data-reveal]");
    const tweens: gsap.core.Tween[] = [];
    let played = false;

    const play = () => {
      if (played) return;
      played = true;
      // Standalone fromTo calls with px-based `y` (yPercent on these inline-block
      // spans rendered the start value on completion — a GSAP quirk).
      tweens.push(
        gsap.fromTo(masks, { y: (_i, el) => (el as HTMLElement).offsetHeight * 1.15 }, { y: 0, duration: 0.95, ease: EASE.set, stagger: STAGGER.word }),
        gsap.fromTo(
          photo.current,
          { clipPath: "inset(0 0 100% 0)", filter: "blur(18px)", scale: 1.06 },
          { clipPath: "inset(0 0 0% 0)", filter: "blur(0px)", scale: 1, duration: 1.1, ease: EASE.enter, delay: 0.15 },
        ),
        gsap.fromTo(
          reveals,
          { opacity: 0, y: 24 },
          { opacity: 1, y: 0, duration: DUR.reveal, ease: EASE.enter, stagger: 0.1, delay: 0.25 },
        ),
      );
    };

    if ((window as Window & { __bestLoaded?: boolean }).__bestLoaded) play();
    else window.addEventListener(LOADED_EVENT, play, { once: true });
    const safety = window.setTimeout(play, 2600);

    return () => {
      window.removeEventListener(LOADED_EVENT, play);
      window.clearTimeout(safety);
      tweens.forEach((t) => t.kill());
    };
  }, []);

  // Pinned scrub — desktop only.
  useGSAP(
    () => {
      gsap.registerPlugin(ScrollTrigger);
      if (prefersReducedMotion()) return;
      const root = scope.current!;
      const mm = gsap.matchMedia();
      mm.add(MQ.desktop, () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root,
            start: "top top",
            end: "+=150%",
            pin: pin.current,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
        tl.to(yearFill.current, { clipPath: "inset(0% 0 0 0)", ease: "none" }, 0)
          .fromTo(underline.current, { scaleX: 0 }, { scaleX: 1, ease: "none" }, 0)
          .to(photo.current, { yPercent: -10, ease: "none" }, 0.05)
          .to(root.querySelector("h1"), { letterSpacing: "-0.02em", ease: "none" }, 0);
      });
      return () => mm.revert();
    },
  );

  return (
    <section id="hero" ref={scope} className="relative bg-paper">
      <div ref={pin} className="relative h-[100svh] w-full overflow-hidden">
        {/* "2007" masthead watermark */}
        <div className="pointer-events-none absolute inset-x-0 bottom-[-1.5vw] z-0 flex select-none justify-center md:justify-end md:pr-10">
          <div className="relative leading-none">
            <span
              aria-hidden
              className={yearClass}
              style={{ color: "transparent", WebkitTextStroke: "1.5px var(--color-charcoal)" }}
            >
              {HERO.year}
            </span>
            <span ref={yearFill} data-year-fill aria-hidden className={`${yearClass} absolute inset-0 text-charcoal`}>
              {HERO.year}
            </span>
            <div
              ref={underline}
              data-year-underline
              className="absolute -bottom-1 left-0 h-2 w-full origin-left bg-sun md:h-3"
            />
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 mx-auto flex h-full max-w-[1400px] flex-col px-5 pt-24 md:px-10 md:pt-28">
          <div
            data-reveal
            className="flex items-center justify-between border-b border-ink/10 pb-4 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 md:text-[11px]"
          >
            <span>{HERO.eyebrow}</span>
            <span>{HERO.meta}</span>
          </div>

          <div className="grid flex-1 grid-cols-1 items-center gap-6 py-6 md:grid-cols-12 md:gap-10">
            <div className="md:col-span-7">
              <SplitText
                as="h1"
                lines={HERO.lines}
                className="font-display text-[clamp(3rem,11vw,9.5rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-ink"
              />
              <div data-reveal className="mt-7 flex flex-wrap items-center gap-5 md:mt-10">
                <MagneticButton href={APPLY_URL} variant="brand" size="pill-lg" cursorLabel="JOIN" fill>
                  {HERO.primaryCta}
                </MagneticButton>
                <button
                  onClick={() => scrollTo("#about", { offset: -10 })}
                  className="group inline-flex items-center gap-2 font-sans text-base text-ink/70 transition-colors hover:text-ink"
                >
                  {HERO.secondaryCta}
                  <span className="transition-transform group-hover:translate-y-0.5">↓</span>
                </button>
              </div>
            </div>

            <div className="md:col-span-5">
              <div
                ref={photo}
                data-develop
                className="relative aspect-[4/3] w-full overflow-hidden rounded-card md:aspect-[3/4]"
              >
                <Image
                  src={HERO_IMAGE.full}
                  alt={HERO_IMAGE.alt}
                  placeholder="blur"
                  priority
                  fill
                  sizes="(max-width: 768px) 100vw, 40vw"
                  className="object-cover"
                />
                <span className="absolute left-3 top-3 font-mono text-[10px] uppercase tracking-[0.18em] text-white mix-blend-difference">
                  Frame 001
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
