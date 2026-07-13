import gsap from 'gsap'
import React from 'react'

type HamburgerMenuProps = {
  openDrawer: () => void
  drawerRef: React.RefObject<HTMLDivElement>
}

const HamburgerMenu = ({ openDrawer, drawerRef }: HamburgerMenuProps) => {
  const openDrawerWithAnimation = () => {
    openDrawer()
    gsap.to(drawerRef.current, {
      y: 0,
      ease: 'expo.out',
      duration: 1
    })
  }

  return (
    <img
      src="./src/assets/hamburger-menu.svg"
      className="block sm:hidden w-[30px] h-[20px] absolute cursor-pointer right-[16px]"
      onClick={openDrawerWithAnimation}
      loading="lazy"
    />
  )
}

export default HamburgerMenu
