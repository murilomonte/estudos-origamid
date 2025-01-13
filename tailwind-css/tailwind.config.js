/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  // Dentro da pasta src, qualquer aquivo que terminar com .html ou .js
  content: ['./src/**/*.{html, js}'],
  theme: {
    extend: {},
    container: {
      center: true,
      padding: {
        DEFAULT: '.5rem',
        sm: '1rem',
        lg: '2rem'
      }
    }
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '1px 1px 6px currentColor'
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px 10px currentColor'
        }
      }),
      addComponents({
        '.btn-ghost': {
          'border-radius': '9999px',
          padding: '.5rem 1rem',
          opacity: '.2',
          border: '2px solid #ccc'
        }
      })
    })
  ],
}

