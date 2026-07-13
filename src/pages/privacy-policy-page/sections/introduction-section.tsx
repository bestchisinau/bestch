import { useTranslation } from 'react-i18next'
import data from '../data/introduction-data.json'

const IntroductionSection = () => {
  const { t } = useTranslation()

  return (
    <section className="flex flex-col justify-center">
      {data.descriptions.map((desc, index) => (
        <p
          key={`description-${index}`}
          className={`md:text-2xl text-lg opacity-80 ${
            index !== data.descriptions.length - 1 && 'mb-4'
          }`}
          dangerouslySetInnerHTML={{ __html: t(desc.text) }}
        />
      ))}
    </section>
  )
}

export default IntroductionSection
