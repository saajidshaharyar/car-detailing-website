import React from 'react';
import {Link} from 'react-router-dom'; // Enables client-side routing

// Header accepts props for theme and toggleTheme function
const Header = ({ theme, toggleTheme }: { theme: string; toggleTheme: () => void }) => {
  return (
    <header style={{ padding: '1rem', borderBottom: '1px solid #ccc' }}>
      <h1>ARS Auto-Detailing</h1>
      <nav>
        <ul style={{ display: 'flex', gap: '1rem', listStyle: 'none', padding: 0 }}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
        </ul>
      </nav>
      <button onClick={toggleTheme} style={{ marginTop: '1rem' }}>
        Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
      </button>
    </header>
  );
};

export default Header;