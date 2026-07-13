import { useRef, useEffect, ReactNode } from 'react'
import gsap from 'gsap'

type GsapMagneticProps = {
  children: ReactNode
}

const GsapMagnetic = ({ children }: GsapMagneticProps) => {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const xTo = gsap.quickTo(ref.current, 'x', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    })
    const yTo = gsap.quickTo(ref.current, 'y', {
      duration: 1,
      ease: 'elastic.out(1, 0.3)'
    })

    const mouseMove = (e: MouseEvent) => {
      const { width, height, top, left } = ref.current!.getBoundingClientRect()
      const x = e.clientX - (left + width / 2)
      const y = e.clientY - (top + height / 2)

      xTo(x)
      yTo(y)
    }

    const mouseLeave = () => {
      xTo(0)
      yTo(0)
    }

    ref.current!.addEventListener('mousemove', mouseMove)
    ref.current!.addEventListener('mouseleave', mouseLeave)

    // return () => {
    //   ref.current!.removeEventListener('mousemove', mouseMove)
    //   ref.current!.removeEventListener('mouseleave', mouseLeave)
    // }
  }, [])

  return (
    <>
      <div ref={ref} className="xl:flex hidden justify-center items-center">
        {children}
      </div>
      <div className="flex xl:hidden justify-center items-center">{children}</div>
    </>
  )
}

export default GsapMagnetic
