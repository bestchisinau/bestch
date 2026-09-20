import useCopy from '../use-copy'
import RailHeading from '../components/rail-heading'
import { Fade } from '../motion/primitives'
import { faqs } from '../data'

// Native <details>: keyboard and find-in-page work without any script, and
// nothing animates height, so opening an answer never shifts a reveal below.
const FaqSection = () => {
  const { english, copy } = useCopy()
  const items = english ? faqs.en : faqs.ro

  return (
    <section id="faq" className="rg-field rg-field--deep rg-faq" aria-labelledby="rg-faq-heading">
      <div className="rg-grid">
        <RailHeading id="rg-faq-heading" title={copy('ÎNAINTE SĂ VII.', 'BEFORE YOU COME.')} />
        <Fade className="rg-faq__list" tall>
          {items.map(({ question, answer }) => (
            <details className="rg-faq__item" key={question}>
              <summary>
                <span>{question}</span>
                <span className="rg-faq__marker" aria-hidden="true" />
              </summary>
              <p>{answer}</p>
            </details>
          ))}
        </Fade>
      </div>
    </section>
  )
}

export default FaqSection
