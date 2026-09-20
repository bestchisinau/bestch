import type { ReactNode } from 'react'

type RailHeadingProps = { id: string; title: string; children?: ReactNode }

/**
 * Section headings that label rather than declare sit in the left rail and
 * follow the reader down long sections. The sticky wrapper carries no
 * overflow, clip-path or transform: any of those would stop it sticking.
 */
const RailHeading = ({ id, title, children }: RailHeadingProps) => (
  <div className="rg-rail">
    <h2 id={id} className="rg-head">
      {title}
    </h2>
    {children}
  </div>
)

export default RailHeading
