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
          50: '#fffaf2',
          100: '#fdf0d5',
          200: '#fae0a8',
          300: '#f5cd76',
          400: '#efba4d',
          500: '#d4a038', // Primary Gold (matches logo)
          600: '#b5842c',
          700: '#8f6823',
          800: '#6b4e1a',
          900: '#523b14',
},
        gradient: {
          start: '#000000',
          end: '#d4a038', // Gold
        },
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
        'shimmer-gradient': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
      },
      animation: {
        // Enhanced animations for better UX
        fadeIn: 'fadeIn 1s ease-out',
        fadeInFast: 'fadeInFast 0.3s ease-out',
        slideInUp: 'slideInUp 0.4s ease-out',
        slideInDown: 'slideInDown 0.4s ease-out',
        slideInLeft: 'slideInLeft 0.4s ease-out',
        slideInRight: 'slideInRight 0.4s ease-out',
        shimmer: 'shimmer 2s ease-in-out infinite',
        pulse: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        spin: 'spin 1s linear infinite',
        bounce: 'bounce 1s infinite',
        // Advanced animations for FAANG-level UX
        scaleIn: 'scaleIn 0.3s ease-out',
        scaleOut: 'scaleOut 0.3s ease-in',
        rotateIn: 'rotateIn 0.5s ease-out',
        elasticIn: 'elasticIn 0.6s ease-out',
        rubberBand: 'rubberBand 1s ease-out',
        zoomIn: 'zoomIn 0.3s ease-out',
        zoomOut: 'zoomOut 0.3s ease-in',
        flipInX: 'flipInX 0.6s ease-out',
        flipInY: 'flipInY 0.6s ease-out',
        // Loading animations
        skeletonWave: 'skeletonWave 1.2s ease-in-out infinite',
        loadingDots: 'loadingDots 1.4s ease-in-out infinite',
      },
      keyframes: {
        // Existing animations
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(2rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInFast: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        // Enhanced slide animations
        slideInUp: {
          '0%': { opacity: '0', transform: 'translateY(100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInDown: {
          '0%': { opacity: '0', transform: 'translateY(-100%)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(100%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        // Shimmer effect for skeleton loading
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        // Advanced scale animations
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.9)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        scaleOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '100%': { opacity: '0', transform: 'scale(0.9)' },
        },
        // Rotation animations
        rotateIn: {
          '0%': { opacity: '0', transform: 'rotate(-200deg)' },
          '100%': { opacity: '1', transform: 'rotate(0deg)' },
        },
        // Elastic animations for premium feel
        elasticIn: {
          '0%': { opacity: '0', transform: 'scale3d(0.3, 0.3, 0.3)' },
          '20%': { transform: 'scale3d(1.1, 1.1, 1.1)' },
          '40%': { transform: 'scale3d(0.9, 0.9, 0.9)' },
          '60%': { opacity: '1', transform: 'scale3d(1.03, 1.03, 1.03)' },
          '80%': { transform: 'scale3d(0.97, 0.97, 0.97)' },
          '100%': { opacity: '1', transform: 'scale3d(1, 1, 1)' },
        },
        // Rubber band effect
        rubberBand: {
          '0%': { transform: 'scale3d(1, 1, 1)' },
          '30%': { transform: 'scale3d(1.25, 0.75, 1)' },
          '40%': { transform: 'scale3d(0.75, 1.25, 1)' },
          '50%': { transform: 'scale3d(1.15, 0.85, 1)' },
          '65%': { transform: 'scale3d(0.95, 1.05, 1)' },
          '75%': { transform: 'scale3d(1.05, 0.95, 1)' },
          '100%': { transform: 'scale3d(1, 1, 1)' },
        },
        // Zoom animations
        zoomIn: {
          '0%': { opacity: '0', transform: 'scale(0.3)' },
          '50%': { opacity: '1' },
          '100%': { transform: 'scale(1)' },
        },
        zoomOut: {
          '0%': { opacity: '1', transform: 'scale(1)' },
          '50%': { opacity: '0', transform: 'scale(0.3)' },
          '100%': { opacity: '0' },
        },
        // 3D flip animations
        flipInX: {
          '0%': { transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', opacity: '0' },
          '40%': { transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)' },
          '60%': { transform: 'perspective(400px) rotate3d(1, 0, 0, 10deg)', opacity: '1' },
          '80%': { transform: 'perspective(400px) rotate3d(1, 0, 0, -5deg)' },
          '100%': { transform: 'perspective(400px)', opacity: '1' },
        },
        flipInY: {
          '0%': { transform: 'perspective(400px) rotate3d(0, 1, 0, 90deg)', opacity: '0' },
          '40%': { transform: 'perspective(400px) rotate3d(0, 1, 0, -20deg)' },
          '60%': { transform: 'perspective(400px) rotate3d(0, 1, 0, 10deg)', opacity: '1' },
          '80%': { transform: 'perspective(400px) rotate3d(0, 1, 0, -5deg)' },
          '100%': { transform: 'perspective(400px)', opacity: '1' },
        },
        // Advanced loading animations
        skeletonWave: {
          '0%': { transform: 'translateX(-100%)' },
          '50%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        loadingDots: {
          '0%, 80%, 100%': { transform: 'scale(0)', opacity: '0.5' },
          '40%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      // Enhanced spacing for better layouts
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      // Enhanced border radius for modern look
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
        '6xl': '3rem',
      },
      // Enhanced shadows for depth
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        'glass-inset': 'inset 0 -1px 0 0 rgba(255, 255, 255, 0.05)',
        'colored': '0 10px 15px -3px rgba(212, 160, 56, 0.15), 0 4px 6px -2px rgba(212, 160, 56, 0.08)',
        'colored-lg': '0 25px 50px -12px rgba(212, 160, 56, 0.25)',
        'inner-lg': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.1)',
      },
      // Enhanced backdrop blur for glassmorphism
      backdropBlur: {
        xs: '2px',
      },
      // Enhanced z-index scale
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
      // Enhanced transforms for smooth interactions
      scale: {
        '102': '1.02',
        '103': '1.03',
        '104': '1.04',
        '108': '1.08',
      },
      // Enhanced transition durations
      transitionDuration: {
        '400': '400ms',
        '600': '600ms',
        '800': '800ms',
        '900': '900ms',
        '1200': '1200ms',
        '1500': '1500ms',
        '2000': '2000ms',
      },
      // Enhanced transition timing functions
      transitionTimingFunction: {
        'bounce-in': 'cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'bounce-out': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'snappy': 'cubic-bezier(0.4, 0, 0.6, 1)',
      },
      // Enhanced gradient stops for modern designs
      gradientColorStops: {
        '10': '10%',
        '15': '15%',
        '35': '35%',
        '65': '65%',
        '85': '85%',
      },
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    // Custom plugin for glassmorphism utilities
    function({ addUtilities }) {
      const glassmorphismUtilities = {
        '.glass': {
          background: 'rgba(255, 255, 255, 0.05)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.1)',
        },
        '.glass-dark': {
          background: 'rgba(0, 0, 0, 0.1)',
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
        },
        '.glass-gold': {
          background: 'rgba(212, 160, 56, 0.1)', // from primary[500]
          backdropFilter: 'blur(10px)',
          border: '1px solid rgba(212, 160, 56, 0.3)',
        },
      };
      addUtilities(glassmorphismUtilities);
    },
    // Custom plugin for skeleton loading utilities
    function({ addUtilities }) {
      const skeletonUtilities = {
        '.skeleton': {
          background: 'linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeletonWave 1.2s ease-in-out infinite',
        },
        '.skeleton-dark': {
          background: 'linear-gradient(90deg, #374151 25%, #4b5563 50%, #374151 75%)',
          backgroundSize: '200% 100%',
          animation: 'skeletonWave 1.2s ease-in-out infinite',
        },
      };
      addUtilities(skeletonUtilities);
    },
    // Custom plugin for advanced hover effects
    function({ addUtilities }) {
      const hoverUtilities = {
        '.hover-glow': {
          transition: 'all 0.3s ease',
          '&:hover': {
            boxShadow: '0 0 20px rgba(212, 160, 56, 0.5)',
            transform: 'translateY(-2px)',
          },
        },
        '.hover-lift': {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px) scale(1.02)',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
          },
        },
        '.hover-tilt': {
          transition: 'all 0.3s ease',
          '&:hover': {
            transform: 'perspective(1000px) rotateX(10deg) rotateY(10deg) scale(1.05)',
          },
        },
      };
      addUtilities(hoverUtilities);
    },
    // Custom plugin for loading states
    function({ addUtilities }) {
      const loadingUtilities = {
        '.loading-spinner': {
          border: '2px solid #f3f3f3',
          borderTop: '2px solid #ff0000',
          borderRadius: '50%',
          animation: 'spin 1s linear infinite',
        },
        '.loading-dots': {
          display: 'inline-block',
          '&::after': {
            content: '"⠋"',
            animation: 'loadingDots 1.4s ease-in-out infinite',
          },
        },
        '.loading-pulse': {
          animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        },
      };
      addUtilities(loadingUtilities);
    },
  ]
}