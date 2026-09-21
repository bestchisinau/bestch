import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Link } from 'react-router-dom'
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
    {
      innerText:
        'BEST Chișinău este o comunitate formată din studenți cu interese, idei și personalități diferite, uniți de dorința de a face lucruri care ne plac și de a le face împreună.'
    },
    {
      innerText: 'Organizăm evenimente, învățăm unii de la alții și ne distrăm pe parcurs.'
    },
    {
      innerText:
        'În timp, această experiență ajunge să însemne oameni noi, dezvoltare continuă și multe amintiri.'
    }
  ]

  return (
    <section ref={rootRef} className="leading-5 md:py-[110px] py-[50px]">
      <h2 className="text-white/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {t('Cine suntem noi?')}
      </h2>

      <p
        className="text-white md:text-[35px] text-[25px] font-normal leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {spans.map((span, index) => (
          <span key={span.innerText} id="span" className="opacity-10">
            {t(span.innerText)}{' '}
            {index === spans.length - 1 && (
              <Link
                to="/about-us"
                className="group relative inline-block"
                onMouseOver={() => setCursorSize(80)}
                onMouseLeave={() => setCursorSize(40)}
              >
                {t('Află mai multe despre noi.')}
                {/* Underline retracts to the left on hover: width shrinks until gone. */}
                <span
                  aria-hidden
                  className="absolute left-0 -bottom-[8px] h-[3px] w-full bg-white origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500 ease-out"
                />
              </Link>
            )}
          </span>
        ))}
      </p>
    </section>
  )
}

export default WhyUsSection
