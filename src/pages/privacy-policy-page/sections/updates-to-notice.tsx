import { useTranslation } from 'react-i18next'
import data from '../data/updates-to-notice.json'

const UpdatesToNotice = () => {
  const { t } = useTranslation()

  return (
    <section id="updates-to-notice" className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      {data.content.map((content, index) => (
        <p
          key={`notice-${index}`}
          className={`md:text-2xl text-lg opacity-80 ${
            index !== data.content.length - 1 && 'mb-4'
          }`}
          dangerouslySetInnerHTML={{ __html: t(content) }}
        />
      ))}
    </section>
  )
}

export default UpdatesToNotice
