import { useTranslation } from 'react-i18next'
import groupPhoto from '../../../assets/about-us/best-text-group-photo.jpg'

const AboutCoverSection = () => {
  const { t } = useTranslation()

  return (
    <section className="pt-[150px] md:pb-[80px] pb-[50px]">
      <div className="flex items-baseline justify-between border-b border-white/40 pb-[10px] md:mb-[40px] mb-[24px] text-[11px] uppercase tracking-[0.18em] text-white/60">
        <span>{t('BEST Chișinău · Local BEST Group din 2007')}</span>
        <span>{t('About us')}</span>
      </div>

      <div className="md:grid md:grid-cols-[1.05fr_1fr] md:gap-[60px] gap-[30px]">
        <div>
          <img
            src={groupPhoto}
            alt="BEST Chisinau"
            className="w-full h-full object-cover grayscale"
          />
          <p className="text-[11px] text-white/60 mt-[8px]">
            {t('Oameni, litere mari și multă energie — o generație de BESTies Chișinău.')}
          </p>
        </div>

        <div className="md:pt-[6px]">
          <h1 className="font-humane font-bold uppercase tracking-[-0.01em] md:text-[84px] text-[46px] leading-[88%] md:mb-[28px] mb-[18px]">
            {t('Povestea noastră.')}
          </h1>
          <p className="text-[14px] leading-[155%] text-white/80">
            {t(
              'BEST (Board of European Students of Technology) este o organizație studențească ce activează în peste 80 de universități tehnice din întreaga Europă, având ca scop principal dezvoltarea studenților. LBG Chișinău face parte din BEST din anul 2007. De atunci, echipa noastră a contribuit la dezvoltarea academică, socială și culturală a numeroși studenți europeni și moldoveni.'
            )}
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutCoverSection
