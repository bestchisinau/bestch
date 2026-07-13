import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setDialogVisibility } from '../../../store/reducers/dialog-visible-slice'

import CustomButton from '../../../components/custom-button'
import HireUsButton from '../../../components/hire-us-button'
import useCursorSize from '../../../lib/use-cursor-size'

const CoverSection = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <section className="xl:h-screen h-full pb-[50px] pt-[120px] flex flex-col justify-center">
      <div className="flex flex-col">
        <h1 className="xl:text-[4rem] sm:text-[5vw] text-[28px] font-medium leading-normal">
          {t('At')}
        </h1>
        <img
          src="./src/assets/media-unbothered.svg"
          alt="Media Unbothered"
          className="w-screen"
          onMouseOver={() => setCursorSize(300)}
          onMouseLeave={() => setCursorSize(40)}
          loading="lazy"
        />
        <h1 className="xl:text-[4rem] sm:text-[5vw] text-[28px] font-medium leading-normal">
          {t('we defy the odds.')}
        </h1>
      </div>

      <div className="flex-inline md:flex md:flex-row flex-col md:mt-[38px] mt-[18px]">
        <p
          className="max-w-2/3 md:text-[30px] text-[20px] font-light leading-[100%] opacity-60 mb-[25px]"
          onMouseOver={() => setCursorSize(80)}
          onMouseLeave={() => setCursorSize(40)}
        >
          {t(
            "Welcome to Media Unbothered, where digital dreams become reality. At Media Unbothered, we don't just build websites; we craft digital experiences that leave an everlasting impression. In a world where the digital landscape is constantly evolving, we thrive on staying ahead of the curve, unbothered by the ordinary."
          )}
        </p>

        <HireUsButton onClick={() => dispatch(setDialogVisibility())} />
        <CustomButton
          innerText="Hire us"
          styles="text-[20px] px-[50px] py-[11px]"
          imgStyles="min-w-[40px]"
          hideForWideScreens
          onClick={() => dispatch(setDialogVisibility())}
        />
      </div>
    </section>
  )
}

export default CoverSection
