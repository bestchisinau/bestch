import { useTranslation } from 'react-i18next'
import ebecPhoto from '../../../assets/about-us/about-us-11.jpg'

const events = [
  {
    name: 'Summer Course',
    description:
      'Moștenirea BEST Courses din 1991: prelegeri ținute de profesori și experți din companii, vizite la companii, laboratoare și ateliere — vară de vară, în toată Europa.'
  },
  {
    name: 'Rube Goldberg',
    description:
      'Echipele construiesc mașinării absurde, cu reacții în lanț, pentru a rezolva o sarcină simplă — inginerie dusă la nivel de artă.'
  },
  {
    name: 'Hackathon',
    description: 'O zi și o noapte în care echipele pornesc de la zero și livrează un prototip funcțional.'
  },
  {
    name: 'Recrutări',
    description: 'Momentul în care comunitatea se mărește: înscrieri, interviuri și primii pași în BEST.'
  },
  {
    name: 'Weekend motivațional',
    description:
      'Un weekend în care membrii BEST au traininguri și alte activități fun — energie pentru tot anul.'
  },
  {
    name: 'Aniversarea',
    description: 'Ziua de naștere a BEST Chișinău: încă un an de comunitate, sărbătorit împreună.'
  },
  {
    name: 'BEST Talks',
    description: 'Conferința noastră: speakeri, idei și inspirație pentru studenți care vor mai mult.'
  }
]

const OurEventsSection = () => {
  const { t } = useTranslation()

  return (
    <section className="md:py-[80px] py-[50px]">
      <div className="border-t-2 border-white pt-[14px] md:mb-[36px] mb-[24px]">
        <h2 className="font-humane font-bold uppercase md:text-[32px] text-[22px] leading-[95%]">
          {t('03 — Evenimentele noastre')}
        </h2>
      </div>

      <p className="text-[14px] leading-[155%] text-white/80 max-w-[70ch] md:mb-[36px] mb-[24px]">
        {t(
          'Șapte feluri de a ne aduna: competiții, conferințe, weekenduri și sărbători. Fiecare eveniment este o piesă din experiența de membru.'
        )}
      </p>

      <div className="border-t border-white/30">
        {events.map((event) => (
          <div
            key={event.name}
            className="md:grid md:grid-cols-[280px_1fr] md:gap-[40px] py-[18px] border-b border-white/30"
          >
            <h3 className="font-humane font-bold uppercase md:text-[22px] text-[18px] leading-[100%]">
              {t(event.name)}
            </h3>
            <p className="text-[13px] leading-[150%] text-white/70">{t(event.description)}</p>
          </div>
        ))}
      </div>

      <div className="md:w-[55%] md:ml-auto md:mt-[40px] mt-[24px]">
        <img
          src={ebecPhoto}
          alt="BEST Chisinau"
          className="w-full object-cover grayscale"
          loading="lazy"
        />
        <p className="text-[11px] text-white/60 mt-[8px] md:text-right">
          {t('Căști de protecție și zâmbete: o rundă locală EBEC.')}
        </p>
      </div>
    </section>
  )
}

export default OurEventsSection
