import React from 'react'
import { Link } from 'react-router-dom'
const Logo: React.FC = () => {
  return (
    <Link to="/" aria-label="Go to homepage">
      <img
        src="TND_2.png"
        alt="The Neighbourhood Detailer"
        className="h-12 w-auto object-contain"
        style={{ marginBottom: '0px' }}
      />
    </Link>
  )
}
export default Logo