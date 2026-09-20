import { useEffect, useRef } from 'react'
import { m, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion'

const LINES = [92, 78, 86, 64, 90, 72, 48]

const PageLines = () => (
  <span className="rg-book__lines">
    {LINES.map((width) => (
      <span key={width} style={{ width: `${width}%` }} />
    ))}
  </span>
)

/**
 * The only scroll-linked motion on the page: this year's task is to turn a
 * page, so scrolling through the challenge turns one.
 */
const Book = () => {
  // The measured element must never be the transformed one.
  const bookRef = useRef<HTMLDivElement>(null)
  const reduced = useReducedMotion() ?? false
  const { scrollYProgress } = useScroll({ target: bookRef, offset: ['start 0.85', 'end 0.4'] })
  const angle = useTransform(scrollYProgress, [0, 1], [-6, -174])
  const rotateY = useSpring(angle, { stiffness: 140, damping: 28, mass: 0.6 })

  // The display font can land after the scroll range was measured and push the
  // book down the page. One resize makes framer-motion measure again; polling
  // with trackContentSize would keep a frame loop alive for the whole visit.
  useEffect(() => {
    let mounted = true

    document.fonts.ready.then(() => {
      if (mounted) window.dispatchEvent(new Event('resize'))
    })

    return () => {
      mounted = false
    }
  }, [])

  return (
    <div ref={bookRef} className="rg-book" aria-hidden="true">
      <div className="rg-book__page">
        <PageLines />
      </div>
      <div className="rg-book__page">
        <PageLines />
      </div>
      <m.div className="rg-book__leaf" style={{ rotateY: reduced ? -32 : rotateY }}>
        <span className="rg-book__face">
          <PageLines />
        </span>
        <span className="rg-book__face rg-book__face--back" />
      </m.div>
    </div>
  )
}

export default Book
