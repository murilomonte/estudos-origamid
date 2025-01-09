// Importando os tipos para o autocomplete
/** @type {import('tailwindcss').Config} */
module.exports = {
  // Dentro da pasta src, qualquer aquivo que terminar com .html ou .js
  content: ['./src/**/*.{html, js}'],
  theme: {
    // Sobrescreve o tema do tailwind. Útil para temas já definidos pelo time de design
    // colors: {},
    
    // Tem efeito sobre todos os valores
    colors: ({ colors }) => ({
      verde: colors.purple,
      white: 'white'
    }),
    extend: {
      colors: {
        // novas cores
        verde: {
          200: '#acef75',
          300: '#91EE77',
          900: '#16281F',
          950: '#0F1C15',
        },
        // sobrescrita
        green: {
          300: '#91EE77',
        },
      },
      spacing: {
        22: '5.5rem',
      },
      fontSize: {
        xl: ['1.25rem', { lineHeight: '1.5rem' }],
        '2xs': '.5rem'
      },
      screens: {
        xs: '380px'
      },
      keyframes: {
        slideIn: {
          '0%': { opacity: 0, transform: 'translateX(-20px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' }
        },
      },
      animation: {
        slideIn: 'slideIn .3s ease-in-out forwards'
      }
    },
  },
  plugins: [],
}

