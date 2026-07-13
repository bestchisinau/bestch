import { useTranslation } from 'react-i18next'
import data from '../data/what-info-we-collect.json'

const WhatInfoWeCollect = () => {
  const { t } = useTranslation()

  return (
    <section id="info-we-collect" className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      <h3 className="text-2xl mb-4 font-semibold opacity-80">
        {t(data.personalInfoYouDisclose.title)}
      </h3>

      {data.personalInfoYouDisclose.content.map((content, index) => (
        <p
          key={`info-${index}`}
          className={`md:text-2xl text-lg opacity-80 ${
            index !== data.personalInfoYouDisclose.content.length - 1 && 'mb-4'
          }`}
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      ))}

      <h3 className="text-2xl my-4 font-semibold opacity-80">
        {data.infoAutomaticallyCollected.title}
      </h3>

      {data.infoAutomaticallyCollected.content.map((content, index) => (
        <p
          key={`info-${index}`}
          className={`md:text-2xl text-lg opacity-80 ${
            index !== data.personalInfoYouDisclose.content.length - 1 && 'mb-4'
          }`}
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      ))}
    </section>
  )
}

export default WhatInfoWeCollect
