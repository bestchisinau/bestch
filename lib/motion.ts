// Shared motion vocabulary. One fixed set of easings/durations so every
// island animates in the same language ("set" for type, "develop" for photos).
// Pure constants only (no gsap import) — safe to import from anywhere.

export const EASE = {
  set: "power4.out", // letterpress arrival of type
  enter: "expo.out", // general entrances
  layout: "power2.inOut", // scrub / layout moves
  big: "expo.out", // loader + large scale moments
  press: "back.out(1.7)", // magnetic / tactile feedback
} as const;

export const DUR = {
  fast: 0.4,
  reveal: 0.8,
  slow: 1.2,
} as const;

export const STAGGER = {
  word: 0.08,
  line: 0.1,
  item: 0.07,
} as const;

/** Lenis smooth-scroll config — single source of scroll truth. */
export const LENIS_OPTIONS = {
  lerp: 0.09,
  smoothWheel: true,
  wheelMultiplier: 1,
  touchMultiplier: 1.6,
} as const;

/** Media queries used with gsap.matchMedia and plain matchMedia. */
export const MQ = {
  desktop: "(min-width: 768px)",
  mobile: "(max-width: 767px)",
  reduce: "(prefers-reduced-motion: reduce)",
  noReduce: "(prefers-reduced-motion: no-preference)",
  fine: "(pointer: fine)",
} as const;

export const matches = (q: string): boolean =>
  typeof window !== "undefined" && window.matchMedia(q).matches;

export const prefersReducedMotion = (): boolean => matches(MQ.reduce);
