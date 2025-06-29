import React from 'react'
import { Link } from 'react-router-dom'
const Logo: React.FC = () => {
  return (
    <Link to="/" aria-label="Go to homepage">
      <img
        src="Untitled design (4).png"
        alt="PrestigeOnWheelz"
        className="h-20 w-auto scale-125 -translate-y-1"
        style={{ marginBottom: '0px' }}
      />
    </Link>
  )
}
export default Logo