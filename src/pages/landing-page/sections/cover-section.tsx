import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setDialogVisibility } from '../../../store/reducers/dialog-visible-slice'

import CustomButton from '../../../components/custom-button'
import HireUsButton from '../../../components/hire-us-button'
import useCursorSize from '../../../lib/use-cursor-size'
import mediaUnbothered from '../../../assets/media-unbothered.svg'

const CoverSection = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <section className="xl:h-screen h-full pb-[50px] pt-[120px] flex flex-col justify-center">
      <div className="flex flex-col">
        <img
          src={mediaUnbothered}
          alt="Media Unbothered"
          className="w-screen"
          onMouseOver={() => setCursorSize(300)}
          onMouseLeave={() => setCursorSize(40)}
          loading="lazy"
        />
      </div>

      <div className="flex-inline md:flex md:flex-row flex-col md:mt-[38px] mt-[18px]">
        <p
          className="max-w-2/3 md:text-[30px] text-[20px] font-light leading-[100%] opacity-60 mb-[25px]"
          onMouseOver={() => setCursorSize(80)}
          onMouseLeave={() => setCursorSize(40)}
        >
          {t(
            'De 19 ani, BEST Chișinău creează oportunități pentru studenții UTM de a învăța, de a se dezvolta și de a-și pregăti viitorul profesional. Cu peste 35 de evenimente organizate și peste 2.000 de studenți implicați, continuăm să formăm studenți pregătiți pentru cariere de succes.'
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
