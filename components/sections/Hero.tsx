"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { SplitText } from "@/components/ui/SplitText";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useLenis } from "@/components/providers/SmoothScroll";
import { LOADED_EVENT } from "@/components/Loader";
import { DUR, EASE, STAGGER, prefersReducedMotion } from "@/lib/motion";
import { HERO, APPLY_URL } from "@/lib/content";
import { HERO_IMAGE } from "@/lib/gallery";

export function Hero() {
  const scope = useRef<HTMLElement>(null);
  const photo = useRef<HTMLDivElement>(null);
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
          {
            clipPath: "inset(0 0 0% 0)",
            filter: "blur(0px)",
            scale: 1,
            duration: 1.1,
            ease: EASE.enter,
            delay: 0.15,
            onStart: () => gsap.set(photo.current, { willChange: "clip-path, filter, transform" }),
            // The full-bleed sticky image stays on screen the whole scroll —
            // release its filter/clip layers so it isn't a permanent GPU layer.
            onComplete: () => gsap.set(photo.current, { clipPath: "none", filter: "none", willChange: "auto" }),
          },
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

  // Sticky backdrop: the hero stays pinned at top:0 while the opaque sections
  // after it (starting with #about) scroll up and over it (see app/page.tsx).
  return (
    <section
      id="hero"
      ref={scope}
      className="sticky top-0 z-0 h-[100svh] w-full overflow-hidden bg-charcoal"
    >
      {/* Full-bleed background photo (develops from blur on load) */}
      <div ref={photo} data-develop className="absolute inset-0">
        <Image
          src={HERO_IMAGE.full}
          alt={HERO_IMAGE.alt}
          placeholder="blur"
          preload
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>

      {/* Dark scrim — keeps the centered text legible over any frame */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/45 to-black/65"
      />

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-5 text-center md:px-10">
        <SplitText
          as="h1"
          lines={HERO.lines}
          accent="2007"
          className="font-display text-[clamp(2.5rem,8vw,7rem)] font-semibold leading-[0.95] tracking-[-0.03em] text-white"
        />

        <div
          data-reveal
          className="mt-9 flex flex-wrap items-center justify-center gap-5 md:mt-12"
        >
          <MagneticButton
            href={APPLY_URL}
            size="pill-lg"
            fill
            className="bg-surface text-ink hover:bg-surface"
          >
            {HERO.primaryCta}
          </MagneticButton>
          <button
            onClick={() => scrollTo("#about", { offset: -10 })}
            className="group inline-flex items-center gap-2 font-sans text-base text-paper/80 transition-colors hover:text-white"
          >
            {HERO.secondaryCta}
            <span className="transition-transform group-hover:translate-y-0.5">↓</span>
          </button>
        </div>
      </div>
    </section>
  );
}
