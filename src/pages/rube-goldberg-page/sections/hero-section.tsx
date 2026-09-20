import useCopy from '../use-copy'
import Arrow from '../components/arrow'
import DateBand from '../components/date-band'
import keyArt640 from '../../../assets/rube-goldberg/rube-goldberg-text-640.webp'
import keyArt1200 from '../../../assets/rube-goldberg/rube-goldberg-text-1200.webp'
import keyArt1700 from '../../../assets/rube-goldberg/rube-goldberg-text-1700.webp'

// The key art, intro and call to action paint in their final state: the art is
// the largest paint on the page and the facts should never wait for a reveal.
const HeroSection = () => {
  const { copy } = useCopy()

  return (
    <section className="rg-field rg-field--yellow rg-hero" aria-labelledby="rg-title">
      <div className="rg-grid">
        <div className="rg-hero__plate">
          <h1 id="rg-title" className="rg-visually-hidden">Rube Goldberg 2026</h1>
          <img
            src={keyArt1200}
            srcSet={`${keyArt640} 640w, ${keyArt1200} 1200w, ${keyArt1700} 1700w`}
            sizes="(min-width: 1280px) 720px, (min-width: 1024px) 58vw, 100vw"
            width={2293}
            height={1411}
            alt=""
            aria-hidden="true"
            decoding="async"
          />
        </div>
        <div className="rg-hero__intro">
          <p>{copy('Rube Goldberg este o competiție inginerească în care echipele de studenți construiesc mecanisme complexe pentru a realiza o sarcină simplă. Ediția din acest an reunește 9 echipe, iar provocarea lor este să întoarcă o pagină dintr-o carte printr-un lanț de cel puțin 20 de transferuri de energie.', 'Rube Goldberg is an engineering competition where student teams build complex mechanisms to complete a simple task. This year, nine teams must turn a page in a book through a chain of at least 20 energy transfers.')}</p>
          <a className="rg-button" href="#program">
            {copy('Vino la jurizare', 'Come to the judging')}
            <Arrow direction="down" />
          </a>
        </div>
      </div>
      <DateBand />
    </section>
  )
}

export default HeroSection
