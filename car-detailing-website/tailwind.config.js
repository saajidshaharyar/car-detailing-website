/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ffe6e6',
          100: '#ffcccc',
          200: '#ff9999',
          300: '#ff6666',
          400: '#ff3333',
          500: '#ff0000', // Primary red
          600: '#cc0000',
          700: '#990000',
          800: '#660000',
          900: '#330000',
        },
        gradient: {
          start: '#000000',
          end: '#ff0000',
        }
      },
      fontFamily: {
        // Updated font stack to match logo style
        sans: ['Inter', 'sans-serif'],
        heading: ['Rajdhani', 'sans-serif'], // Modern, tech-style font for headings
        display: ['Orbitron', 'sans-serif'], // For special elements like the logo text
        accent: ['Audiowide', 'cursive'], // For accent text and callouts
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        fadeIn: 'fadeIn 0.8s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
}
