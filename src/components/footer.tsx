import { Link } from 'react-router-dom'
import useCursorSize from '../lib/use-cursor-size'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()

  const links = [
    { title: 'HOME', to: '/' },
    { title: 'ABOUT US', to: '/about-us' },
    { title: 'PRIVACY POLICY', to: '/privacy-policy' },
    { title: 'USAGE MANUAL', to: '/usage-manual' }
  ]

  const socials = [
    { alt: 'Facebook', imageSrc: './src/assets/footer/Facebook.svg', to: '/' },
    { alt: 'Instagram', imageSrc: './src/assets/footer/Instagram.svg', to: '/' },
    { alt: 'X', imageSrc: './src/assets/footer/X.svg', to: '/' },
    { alt: 'LinkedIn', imageSrc: './src/assets/footer/LinkedIn.svg', to: '/' }
  ]

  return (
    <footer className="max-w-[1400px] mx-auto xl:px-[75px] px-[18px] pt-10 pb-5 text-white transform-gpu">
      <img
        src="./src/assets/media-unbothered.svg"
        alt="Media Unbothered"
        className="w-screen -z-50"
        onMouseOver={() => setCursorSize(300)}
        onMouseLeave={() => setCursorSize(40)}
        loading="lazy"
      />

      <div className="mt-[50px] flex md:flex-row flex-col justify-between items-center gap-[10px]">
        <nav className="flex max-[500px]:flex-col flex-row lg:gap-[50px] gap-[20px] text-center">
          {links.map((link) => (
            <Link
              key={link.title}
              to={link.to}
              className="text-[15px] hover:opacity-70 transition-all"
              onMouseOver={() => setCursorSize(60)}
              onMouseLeave={() => setCursorSize(40)}
            >
              {t(link.title)}
            </Link>
          ))}
        </nav>

        <div className="flex gap-[50px]">
          {socials.map((social) => (
            <Link
              key={social.alt}
              to={social.to}
              className="w-[25px] h-[25px] hover:opacity-70 transition-all"
              onMouseOver={() => setCursorSize(60)}
              onMouseLeave={() => setCursorSize(40)}
            >
              <img src={social.imageSrc} alt={social.alt} loading="lazy" />
            </Link>
          ))}
        </div>
      </div>
    </footer>
  )
}

export default Footer
