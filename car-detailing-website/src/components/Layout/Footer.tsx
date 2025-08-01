import React, { Component } from 'react'
import { PhoneIcon, MailIcon, MapPinIcon } from 'lucide-react'
/*
 * Footer Component
 *
 * Site-wide footer that displays:
 * - Company branding
 * - Quick navigation links
 * - Contact information
 * - Copyright notice
 *
 * Development Timeline:
 * - Day 1: Basic footer structure
 * - Day 2: Added responsive layout
 * - Day 3: Integrated contact information
 * - Day 4: Enhanced with dark mode support
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white pt-12 pb-8 relative">
      {/* Animated border overlay */}
      <div className="absolute top-0 left-0 w-full h-[2px] overflow-hidden">
        <div className="w-[200%] h-full bg-gradient-to-r from-transparent via-primary-500 to-transparent animate-[shimmer_6s_ease-in-out_infinite]" />
      </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center">
              <img
                src="TND Sign.png"
                alt="The Neighbourhood Detailer"
                className="h-20 w-auto object-contain"
              />
              <h3 className="ml-2 text-xl font-display tracking-wider text-primary-500">
                The Neighbourhood Detailer
              </h3>
            </div>
            <p className="mt-4 max-w-xs text-gray-400 font-sans">
              Professional car detailing services that bring your vehicle back
              to showroom condition. We take pride in our attention to detail
              and customer satisfaction.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-8 md:gap-x-12 max-w-full">
            <div>
              <h4 className="text-lg font-heading mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="/"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/gallery"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    href="/about"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-heading mb-4 text-white">
                Contact Information
              </h4>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPinIcon className="w-5 h-5 mr-2 text-blue-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">
                    Anywhere in the GTA
                  </span>
                </li>
                <li className="flex items-center">
                  <PhoneIcon className="w-5 h-5 mr-2 text-blue-400" />
                  <a
                    href="tel:+6475076121"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    (647) 507-6121
                  </a>
                </li>
                <li className="flex items-center">
                  <MailIcon className="w-5 h-5 mr-2 text-blue-400" />
                  <a
                    href="mailto:theneighbourhooddetailers@gmail.com"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    theneighbourhooddetailers@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-gray-500 text-sm font-sans">
          <p>
            &copy; {new Date().getFullYear()} The Neighbourhood Detailer. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
export default Footer

