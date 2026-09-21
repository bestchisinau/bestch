import { useTranslation } from 'react-i18next'
import classroomPhoto from '../../../assets/about-us/about-us-21.jpg'

const values = [
  {
    name: 'Flexibilitate',
    description: 'Căutăm schimbarea și ne adaptăm rapid: suntem deschiși la tot ce e nou.'
  },
  {
    name: 'Prietenie',
    description: 'Construim relații în care oamenii se ajută, se susțin și au grijă unii de alții.'
  },
  {
    name: 'Distracție',
    description: 'Ne bucurăm de tot ce facem și împărțim pasiunea asta cu cei din jur.'
  },
  {
    name: 'Îmbunătățire',
    description: 'Căutăm continuu să ridicăm standardele a tot ce facem, cu toată creativitatea.'
  },
  {
    name: 'Open-mindedness',
    description:
      'Deschiderea către oameni, idei și perspective diferite este locul unde începe dezvoltarea.'
  }
]

const IdentitySection = () => {
  const { t } = useTranslation()

  return (
    <section className="md:py-[80px] py-[50px]">
      <div className="border-t-2 border-white pt-[14px] md:mb-[36px] mb-[24px]">
        <h2 className="font-humane font-bold uppercase md:text-[32px] text-[22px] leading-[95%]">
          {t('02 — Identitatea noastră')}
        </h2>
      </div>

      <div className="md:grid md:grid-cols-2 md:gap-[24px] gap-[16px]">
        <div className="bg-white text-black md:p-[28px] p-[20px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-black/60 md:mb-[14px] mb-[10px]">
            {t('Misiune — Developing students')}
          </p>
          <p className="text-[14px] leading-[155%]">
            {t(
              'În calitate de grup local BEST, misiunea noastră este să ajutăm studenții pasionați de domeniul tehnic să-și valorifice potențialul și să-și trăiască cei mai frumoși ani de studenție, oferindu-le oportunitatea de a învăța lucruri noi, de a-și dezvolta abilități noi și de a descoperi cultura unică a țării noastre.'
            )}{' '}
            {t(
              'La nivel internațional, BEST îi ajută pe studenți să dobândească o mentalitate internațională, să înțeleagă mai bine culturile și societățile și să lucreze în medii diverse din punct de vedere cultural.'
            )}
          </p>
        </div>

        <div className="bg-white text-black md:p-[28px] p-[20px]">
          <p className="text-[11px] uppercase tracking-[0.18em] text-black/60 md:mb-[14px] mb-[10px]">
            {t('Viziune — Empowered diversity')}
          </p>
          <p className="text-[14px] leading-[155%]">
            {t(
              'Dezvoltarea are loc atunci când suntem deschiși către oameni, idei și perspective diferite. Prin diversitate, creăm un spațiu în care studenții pot învăța unii de la alții, își pot împărtăși experiențele și pot transforma diferențele în idei noi.'
            )}{' '}
            {t(
              'Viziunea BEST este ca oamenii să înțeleagă și să respecte culturi și societăți diferite — un mediu de diversitate împuternicită în care fiecare își folosește potențialul și își asumă responsabilitatea.'
            )}
          </p>
        </div>
      </div>

      <img
        src={classroomPhoto}
        alt="BEST Chisinau"
        className="w-full object-cover grayscale md:mt-[40px] mt-[24px]"
        loading="lazy"
      />
      <p className="text-[11px] text-white/60 mt-[8px]">
        {t('O sală plină: recrutărilor le urmează întotdeauna o generație nouă.')}
      </p>

      <p className="text-[11px] uppercase tracking-[0.18em] text-white/60 md:mt-[48px] mt-[32px] md:mb-[16px] mb-[12px]">
        {t('Valori — BEST Spirit')}
      </p>
      <div className="border-t border-white/30">
        {values.map((value) => (
          <div
            key={value.name}
            className="md:grid md:grid-cols-[220px_1fr] md:gap-[40px] py-[14px] border-b border-white/30"
          >
            <p className="font-humane font-bold uppercase text-[15px] leading-[130%]">
              {t(value.name)}
            </p>
            <p className="text-[13px] leading-[150%] text-white/70">{t(value.description)}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default IdentitySection
