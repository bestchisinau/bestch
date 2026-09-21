import type { Variants, ViewportOptions } from 'framer-motion'

export const EASE = [0.16, 1, 0.3, 1] as const

export const DURATION = { fade: 0.4, base: 0.6, wipe: 0.8 }

export const VIEWPORT: ViewportOptions = { once: true, amount: 0.3, margin: '0px 0px -10% 0px' }

// Tall blocks (tables, long lists) may never show 30% of themselves at once.
export const VIEWPORT_TALL: ViewportOptions = { once: true, amount: 'some', margin: '0px 0px -15% 0px' }

export const cascade: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } }
}

// Rows travel along the grid (x), never up from below.
export const cascadeItem: Variants = {
  hidden: { opacity: 0, x: -12 },
  show: { opacity: 1, x: 0, transition: { duration: DURATION.base, ease: EASE } }
}
