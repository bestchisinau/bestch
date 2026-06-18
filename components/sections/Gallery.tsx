"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import { Draggable } from "gsap/Draggable";
import { InertiaPlugin } from "gsap/InertiaPlugin";
import { MQ, matches } from "@/lib/motion";
import { GALLERY_INTRO } from "@/lib/content";
import { GALLERY } from "@/lib/gallery";

const FRAMES = GALLERY.slice(0, 16);

export function Gallery() {
  const scope = useRef<HTMLElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [drag, setDrag] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setDrag(matches(MQ.fine) && !matches(MQ.reduce)));
    return () => cancelAnimationFrame(id);
  }, []);

  useGSAP(
    () => {
      if (!drag || !track.current || !viewport.current) return;
      gsap.registerPlugin(Draggable, InertiaPlugin);
      const instances = Draggable.create(track.current, {
        type: "x",
        bounds: viewport.current,
        inertia: true,
        edgeResistance: 0.9,
        dragResistance: 0.05,
        cursor: "none",
      });
      return () => instances.forEach((d) => d.kill());
    },
    { dependencies: [drag] },
  );

  return (
    <section id="gallery" ref={scope} className="overflow-hidden bg-paper">
      <div className="mx-auto max-w-[1400px] px-5 pt-20 md:px-10 md:pt-32">
        <div className="mb-10 flex flex-col justify-between gap-6 md:mb-14 md:flex-row md:items-end">
          <div className="max-w-2xl">
            <p className="mb-5 font-mono text-[11px] uppercase tracking-[0.22em] text-ink/45">
              {GALLERY_INTRO.index}
            </p>
            <h2
              data-mask
              className="font-display text-[clamp(2.25rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-[-0.03em] text-ink"
            >
              <span data-mask-inner className="inline-block">{GALLERY_INTRO.headline}</span>
            </h2>
          </div>
          <p data-reveal className="max-w-sm text-base text-ink/60">
            {GALLERY_INTRO.body}
          </p>
        </div>
      </div>

      {/* Film strip */}
      <div
        ref={viewport}
        data-cursor="DRAG"
        className={`relative pb-20 md:pb-28 ${drag ? "overflow-hidden" : "no-scrollbar snap-x snap-mandatory overflow-x-auto"}`}
      >
        {/* sprocket holes */}
        <div
          aria-hidden
          className="h-4 w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.18) 36%, transparent 38%)",
            backgroundSize: "26px 16px",
            backgroundRepeat: "repeat-x",
          }}
        />
        <div
          ref={track}
          className={`flex w-max gap-4 px-5 py-4 md:gap-6 md:px-10 ${drag ? "will-change-transform" : ""}`}
        >
          {FRAMES.map((img, i) => (
            <figure
              key={img.slug}
              data-develop
              className={`relative shrink-0 snap-start ${
                img.orientation === "portrait"
                  ? "w-[58vw] sm:w-[44vw] md:w-[20vw]"
                  : "w-[80vw] sm:w-[56vw] md:w-[30vw]"
              }`}
            >
              <div
                className={`relative overflow-hidden rounded-card bg-charcoal ${
                  img.orientation === "portrait" ? "aspect-[3/4]" : "aspect-[3/2]"
                }`}
              >
                <Image
                  src={img.thumb}
                  alt={img.alt}
                  fill
                  draggable={false}
                  sizes="(max-width: 768px) 80vw, 30vw"
                  className="select-none object-cover"
                />
              </div>
              <figcaption className="mt-3 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-ink/50">
                <span>{img.label} · 2026</span>
                <span>{String(i + 1).padStart(2, "0")} / {String(FRAMES.length).padStart(2, "0")}</span>
              </figcaption>
            </figure>
          ))}
        </div>
        <div
          aria-hidden
          className="h-4 w-full"
          style={{
            backgroundImage:
              "radial-gradient(circle, rgba(0,0,0,0.18) 36%, transparent 38%)",
            backgroundSize: "26px 16px",
            backgroundRepeat: "repeat-x",
          }}
        />
        <p className="mt-6 px-5 font-mono text-[11px] uppercase tracking-[0.2em] text-ink/45 md:px-10">
          {drag ? "↤ Drag to explore" : "Swipe to explore →"} · {GALLERY_INTRO.credit}
        </p>
      </div>
    </section>
  );
}
