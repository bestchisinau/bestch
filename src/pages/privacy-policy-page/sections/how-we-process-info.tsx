import { useTranslation } from 'react-i18next'
import data from '../data/how-we-process-info.json'

const HowWeProcessInfo = () => {
  const { t } = useTranslation()

  return (
    <section id="info-we-process" className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      <p
        className="md:text-2xl text-lg mb-4 opacity-80"
        dangerouslySetInnerHTML={{ __html: t(data.content[0]) }}
      />
      <p
        className="md:text-2xl text-lg mb-4 opacity-80"
        dangerouslySetInnerHTML={{ __html: t(data.content[1]) }}
      />

      <h3 className="text-2xl mb-2 font-semibold opacity-80">{t(data.fullName.title)}</h3>
      <ul className="list-disc ml-6">
        {data.fullName.content.map((content, index) => (
          <li
            key={`name-${index}`}
            className={`md:text-2xl text-lg opacity-80 ${
              index !== data.fullName.content.length - 1 && 'mb-4'
            }`}
            dangerouslySetInnerHTML={{ __html: t(content) }}
          />
        ))}
      </ul>

      <h3 className="text-2xl mb-2 mt-4 font-semibold opacity-80">
        {t(data.email.title)}
      </h3>
      <ul className="list-disc ml-6">
        {data.email.content.map((content, index) => (
          <li
            key={`email-${index}`}
            className={`md:text-2xl text-lg opacity-80 ${
              index !== data.email.content.length - 1 && 'mb-4'
            }`}
            dangerouslySetInnerHTML={{ __html: t(content) }}
          />
        ))}
      </ul>

      <h3 className="text-2xl mb-2 mt-4 font-semibold opacity-80">
        {t(data.formOfPayment.title)}
      </h3>
      <ul className="list-disc ml-6">
        {data.formOfPayment.content.map((content, index) => (
          <li
            key={`payment-${index}`}
            className={`md:text-2xl text-lg opacity-80 ${
              index !== data.formOfPayment.content.length - 1 && 'mb-4'
            }`}
            dangerouslySetInnerHTML={{ __html: t(content) }}
          />
        ))}
      </ul>

      <p
        className="md:text-2xl text-lg mt-4 opacity-80"
        dangerouslySetInnerHTML={{ __html: t(data.content[2]) }}
      />
    </section>
  )
}

export default HowWeProcessInfo
