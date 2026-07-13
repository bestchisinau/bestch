import CustomButton from '../../../components/custom-button'
import DashedButton from '../../../components/dashed-button'
import useCursorSize from '../../../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setDialogVisibility } from '../../../store/reducers/dialog-visible-slice'

const ReadyToChatSection = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  return (
    <section className="md:py-[130px] py-[50px]">
      <h2 className="text-white/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {t('Ready to have a chat?')}
      </h2>

      <p
        className="md:text-[35px] text-[25px] font-normal leading-[100%]"
        onMouseOver={() => setCursorSize(80)}
        onMouseLeave={() => setCursorSize(40)}
      >
        {t(
          "Eager to transform your digital aspirations into a tangible online presence? We're at your service. Whether you have a specific project in mind or are keen on exploring potential opportunities, the Media Unbothered team is prepared for a meaningful discussion."
        )}
      </p>

      <div className="flex justify-center md:gap-[46px] gap-[18px] mt-[66px]">
        <DashedButton innerText="About us" />
        <CustomButton
          innerText="Let's talk."
          styles="xl:px-[117px] md:px-[8.35vw] px-[53px] py-[10px] xl:text-[60px] text-[4.28vw]"
          imgStyles="xl:min-w-[70px] sm:min-w-[5vw] min-w-[30px]"
          onClick={() => dispatch(setDialogVisibility())}
        />
        <DashedButton innerText="About us" />
      </div>
    </section>
  )
}

export default ReadyToChatSection
