import useCopy from '../use-copy'
import { DrawRule } from '../motion/primitives'
import { campus, eventDate, eventTime, labels } from '../data'

/**
 * The poster's data band. Date and time are numerals, so they take the
 * display face; the venue is something people read and search for, so it
 * stays in the text face.
 */
const DateBand = () => {
  const { pick } = useCopy()

  return (
    <div className="rg-band rg-grid">
      <DrawRule delay={0.15} onMount />
      <dl className="rg-band__cells">
        <div className="rg-band__cell rg-band__cell--date">
          <dt className="rg-label">{pick(labels.date)}</dt>
          <dd className="rg-numeral">
            <time dateTime={eventDate.iso}>{eventDate.label}</time>
          </dd>
        </div>
        <div className="rg-band__cell rg-band__cell--time">
          <dt className="rg-label">{pick(labels.time)}</dt>
          <dd className="rg-numeral">{eventTime}</dd>
        </div>
        <div className="rg-band__cell rg-band__cell--venue">
          <dt className="rg-label">{pick(labels.venue)}</dt>
          <dd className="rg-band__venue">{pick(campus)}</dd>
        </div>
      </dl>
    </div>
  )
}

export default DateBand
