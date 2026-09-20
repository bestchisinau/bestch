import useCopy from '../use-copy'
import Book from '../components/book'
import { Cascade, CascadeItem, DrawRule, Fade, Wipe } from '../motion/primitives'

const ChallengeSection = () => {
  const { copy } = useCopy()

  return (
    <section id="provocare" className="rg-field rg-field--deep rg-challenge" aria-labelledby="rg-challenge-heading">
      <div className="rg-grid">
        <Wipe className="rg-challenge__title">
          <h2 id="rg-challenge-heading" className="rg-display">{copy('PROVOCAREA EDIȚIEI 2026.', 'THE 2026 CHALLENGE.')}</h2>
        </Wipe>
        <div className="rg-challenge__book">
          <Book />
        </div>
        <Fade as="p" className="rg-challenge__copy">{copy('În acest an, fiecare echipă trebuie să construiască o mașinărie care să întoarcă o pagină dintr-o carte. Deși toate echipele pornesc de la aceeași sarcină, modul în care aleg să construiască mecanismul este la alegerea lor.', 'This year, every team must build a machine that turns a page in a book. Although every team starts with the same task, how they build the mechanism is up to them.')}</Fade>
        <div className="rg-spec">
          <DrawRule />
          <Cascade as="ul" className="rg-spec__cells">
            <CascadeItem className="rg-spec__cell">
              <strong className="rg-numeral">20+</strong>
              <span className="rg-label">{copy('transferuri de energie', 'energy transfers')}</span>
            </CascadeItem>
            <CascadeItem className="rg-spec__cell">
              <strong className="rg-numeral">2×2×2<span className="rg-spec__unit">m</span></strong>
              <span className="rg-label">{copy('dimensiuni maxime', 'maximum dimensions')}</span>
            </CascadeItem>
            <CascadeItem className="rg-spec__cell">
              <strong className="rg-numeral">5+1</strong>
              <span className="rg-label">{copy('studenți și un mentor', 'students and one mentor')}</span>
            </CascadeItem>
          </Cascade>
        </div>
      </div>
    </section>
  )
}

export default ChallengeSection
