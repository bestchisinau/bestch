import { useTranslation } from 'react-i18next'
import data from '../data/cookies-and-tracking.json'

const CookiesAndTracking = () => {
  const { t } = useTranslation()

  return (
    <section id="cookies-and-tracking" className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      {data.content.map((content, index) => (
        <p
          key={`description-${index}`}
          className={`md:text-2xl text-lg opacity-80 ${index === 0 && 'mb-4'}`}
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      ))}
    </section>
  )
}

export default CookiesAndTracking
