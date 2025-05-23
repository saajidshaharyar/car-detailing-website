import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" aria-label="Go to homepage">
      <img
        src="/Untitled design (2).svg"
        alt="ARS Auto-Detailing"
        title="ARS Auto-Detailing"
        loading="lazy"
        className="h-12 w-auto hover:opacity-90 transition"
      />
    </Link>
  );
};

export default Logo;