import useCursorSize from '../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom'

type DashedButtonProps = {
  innerText: string
  styles?: string
}

const DashedButton = ({ innerText, styles }: DashedButtonProps) => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  return (
    <Link
      className={`md:border-4 border-[3px] border-dashed rounded-[56px] xl:px-[117px] px-[8.35vw] xl:py-[10px] py-[0.71vw] xl:text-[60px] text-[4.28vw] opacity-20 hover:opacity-80 transition-opacity duration-300 whitespace-nowrap ${styles}`}
      onMouseOver={() => setCursorSize(110)}
      onMouseLeave={() => setCursorSize(40)}
      to="/about-us"
    >
      {t(innerText)}
    </Link>
  )
}

export default DashedButton
