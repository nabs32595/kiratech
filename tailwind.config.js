/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#35BAD8',
          light: '#55D9F6'
        },
        text: {
          dark: '#303030',
          gray: '#979797'
        },
        gray: {
          light: '#BCBCBC',
          lighter: '#D8D8D8'
        },
        white: '#FFFFFF',
        black: '#000000'
      },
      fontFamily: {
        primary: ['Open Sans', 'sans-serif'],
        secondary: ['Montserrat', 'sans-serif'],
        tertiary: ['Proxima Nova', 'sans-serif']
      },
      fontSize: {
        'sm': '13px',
        'base': '14px',
        'lg': '32px',
        'xl': '40px'
      },
      borderRadius: {
        'sm': '1px',
        DEFAULT: '5px',
        'lg': '8px'
      },
      boxShadow: {
        'sm': '0px 2px 10px rgba(0, 0, 0, 0.1)',
        'lg': '0px 0px 20px rgba(0, 0, 0, 0.05)'
      },
      spacing: {
        'xs': '5px',
        'sm': '10px',
        'md': '16px',
        'lg': '20px',
        'xl': '36px'
      }
    },
  },
  plugins: [],
  safelist: [
    'bg-primary',
    'text-primary',
    'border-primary',
    'bg-primary-light',
    'text-white',
    'bg-white',
    'text-text-dark',
    'text-text-gray'
  ]
} 