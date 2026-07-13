import { useTranslation } from 'react-i18next'
import data from '../data/manipulate-data.json'

const ManipulateData = () => {
  const { t } = useTranslation()

  return (
    <section id="data-we-manipulate" className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      <p
        className="md:text-2xl text-lg opacity-80"
        dangerouslySetInnerHTML={{ __html: t(data.content) }}
      />
    </section>
  )
}

export default ManipulateData
