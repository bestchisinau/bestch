import useCopy from '../use-copy'
import { DrawRule, Fade, Wipe } from '../motion/primitives'
import { reasons } from '../data'

// Four ruled rows on one shared left edge. Each row is its own trigger, so the
// list reveals at reading pace instead of all at once.
const ReasonsSection = () => {
  const { copy, pick } = useCopy()

  return (
    <section className="rg-field rg-field--deep rg-reasons" aria-labelledby="rg-reasons-heading">
      <Fade className="rg-reasons__gears">
        <span className="rg-gears" aria-hidden="true" />
      </Fade>
      <div className="rg-grid">
        <Wipe className="rg-reasons__title">
          <h2 id="rg-reasons-heading" className="rg-display">{copy('VEZI IDEILE CÂND ÎNCEP SĂ SE MIȘTE.', 'SEE THE IDEAS START MOVING.')}</h2>
        </Wipe>
        <ul className="rg-reasons__list">
          {reasons.map(({ title, description }, index) => (
            <li key={title.ro}>
              <DrawRule hair={index > 0} />
              <Fade className="rg-reasons__row" delay={0.1}>
                <h3 className="rg-lead">{pick(title)}</h3>
                <p>{pick(description)}</p>
              </Fade>
            </li>
          ))}
        </ul>
        <DrawRule hair />
      </div>
    </section>
  )
}

export default ReasonsSection
