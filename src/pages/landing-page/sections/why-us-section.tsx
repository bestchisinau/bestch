import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

const WhyUsSection = () => {
  const rootRef = useRef<HTMLDivElement | null>(null)
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const context = gsap.context(() => {
      gsap.to('#span', {
        scrollTrigger: {
          trigger: '#span',
          scrub: true,
          start: 'bottom bottom',
          end: 'top +=300'
        },
        stagger: 1.5,
        opacity: 1
      })
    }, rootRef.current!)

    return () => context.revert()
  }, [])

  const spans = [
    { innerText: 'At Media Unbothered, we redefine the narrative.' },
    {
      innerText:
        'Choose us for campaigns that demand attention, where every pixel carries purpose.'
    },
    {
      innerText:
        'Unleash the unbothered spirit—your journey to an unforgettable story starts here.'
    }
  ]

  return (
    <section ref={rootRef} className="leading-5 md:py-[110px] py-[50px]">
      <h2 className="text-white/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {t('Why us')}
      </h2>

      <p
        className="text-white md:text-[35px] text-[25px] font-normal leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {spans.map((span) => (
          <span key={span.innerText} id="span" className="opacity-10">
            {t(span.innerText)}{' '}
          </span>
        ))}
      </p>
    </section>
  )
}

export default WhyUsSection
