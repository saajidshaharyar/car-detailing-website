import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Home from './components/Pages/Home';
import Gallery from './components/Pages/Gallery';
import AboutUs from './components/Pages/AboutUs';
import ContactUs from './components/Pages/ContactUs';

/*
 * Main Application Component
 *
 * This is the root component of the application, handling:
 * 1. Routing setup
 * 2. Theme management (light/dark mode)
 * 3. Layout structure
 *
 * Development Timeline:
 * - Day 1: Initial setup with routing and theme implementation
 * - Day 2: Integration with layout components
 * - Day 3: Theme persistence with localStorage
 */
export function App() {
  // Theme state management with localStorage persistence
  const [theme, setTheme] = useState<'light' | 'dark'>(
    () => (localStorage.getItem('theme') as 'light' | 'dark') || 'light',
  );

  // Effect to handle theme changes and update DOM
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Theme toggle handler
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <Router>
      {/* Main application wrapper with theme-aware styling */}
      <div className="flex flex-col min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
        <Header theme={theme} toggleTheme={toggleTheme} />
        <main className="flex-grow">
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
