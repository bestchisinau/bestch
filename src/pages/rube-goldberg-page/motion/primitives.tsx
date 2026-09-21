import { LazyMotion, MotionConfig, domAnimation, m, useReducedMotion } from 'framer-motion'
import type { ReactNode } from 'react'
import { DURATION, EASE, VIEWPORT, VIEWPORT_TALL, cascade, cascadeItem } from './tokens'

/**
 * Four motions, one per role: rules draw, statements and photographs wipe,
 * copy fades, table rows cascade. Anything else on the page stays still.
 *
 * Only opacity, transform and clip-path are animated, so nothing shifts layout
 * and the header's hash links always land on content that can reveal itself.
 */

// Looked up at module level: calling m(tag) during render would create a new
// component type (and remount the subtree) on every render.
const TAGS = { div: m.div, p: m.p, li: m.li, ol: m.ol, ul: m.ul, figure: m.figure }
type Tag = keyof typeof TAGS

export const MotionProvider = ({ children }: { children: ReactNode }) => (
  // reducedMotion="user" snaps every transform; clip-path is handled in Wipe.
  <MotionConfig reducedMotion="user">
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  </MotionConfig>
)

type DrawRuleProps = { className?: string; delay?: number; onMount?: boolean; hair?: boolean }

export const DrawRule = ({ className = '', delay = 0, onMount = false, hair = false }: DrawRuleProps) => (
  // The outer span keeps its full size for the viewport observer; only the
  // inner line is scaled.
  <m.span
    aria-hidden="true"
    className={['rg-rule', hair && 'rg-rule--hair', className].filter(Boolean).join(' ')}
    initial="hidden"
    {...(onMount ? { animate: 'show' } : { whileInView: 'show', viewport: VIEWPORT })}
  >
    <m.span
      className="rg-rule__line"
      style={{ originX: 0 }}
      variants={{ hidden: { scaleX: 0 }, show: { scaleX: 1 } }}
      transition={{ duration: DURATION.base, ease: EASE, delay }}
    />
  </m.span>
)

const WIPE_HIDDEN = {
  left: 'inset(0% 100% 0% 0%)',
  top: 'inset(0% 0% 100% 0%)',
  bottom: 'inset(100% 0% 0% 0%)'
}

type WipeProps = {
  children: ReactNode
  className?: string
  from?: keyof typeof WIPE_HIDDEN
  delay?: number
}

export const Wipe = ({ children, className, from = 'bottom', delay = 0 }: WipeProps) => {
  // clip-path is not a transform, so MotionConfig leaves it running for
  // people who asked for less motion. Give them a plain fade instead.
  const reduced = useReducedMotion() ?? false
  const variants = reduced
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : { hidden: { clipPath: WIPE_HIDDEN[from] }, show: { clipPath: 'inset(0% 0% 0% 0%)' } }

  return (
    <m.div className={className} initial="hidden" whileInView="show" viewport={VIEWPORT}>
      <m.div
        className="rg-wipe"
        variants={variants}
        transition={{ duration: reduced ? DURATION.fade : DURATION.wipe, ease: EASE, delay }}
      >
        {children}
      </m.div>
    </m.div>
  )
}

type FadeProps = { children: ReactNode; as?: Tag; className?: string; delay?: number; tall?: boolean }

export const Fade = ({ children, as = 'div', className, delay = 0, tall = false }: FadeProps) => {
  const Component = TAGS[as] as typeof m.div

  return (
    <Component
      className={className}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={tall ? VIEWPORT_TALL : VIEWPORT}
      transition={{ duration: DURATION.fade, ease: EASE, delay }}
    >
      {children}
    </Component>
  )
}

type CascadeProps = { children: ReactNode; as?: Tag; className?: string }

export const Cascade = ({ children, as = 'ol', className }: CascadeProps) => {
  const Component = TAGS[as] as typeof m.div

  return (
    <Component className={className} variants={cascade} initial="hidden" whileInView="show" viewport={VIEWPORT_TALL}>
      {children}
    </Component>
  )
}

export const CascadeItem = ({ children, as = 'li', className }: CascadeProps) => {
  const Component = TAGS[as] as typeof m.div

  return (
    <Component className={className} variants={cascadeItem}>
      {children}
    </Component>
  )
}
