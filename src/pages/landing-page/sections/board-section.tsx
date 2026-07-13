import { useTranslation } from 'react-i18next'
import useCursorSize from '../../../lib/use-cursor-size'
import placeholder from '../../../assets/board/placeholder.svg'

const BoardSection = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  const members = [
    { name: 'Nume Prenume', role: 'Președinte', image: placeholder },
    { name: 'Nume Prenume', role: 'Secretar', image: placeholder },
    {
      name: 'Nume Prenume',
      role: 'VP Relații cu Companiile',
      image: placeholder
    },
    {
      name: 'Nume Prenume',
      role: 'VP Relații Publice',
      image: placeholder
    },
    {
      name: 'Nume Prenume',
      role: 'VP Resurse Umane',
      image: placeholder
    }
  ]

  return (
    <section className="md:py-[130px] py-[50px]">
      <h2 className="text-white/80 md:text-xl text-base font-normal leading-normal md:mb-[37px] mb-5">
        {t('Board')}
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-[24px] gap-[16px]">
        {members.map((member, index) => (
          <div
            key={index}
            className="group flex flex-col"
            onMouseOver={() => setCursorSize(120)}
            onMouseLeave={() => setCursorSize(40)}
          >
            <img
              src={member.image}
              alt={t(member.role)}
              className="w-full aspect-square object-cover rounded-2xl bg-white/5 grayscale group-hover:grayscale-0 transition-all"
              loading="lazy"
            />
            <h3 className="mt-4 md:text-[20px] text-[16px] font-medium leading-tight">
              {t(member.name)}
            </h3>
            <p className="text-white/60 md:text-[15px] text-[12px] font-normal">
              {t(member.role)}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BoardSection
