import { ReactNode, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

type ScrollToToOnRenderProps = {
  children: ReactNode
}

const ScrollTopToOnRender = ({ children }: ScrollToToOnRenderProps) => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return <>{children}</>
}

export default ScrollTopToOnRender
