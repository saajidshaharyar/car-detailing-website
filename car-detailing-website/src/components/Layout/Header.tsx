import React, { useEffect, useState, Component } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { MenuIcon, XIcon, SunIcon, MoonIcon } from 'lucide-react'
import Logo from '../UI/Logo'
import { TypeAnimation } from 'react-type-animation'
/*
 * Header Component
 *
 * Primary navigation component that provides:
 * - Responsive navigation menu
 * - Theme toggle (light/dark mode)
 * - Mobile-friendly hamburger menu
 * - Active route highlighting
 */
interface HeaderProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}
const Header: React.FC<HeaderProps> = ({ theme, toggleTheme }) => {
  // State for mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const isHomePage = location.pathname === '/'
  // Navigation links configuration
  const navLinks = [
    {
      name: 'Home',
      path: '/',
    },
    {
      name: 'Gallery',
      path: '/gallery',
    },
    {
      name: 'About Us',
      path: '/about',
    },
    {
      name: 'Contact Us',
      path: '/contact',
    },
  ]
  // Mobile menu toggle handler
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-sm transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 py-0 grid grid-cols-3 md:grid-cols-[auto_1fr_auto] items-center">
        {/* Logo section */}
        <div className="flex items-center items-start space-x-3">
          <Logo />
        </div>
        <div className="text-center">
          <TypeAnimation
            sequence={[
              'The Neighbourhood Detailer.', 2500,
              'Precision. Passion. Prestige.', 2500,
              'Your Car Deserves the Best.', 2500,
            ]}
            speed={50}
            repeat={Infinity}
            wrapper="span"
            className="text-sm md:text-base font-light text-white"
          />
        </div>
        <div className="flex items-center space-x-4">
          {/* Desktop Dropdown */}
          <div className="hidden md:block relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="flex items-center justify-center w-10 h-10 text-white hover:text-primary-500 transition-all duration-300 rounded-md hover:bg-white/10 transform hover:-translate-y-1 hover:shadow-lg"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 relative">
                {/* Top bar */}
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}
                />
                {/* Middle bar */}
                <span
                  className={`absolute block h-0.5 w-6 bg-current top-3 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                {/* Bottom bar */}
                <span
                  className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}
                />
              </div>
            </button>
            {/* Desktop Dropdown Menu */}
            {isMenuOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-black/90 backdrop-blur-md border border-white/10 rounded-md shadow-lg py-1 z-50">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`block px-4 py-2 text-sm font-edobrush hover:bg-white/10 transition-colors border-b border-transparent hover:border-current ${location.pathname === link.path ? 'text-primary-500 underline' : 'text-white hover:underline'}`}
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-white/10 transition-all duration-300 text-white transform hover:-translate-y-1 hover:shadow-lg"
            aria-label={
              theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {theme === 'dark' ? (
              <SunIcon className="w-5 h-5" />
            ) : (
              <MoonIcon className="w-5 h-5" />
            )}
          </button>
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center rounded-md hover:bg-white/10 transition-all duration-300 text-white font-edobrush transform hover:-translate-y-1 hover:shadow-lg"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 relative">
              {/* Top bar */}
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? 'rotate-45 top-3' : 'top-1'}`}
              />
              {/* Middle bar */}
              <span
                className={`absolute block h-0.5 w-6 bg-current top-3 transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}
              />
              {/* Bottom bar */}
              <span
                className={`absolute block h-0.5 w-6 bg-current transform transition-all duration-300 ease-in-out ${isMenuOpen ? '-rotate-45 top-3' : 'top-5'}`}
              />
            </div>
          </button>
        </div>
      </div>
    
      {/* Mobile Menu */}
      {isMenuOpen && (
        <nav className="md:hidden bg-black/90 backdrop-blur-md border-t border-white/10">
          <div className="container mx-auto py-2">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-6 py-3 hover:bg-white/10 transition-colors border-b border-transparent hover:border-current ${location.pathname === link.path ? 'text-primary-500 underline' : 'text-white hover:underline'}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
export default Header
