import { useTranslation } from 'react-i18next'

const PageNotFound = () => {
  const { t } = useTranslation()

  return (
    <div className="max-w-[1400px] h-[90vh] mx-auto text-white xl:px-[75px] px-[18px] flex flex-col justify-center items-center">
      <h1 className="md:text-[16vw] text-[5rem] leading-none">404</h1>
      <p className="text-lg opacity-80">{t('Sorry. This page does not exist!')}</p>
    </div>
  )
}

export default PageNotFound
