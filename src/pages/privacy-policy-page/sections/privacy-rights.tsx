import { useTranslation } from 'react-i18next'
import data from '../data/privacy-rights.json'

const PrivacyRights = () => {
  const { t } = useTranslation()

  return (
    <section id="privacy-rights" className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      {data.content.map((content, index) => (
        <p
          key={`rights-${index}`}
          className="md:text-2xl text-lg mb-4 opacity-80"
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      ))}

      <h3 className="text-2xl mb-2 font-semibold opacity-80">
        {t(data.accountInfo.title)}
      </h3>
      <p
        className="md:text-2xl text-lg opacity-80"
        dangerouslySetInnerHTML={{ __html: t(data.accountInfo.content) }}
      />
    </section>
  )
}

export default PrivacyRights
