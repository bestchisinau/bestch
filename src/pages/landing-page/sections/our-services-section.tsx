import { useRef, useState, useEffect, Fragment } from 'react'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'
import { fetchCmsPages, normalizePath, type CmsPage } from '../../../lib/cms'

const sideTexts = ['Check it out!', 'Have a look!', 'Explore!', 'Peek in!', 'Join us!', 'Discover!']

const OurServicesSection = () => {
  const rootRef = useRef(null)
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()
  const [pages, setPages] = useState<CmsPage[]>([])

  useEffect(() => {
    let active = true

    fetchCmsPages().then((result) => {
      if (active) setPages(result)
    })

    return () => {
      active = false
    }
  }, [])

  // The home row only exists so the spreadsheet covers every site page;
  // the events list skips it.
  const events = pages.filter((page) => normalizePath(page.page_url) !== '/')

  return (
    <section ref={rootRef} className="md:py-[130px] py-[50px]">
      <h2 className="text-white/80 md:text-xl text-base font-normal leading-normal md:mb-[21px] pb-[6px]">
        {t('Evenimente noastre')}
      </h2>

      {events.map((event, index) => {
        const className =
          'group flex gap-4 hover:text-black hover:bg-gradient-to-r from-white/60 via-white to-white/60 md:hover:pl-16 hover:pl-6 transition-all md:pt-4 pt-2'
        const content = (
          <>
            <h1 className="xl:text-[100px] text-[7.14vw] leading-none py-4 whitespace-nowrap">
              {t(event.title)}
            </h1>
            <p className="text-white/60 md:text-[20px] text-[10px] self-end  font-normal underline md:mb-[2vw] mb-[3vw] group-hover:opacity-0">
              {t(sideTexts[index % sideTexts.length])}
            </p>
          </>
        )

        return (
          <Fragment key={event.page_url}>
            {event.url_type === 'external' ? (
              <a
                href={event.url}
                id={`service-${index}`}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                onMouseOver={() => setCursorSize(180)}
                onMouseLeave={() => setCursorSize(40)}
              >
                {content}
              </a>
            ) : (
              <Link
                to={event.page_url}
                id={`service-${index}`}
                className={className}
                onMouseOver={() => setCursorSize(180)}
                onMouseLeave={() => setCursorSize(40)}
              >
                {content}
              </Link>
            )}
            {index !== events.length - 1 && (
              <hr className="w-full h-[2px] bg-white opacity-40 rounded-full" />
            )}
          </Fragment>
        )
      })}
    </section>
  )
}

export default OurServicesSection
