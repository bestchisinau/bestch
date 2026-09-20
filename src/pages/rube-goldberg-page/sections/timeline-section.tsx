import useCopy from '../use-copy'
import { Cascade, CascadeItem, DrawRule } from '../motion/primitives'
import { stages } from '../data'

// Five equal steps, not a measured scale: the last three dates fall within
// nine days of each other and could not share a proportional axis.
const TimelineSection = () => {
  const { copy, pick } = useCopy()

  return (
    <section id="participanti" className="rg-field rg-field--deep rg-timeline" aria-labelledby="rg-participant-heading">
      <div className="rg-grid">
        <h2 id="rg-participant-heading" className="rg-head rg-timeline__title">{copy('DESFĂȘURAREA COMPETIȚIEI.', 'COMPETITION TIMELINE.')}</h2>
        <div className="rg-timeline__track">
          <DrawRule />
          <Cascade className="rg-timeline__stages">
            {stages.map(({ date, dateTime, title }, index) => (
              <CascadeItem className={index === stages.length - 1 ? 'rg-stage rg-stage--final' : 'rg-stage'} key={date}>
                {dateTime ? <time className="rg-numeral" dateTime={dateTime}>{date}</time> : <span className="rg-numeral">{date}</span>}
                <span className="rg-stage__title">{pick(title)}</span>
              </CascadeItem>
            ))}
          </Cascade>
        </div>
      </div>
    </section>
  )
}

export default TimelineSection
