import useCopy from '../use-copy'
import Arrow from '../components/arrow'
import { Fade, Wipe } from '../motion/primitives'
import { calendarUrl, eventDate, eventTime, labels, mapUrl, venue } from '../data'

// The date has been set large twice by now, so the page closes on a quiet
// colophon instead of repeating the hero.
const FinalSection = () => {
  const { copy, pick } = useCopy()

  return (
    <section id="finala" className="rg-field rg-field--yellow rg-final" aria-labelledby="rg-final-heading">
      <Fade className="rg-final__wrench">
        <span className="rg-wrench" aria-hidden="true" />
      </Fade>
      <div className="rg-grid">
        <Wipe className="rg-final__title">
          <h2 id="rg-final-heading" className="rg-display">{copy('VINO SĂ VEZI CE SE ÎNTÂMPLĂ MAI DEPARTE.', 'COME AND SEE WHAT HAPPENS NEXT.')}</h2>
        </Wipe>
        <div className="rg-final__colophon">
          <Fade as="div" delay={0.1}>
            <dl className="rg-colophon">
              <div>
                <dt className="rg-label">{pick(labels.date)}</dt>
                <dd><time dateTime={eventDate.iso}>{eventDate.label}</time></dd>
              </div>
              <div>
                <dt className="rg-label">{pick(labels.time)}</dt>
                <dd>{eventTime}</dd>
              </div>
              <div>
                <dt className="rg-label">{pick(labels.venue)}</dt>
                <dd>{pick(venue)}</dd>
              </div>
            </dl>
          </Fade>
        </div>
        <Fade className="rg-actions rg-final__actions" delay={0.2}>
          <a className="rg-button" href={calendarUrl} target="_blank" rel="noreferrer">
            {copy('Adaugă în calendar', 'Add to calendar')}
            <Arrow direction="out" />
          </a>
          <a className="rg-link" href={mapUrl} target="_blank" rel="noreferrer">{copy('Vezi campusul pe hartă', 'View the campus on the map')}</a>
        </Fade>
      </div>
    </section>
  )
}

export default FinalSection
