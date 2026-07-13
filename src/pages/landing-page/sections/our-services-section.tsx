import { useRef, Fragment } from 'react'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

const OurServicesSection = () => {
  const rootRef = useRef(null)
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  const services = [
    {
      title: 'Web development',
      sideText: 'Check it out!',
      to: '/web-development'
    },
    {
      title: 'Web design',
      sideText: 'Have a look!',
      to: '/web-design'
    },
    {
      title: 'Maintenance',
      sideText: 'Explore!',
      to: '/maintenance-&-support'
    },
    {
      title: 'SEO',
      sideText: 'Peek in!',
      to: '/seo'
    }
  ]

  return (
    <section ref={rootRef} className="md:py-[130px] py-[50px]">
      <h2 className="text-white/80 md:text-xl text-base font-normal leading-normal md:mb-[21px] pb-[6px]">
        {t('Our services')}
      </h2>

      {services.map((service, index) => (
        <Fragment key={service.title}>
          <Link
            to={service.to}
            id={`service-${index}`}
            className="group flex gap-4 hover:text-black hover:bg-gradient-to-r from-white/60 via-white to-white/60 md:hover:pl-16 hover:pl-6 transition-all md:pt-4 pt-2"
            onMouseOver={() => setCursorSize(180)}
            onMouseLeave={() => setCursorSize(40)}
          >
            <h1 className="xl:text-[100px] text-[7.14vw] leading-none py-4 whitespace-nowrap">
              {t(service.title)}
            </h1>
            <p className="text-white/60 md:text-[20px] text-[10px] self-end  font-normal underline md:mb-[2vw] mb-[3vw] group-hover:opacity-0">
              {t(service.sideText)}
            </p>
          </Link>
          {index !== services.length - 1 && (
            <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
          )}
        </Fragment>
      ))}
    </section>
  )
}

export default OurServicesSection
