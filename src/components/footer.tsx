import { Link } from 'react-router-dom'
import useCursorSize from '../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  const columns = [
    {
      heading: 'Explore',
      links: [
        { title: 'Home', to: '/' },
        { title: 'About us', to: '/about-us' },
        { title: 'Curs de Vară', to: '/curs-de-vara' },
        { title: 'Hackathon', to: '/hackathon' }
      ]
    },
    {
      heading: 'Activities',
      links: [
        { title: 'Rube Goldberg', to: '/rube-goldberg' },
        { title: 'BEST Talks', to: '/best-talks' },
        { title: 'Recrutări', to: '/recrutari' },
        { title: 'Evenimente Interne', to: '/evenimente-interne' }
      ]
    },
    {
      heading: 'Legal',
      links: [
        { title: 'Privacy Policy', to: '/privacy-policy' },
        { title: 'Usage Manual', to: '/usage-manual' }
      ]
    }
  ]

  const socials = [
    {
      alt: 'Facebook',
      imageSrc: './src/assets/footer/Facebook.svg',
      to: 'https://www.facebook.com/BEST.Chisinau/'
    },
    {
      alt: 'Instagram',
      imageSrc: './src/assets/footer/Instagram.svg',
      to: 'https://www.instagram.com/best_chisinau/?hl=en'
    },
    {
      alt: 'LinkedIn',
      imageSrc: './src/assets/footer/LinkedIn.svg',
      to: 'https://www.linkedin.com/company/best-chisinau/posts/?feedView=all'
    }
  ]

  return (
    <footer className="border-t border-white/10 mt-[80px] text-white transform-gpu">
      <div className="max-w-[1400px] mx-auto xl:px-[75px] px-[18px] pt-[60px] pb-[30px]">
        <div className="flex md:flex-row flex-col justify-between gap-[50px]">
          {/* Brand */}
          <div className="max-w-[360px]">
            <Link
              to="/"
              onMouseOver={() => setCursorSize(120)}
              onMouseLeave={() => setCursorSize(40)}
            >
              <img
                src="./src/assets/best-chisinau.png"
                alt="BEST Chisinau"
                className="w-[200px] opacity-80"
                loading="lazy"
              />
            </Link>
            <p className="mt-[20px] text-[15px] leading-relaxed text-white/60">
              {t(
                'Board of European Students of Technology — Chișinău. Empowering students through non-formal education, events and opportunities.'
              )}
            </p>
          </div>

          {/* Link columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-[40px] gap-y-[30px]">
            {columns.map((column) => (
              <nav key={column.heading} className="flex flex-col gap-[14px]">
                <h3 className="text-[13px] uppercase tracking-wider text-white/40 font-medium">
                  {t(column.heading)}
                </h3>
                {column.links.map((link) => (
                  <Link
                    key={link.title}
                    to={link.to}
                    className="text-[15px] text-white/80 hover:text-white transition-colors w-fit"
                    onMouseOver={() => setCursorSize(60)}
                    onMouseLeave={() => setCursorSize(40)}
                  >
                    {t(link.title)}
                  </Link>
                ))}
              </nav>
            ))}
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-[50px] pt-[24px] border-t border-white/10 flex md:flex-row flex-col-reverse justify-between items-center gap-[20px]">
          <p className="text-[13px] text-white/40 text-center">
            © {new Date().getFullYear()} BEST Chișinău. {t('All rights reserved.')}
          </p>

          <div className="flex gap-[24px]">
            {socials.map((social) => (
              <a
                key={social.alt}
                href={social.to}
                target="_blank"
                rel="noopener noreferrer"
                className="w-[22px] h-[22px] opacity-70 hover:opacity-100 transition-opacity"
                onMouseOver={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
              >
                <img src={social.imageSrc} alt={social.alt} loading="lazy" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
