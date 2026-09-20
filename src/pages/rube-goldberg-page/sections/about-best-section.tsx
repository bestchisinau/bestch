import { Link } from 'react-router-dom'
import useCopy from '../use-copy'
import RailHeading from '../components/rail-heading'
import { Fade, Wipe } from '../motion/primitives'
import { instagramUrl } from '../data'
import groupPhoto from '../../../assets/about-us/best-text-group-photo.jpg'

const AboutBestSection = () => {
  const { copy } = useCopy()

  return (
    <section className="rg-field rg-field--deep rg-about" aria-labelledby="rg-people-heading">
      <Wipe className="rg-about__band" from="left">
        <figure className="rg-photo rg-photo--duotone">
          <div className="rg-photo__frame">
            <img src={groupPhoto} alt={copy('Comunitatea BEST Chișinău', 'The BEST Chișinău community')} width={1920} height={1057} loading="lazy" decoding="async" />
          </div>
        </figure>
      </Wipe>
      <div className="rg-grid">
        <RailHeading id="rg-people-heading" title={copy('DESPRE BEST CHIȘINĂU.', 'ABOUT BEST CHIȘINĂU.')} />
        <Fade className="rg-about__copy">
          <p className="rg-lead">{copy('BEST Chișinău este o organizație studențească care organizează proiecte și activități dedicate dezvoltării studenților.', 'BEST Chișinău is a student organisation that runs projects and activities dedicated to student development.')}</p>
          <p>{copy('Rube Goldberg este unul dintre proiectele organizate de BEST Chișinău în colaborare cu Universitatea Tehnică a Moldovei.', 'Rube Goldberg is one of the projects organised by BEST Chișinău in collaboration with the Technical University of Moldova.')}</p>
          <div className="rg-actions">
            <Link className="rg-link" to="/about-us">{copy('Descoperă BEST Chișinău', 'Discover BEST Chișinău')}</Link>
            <a className="rg-link" href={instagramUrl} target="_blank" rel="noreferrer">Instagram</a>
          </div>
        </Fade>
      </div>
    </section>
  )
}

export default AboutBestSection
