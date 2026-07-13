import { Fragment, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { setDialogVisibility } from '../store/reducers/dialog-visible-slice'

import useCursorSize from '../lib/use-cursor-size'
import HamburgerMenu from './hamburger-menu'
import MobileDrawer from './mobile-drawer'
import LanguageDropdownMenu from './language-dropdown-menu'

const Header = () => {
  const [drawerOpened, setDrawerOpened] = useState(false)
  const drawerRef = useRef(null)
  const { setCursorSize } = useCursorSize()
  const { t } = useTranslation()
  const dispatch = useDispatch()

  const links = [
    { title: 'About us', to: '/' },
    { title: 'Services', to: '/' },
    { title: 'Contact', onClick: () => dispatch(setDialogVisibility()) }
  ]

  return (
    <header className="w-screen absolute z-40 pt-[15px] xl:pt-[40px] transform-gpu">
      <div className="max-w-[1400px] h-[75px] mx-auto xl:px-[75px] px-[18px] text-white flex justify-between items-center transition-[padding] duration-500">
        <div className="sm:static absolute left-0 sm:w-auto w-screen text-center">
          <Link
            to="/"
            className="inline-block sm:opacity-80 sm:hover:opacity-100 transition-opacity"
            onMouseOver={() => setCursorSize(100)}
            onMouseLeave={() => setCursorSize(40)}
          >
            <img
              src="./src/assets/best-chisinau.png"
              alt="BEST Chisinau"
              className="h-[100px] xl:h-[140px] w-auto sm:mx-0 mx-auto"
              loading="lazy"
            />
          </Link>
        </div>

        <MobileDrawer
          links={links}
          drawerOpened={drawerOpened}
          closeDrawer={() => setDrawerOpened(false)}
          drawerRef={drawerRef}
        />
        <HamburgerMenu drawerRef={drawerRef} openDrawer={() => setDrawerOpened(true)} />
        <nav className="sm:flex hidden gap-[15px] items-center text-[15px]">
          {links.map((link) => (
            <Fragment key={link.title}>
              <Link
                to={link.to ? link.to : '#'}
                className="hover:opacity-70 transition-all"
                onMouseOver={() => setCursorSize(60)}
                onMouseLeave={() => setCursorSize(40)}
                onClick={() => dispatch(setDialogVisibility())}
              >
                {t(link.title)}
              </Link>

              <img
                src="./src/assets/ellipse.svg"
                alt=""
                className="-z-50"
                loading="lazy"
              />
            </Fragment>
          ))}
          <LanguageDropdownMenu />
        </nav>
      </div>
    </header>
  )
}

export default Header
