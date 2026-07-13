import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

type CursorState = {
  cursor: {
    size: number
  }
}

const InteractiveCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const cursorSize = useSelector((state: CursorState) => state.cursor.size)

  useEffect(() => {
    const handleMouseMovement = (e: MouseEvent) => {
      window.innerWidth >= 1280 && setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMovement)

    return () => window.removeEventListener('mousemove', handleMouseMovement)
  }, [])

  return (
    <div
      className="rounded-full bg-white fixed z-50 pointer-events-none transition-all duration-[0.05] ease-out mix-blend-difference xl:block hidden opacity-90"
      style={{
        width: cursorSize,
        height: cursorSize,
        transform: `translate(${position.x - cursorSize / 2}px, ${
          position.y - cursorSize / 2
        }px)`
      }}
    ></div>
  )
}

export default InteractiveCursor
