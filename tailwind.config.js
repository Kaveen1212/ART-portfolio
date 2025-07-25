/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      letterSpacing: {
        tight: '-2px',
      },
      fontFamily: {
        quantum: ['Quantum', 'sans-serif'],
        'lacquer': ['Lacquer', 'cursive'],
        'Roboto': ['Roboto', 'sans-serif'],
        'burgundia': ['Burgundia', 'serif'],
      },
      keyframes: {
        'pop-word': {
          '0%': { 
            transform: 'rotateX(120deg)',
            opacity: 0 
          },
          '100%': { 
            transform: 'rotateX(0)',
            opacity: 1 
          },
        },
        'sparkle': {
          '0%': { 
            transform: 'scale(0) rotate(0deg)',
            opacity: 0 
          },
          '50%': { 
            transform: 'scale(1.2) rotate(8deg)',
            opacity: 0.8 
          },
          '100%': { 
            transform: 'scale(0) rotate(15deg)',
            opacity: 0 
          },
        }
      },
      animation: {
        'pop-word': 'pop-word 1.5s cubic-bezier(0.14, 1.23, 0.33, 1.16) forwards',
        'sparkle': 'sparkle 0.4s linear forwards',
      }
    },
  },
  plugins: [],
}
