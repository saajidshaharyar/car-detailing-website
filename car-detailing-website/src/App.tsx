import React, { useEffect, useState, Component } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Layout/Header'
import Footer from './components/Layout/Footer'
import Home from './components/Pages/Home'
import Gallery from './components/Pages/Gallery'
import AboutUs from './components/Pages/AboutUs'
import ContactUs from './components/Pages/ContactUs'
/*
 * Main Application Component
 *
 * This is the root component of the application, handling:
 * 1. Routing setup
 * 2. Theme management (light/dark mode)
 * 3. Layout structure
*/

// Main App function component with theme logic
export function App() {
  // Sets the initial theme to what's in localStorage or defaults to light
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
  );

  useEffect(() => {
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);
  // Theme toggle button logic
  const toggleTheme = () => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  };
 // Renders Header, page content via <Routes>, and Footer
  return (
    <Router>
      <div className="app-wrapper">
        <Header theme={theme} toggleTheme={toggleTheme} />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}
