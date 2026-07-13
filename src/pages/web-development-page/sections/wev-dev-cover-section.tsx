import CustomButton from '../../../components/custom-button'
import HireUsButton from '../../../components/hire-us-button'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setDialogVisibility } from '../../../store/reducers/dialog-visible-slice'

const WebDevCoverSection = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <section className="xl:h-screen h-full pb-[50px] pt-[120px] flex flex-col justify-center">
      <div className="flex flex-col ">
        <img
          src="./src/assets/service-header-texts/web-development.svg"
          alt="Media Unbothered"
          className="self-start xl:h-[256px] h-[18.28vw]"
          onMouseOver={() => setCursorSize(300)}
          onMouseLeave={() => setCursorSize(40)}
          loading="lazy"
        />
        <h1 className="xl:text-[4rem] sm:text-[5vw] text-[28px] font-medium leading-normal">
          {t('with Media Unbothered.')}
        </h1>
      </div>

      <div className="flex-inline md:flex md:flex-row flex-col md:mt-[38px] mt-[18px]">
        <p
          className="max-w-2/3 md:text-[30px] text-[20px] font-light leading-[100%] opacity-60 mb-[25px]"
          onMouseOver={() => setCursorSize(80)}
          onMouseLeave={() => setCursorSize(40)}
        >
          {t(
            "Bid farewell to the challenges that come with web development! Unbothering yourself from the relentless hours and the financial demands of freelancers, we stand ready to assist you in turning your dreams into reality. All it takes is a few clicks, and we'll guide you through the journey to your digital aspirations."
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

export default WebDevCoverSection
