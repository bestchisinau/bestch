import { useTranslation } from 'react-i18next'
import data from '../data/table-of-contents.json'
import useCursorSize from '../../../lib/use-cursor-size'

const TableOfContentsSection = () => {
  const { t } = useTranslation()
  const { setCursorSize } = useCursorSize()

  return (
    <section className="mt-20">
      <h2 className="md:text-4xl text-2xl mb-4 font-normal uppercase">{t(data.title)}</h2>

      <ol className="list-decimal pl-6">
        {data.contents.map((content, index) => (
          <li
            key={`contents-${index}`}
            className="md:text-2xl text-lg text-blue-400 hover:underline cursor-pointer"
            dangerouslySetInnerHTML={{ __html: t(content.title) }}
            onClick={() => {
              //! Requires optimiziation
              const section = document.getElementById(content.id)
              section?.scrollIntoView({ behavior: 'smooth' })
            }}
            onMouseOver={() => setCursorSize(20)}
            onMouseLeave={() => setCursorSize(40)}
          />
        ))}
      </ol>
    </section>
  )
}

export default TableOfContentsSection
