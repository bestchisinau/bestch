import { useTranslation } from 'react-i18next'
import data from '../data/non-tracking.json'

const NonTracking = () => {
  const { t } = useTranslation()

  return (
    <section id="non-tracking" className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      <p
        className="md:text-2xl text-lg opacity-80"
        dangerouslySetInnerHTML={{ __html: t(data.content) }}
      />
    </section>
  )
}

export default NonTracking
