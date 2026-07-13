import useCursorSize from '../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

type ParagraphProps = {
  title: string
  paragraph: string | { par1: string; par2: string; par3: string }
  pdfFile?: string
}

const ServiceParagraph = ({ title, paragraph, pdfFile }: ParagraphProps) => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  return (
    <div className="py-[57px]">
      <h2 className="text-white/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {t(title)}
      </h2>

      <p
        className="md:text-[35px] text-[25px] font-light leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {typeof paragraph === 'string' ? (
          t(paragraph)
        ) : (
          <>
            {t(paragraph.par1)}
            <a
              href={`./public/${pdfFile}.pdf`}
              download
              className="underline cursor-pointer"
            >
              {t(paragraph.par2)}
            </a>
            {t(paragraph.par3)}
          </>
        )}
      </p>
    </div>
  )
}

export default ServiceParagraph
