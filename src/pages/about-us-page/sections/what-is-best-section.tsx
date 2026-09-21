import { useTranslation } from 'react-i18next'
import hoodiesPhoto from '../../../assets/about-us/best-chisinau-about-us.jpg'

const WhatIsBestSection = () => {
  const { t } = useTranslation()

  return (
    <section className="md:py-[80px] py-[50px]">
      <div className="border-t-2 border-white pt-[14px] md:mb-[36px] mb-[24px]">
        <h2 className="font-humane font-bold uppercase md:text-[32px] text-[22px] leading-[95%]">
          {t('01 — Ce este BEST?')}
        </h2>
      </div>

      <div className="md:columns-2 md:gap-[50px] text-[14px] leading-[155%] text-white/80">
        <p className="md:mb-[16px] mb-[12px]">
          {t(
            'Totul a început în 1987, când studenți din 12 universități europene s-au întâlnit la Stockholm pentru primul International Week: ideea unui pod între universitățile Europei.'
          )}{' '}
          {t(
            'Un an mai târziu, la Grenoble, organizația și-a ales numele — BEST, Board of European Students of Technology — iar în 1989, la Berlin, prima Adunare Generală a pus bazele statutare ale organizației.'
          )}
        </p>
        <p className="md:mb-[16px] mb-[12px]">
          {t(
            'În 1991 au avut loc primele cursuri de vară, iar de atunci rețeaua a crescut la zeci de grupuri locale, reunite în regiuni și coordonate de un International Board și de departamente internaționale.'
          )}{' '}
          {t(
            'Grupurile locale sunt inima organizației: ele oferă serviciile, organizează evenimentele și susțin totul — oameni, resurse, idei.'
          )}{' '}
          {t('Fără LBG-uri, nu există BEST.')}
        </p>
      </div>

      <blockquote className="bg-white text-black md:p-[32px] p-[20px] font-humane font-bold uppercase md:text-[34px] text-[24px] leading-[95%] md:my-[40px] my-[28px]">
        {t(
          'BEST este o asociație internațională voluntară, apolitică, non-profit și non-reprezentativă a studenților europeni din domeniul tehnologic.'
        )}
      </blockquote>

      <img
        src={hoodiesPhoto}
        alt="BEST Chisinau"
        className="w-full object-cover grayscale"
        loading="lazy"
      />
      <p className="text-[11px] text-white/60 mt-[8px] md:text-right">
        {t('Tricouri roșii, prietenii vechi — spiritul BEST pe viu.')}
      </p>
    </section>
  )
}

export default WhatIsBestSection
