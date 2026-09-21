import useCopy from '../use-copy'
import Arrow from '../components/arrow'
import { DrawRule, Fade, Wipe } from '../motion/primitives'
import { calendarUrl, mapUrl } from '../data'

// A slip to keep: the perforated edges are the borders of the field.
// The detailed schedule stays off the page until the organisers publish it.
const ProgrammeSection = () => {
  const { copy } = useCopy()

  return (
    <section id="program" className="rg-field rg-field--yellow rg-programme" aria-labelledby="rg-programme-heading">
      <div className="rg-grid">
        <Wipe className="rg-programme__title">
          <h2 id="rg-programme-heading" className="rg-display">30.10<br />10:00–14:00</h2>
        </Wipe>
        <div className="rg-programme__info">
          <DrawRule />
          <Fade as="p" delay={0.1}>{copy('Programul detaliat al jurizării va fi publicat în curând. Evenimentul va avea loc la Universitatea Tehnică a Moldovei, în Aula 3-3.', 'The detailed judging programme will be published soon. The event will take place at the Technical University of Moldova, in Aula 3-3.')}</Fade>
          <Fade className="rg-actions" delay={0.2}>
            <a className="rg-button" href={calendarUrl} target="_blank" rel="noreferrer">
              {copy('Adaugă în calendar', 'Add to calendar')}
              <Arrow direction="out" />
            </a>
            <a className="rg-link" href={mapUrl} target="_blank" rel="noreferrer">{copy('Vezi campusul pe hartă', 'View the campus on the map')}</a>
          </Fade>
        </div>
      </div>
    </section>
  )
}

export default ProgrammeSection
