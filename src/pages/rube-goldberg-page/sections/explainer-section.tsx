import useCopy from '../use-copy'
import RailHeading from '../components/rail-heading'
import { Fade, Wipe } from '../motion/primitives'
import workshopPhoto from '../../../assets/about-us/about-us-11.jpg'

const ExplainerSection = () => {
  const { copy } = useCopy()

  return (
    <section id="despre" className="rg-field rg-field--deep rg-explainer" aria-labelledby="rg-about-heading">
      <div className="rg-grid">
        <RailHeading id="rg-about-heading" title={copy('CE ESTE RUBE GOLDBERG?', 'WHAT IS RUBE GOLDBERG?')} />
        <Fade className="rg-explainer__copy">
          <p className="rg-lead">{copy('O mașinărie Rube Goldberg este un mecanism construit pentru a realiza o sarcină simplă printr-o serie de acțiuni interconectate.', 'A Rube Goldberg machine is a mechanism built to complete a simple task through a series of interconnected actions.')}</p>
          <p>{copy('În loc să ajungă direct la rezultatul final, mașinăria folosește diferite obiecte și mecanisme care declanșează succesiv următoarea acțiune. Echipele combină astfel cunoștințele tehnice cu creativitatea pentru a construi un mecanism funcțional.', 'Instead of reaching the result directly, the machine uses different objects and mechanisms that trigger each successive action. Teams combine technical knowledge with creativity to build a working mechanism.')}</p>
        </Fade>
        <Wipe className="rg-explainer__photo">
          <figure className="rg-photo">
            <div className="rg-photo__frame">
              <img src={workshopPhoto} alt="" width={1762} height={2094} loading="lazy" decoding="async" />
            </div>
          </figure>
        </Wipe>
      </div>
    </section>
  )
}

export default ExplainerSection
