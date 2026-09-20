import useCopy from '../use-copy'
import RailHeading from '../components/rail-heading'
import { Fade } from '../motion/primitives'
import { sponsors } from '../data'
import type { Sponsor } from '../data'

// Aspect ratios run from 2:1 to almost 9:1, so a shared height would make the
// widest logo four times the size of the squarest. Equal area reads as equal.
const logoWidth = ({ width, height, featured }: Sponsor) => Math.round(Math.sqrt((featured ? 9500 : 6000) * (width / height)))

const SponsorsSection = () => {
  const { copy } = useCopy()

  return (
    <section className="rg-field rg-field--deep rg-sponsors" aria-labelledby="rg-sponsors-heading">
      <div className="rg-grid">
        <RailHeading id="rg-sponsors-heading" title={copy('CONSTRUIT ÎMPREUNĂ.', 'BUILT TOGETHER.')} />
        <Fade as="ul" className="rg-sponsors__grid" tall>
          {sponsors.map((sponsor) => (
            <li className={sponsor.featured ? 'rg-sponsor rg-sponsor--featured' : 'rg-sponsor'} key={sponsor.name}>
              <figure>
                <div className="rg-sponsor__cell">
                  <img
                    src={sponsor.logo}
                    alt={sponsor.name}
                    width={sponsor.width}
                    height={sponsor.height}
                    style={{ width: logoWidth(sponsor) }}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </figure>
            </li>
          ))}
        </Fade>
      </div>
    </section>
  )
}

export default SponsorsSection
