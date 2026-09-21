// Nohemi has no arrow glyphs, so ↓ and ↗ used to fall back to a system font.
const Arrow = ({ direction }: { direction: 'down' | 'out' }) => (
  <svg
    className="rg-arrow"
    viewBox="0 0 18 18"
    width="18"
    height="18"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    aria-hidden="true"
    focusable="false"
  >
    {direction === 'down' ? <path d="M9 2v13M3 9l6 6 6-6" /> : <path d="M4 14 14 4M6 4h8v8" />}
  </svg>
)

export default Arrow
