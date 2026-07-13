import { useTranslation } from 'react-i18next'
import data from '../data/summary-of-key-points.json'

const SummaryOfKeyPoints = () => {
  const { t } = useTranslation()

  return (
    <section className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal">{t(data.title)}</h2>

      {data.descriptions.map((desc, index) => (
        <p
          key={`description-${index}`}
          className={`md:text-2xl text-lg opacity-80 ${
            index !== data.descriptions.length - 1 && 'mb-4'
          }`}
          dangerouslySetInnerHTML={{ __html: t(desc.text) }}
          style={{ fontStyle: index === 0 ? 'italic' : 'normal' }}
        />
      ))}
    </section>
  )
}

export default SummaryOfKeyPoints
