import { useTranslation } from 'react-i18next'
import useCursorSize from '../lib/use-cursor-size'

const TableOfContents = () => {
  const { t } = useTranslation()
  const { setCursorSize } = useCursorSize()

  //! Requires optimization (see lodash)
  const contents = [
    {
      title: 'What information do we collect?',
      id: 'info-we-collect'
    },
    {
      title: 'How do we process your information?',
      id: 'info-we-process'
    },
    {
      title: 'When and with whom do we share your personal information?',
      id: 'info-we-share'
    },
    {
      title: 'Do we use cookies and other tracking technologies?',
      id: 'cookies-and-tracking'
    },
    {
      title: 'Is your information transferred internationally?',
      id: 'info-we-transfer'
    },
    {
      title: 'How long do we keep your information?',
      id: 'info-we-keep'
    },
    {
      title: 'Do we collect information from minors?',
      id: 'info-from-minors'
    },
    {
      title: 'What are your privacy rights?',
      id: 'privacy-rights'
    },
    {
      title: 'Controls for do-not-track features',
      id: 'non-tracking'
    },
    {
      title: 'Do we make updates to this notice?',
      id: 'updates-to-notice'
    },
    {
      title: 'How can you contact us about this notice?',
      id: 'contact-us'
    },
    {
      title: 'How can you review, update, or delete the data we collect from you?',
      id: 'data-we-manipulate'
    }
  ]

  return (
    <div className="pl-10 sticky top-8">
      <h2 className="text-2xl font-semibold mb-4">{t('Table of Contents')}</h2>

      <ol className="list-decimal pl-10">
        {contents.map((content) => (
          <li
            key={content.title}
            className="lg:text-base text-sm hover:underline cursor-pointer leading-6 mb-1.5"
            onClick={() => {
              const section = document.getElementById(content.id)
              section?.scrollIntoView({ behavior: 'smooth' })
            }}
            onMouseOver={() => setCursorSize(20)}
            onMouseLeave={() => setCursorSize(40)}
          >
            {t(content.title)}
          </li>
        ))}
      </ol>

      <hr className="w-full h-[2px] bg-white opacity-40 rounded-full mt-8 mb-4" />

      <button
        className="text-base flex items-center gap-2"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        {t('Back to top')}
        <img src="./src/assets/arrow-up.svg" className="w-4" />
      </button>
    </div>
  )
}

export default TableOfContents
