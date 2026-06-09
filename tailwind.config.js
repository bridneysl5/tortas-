/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        burgundy: {
          DEFAULT: '#5C0612',
          light: '#721220',
          dark: '#40020a'
        },
        cherry: {
          DEFAULT: '#A6243C',
          light: '#c73c55',
          dark: '#85192c'
        },
        dustyrose: {
          DEFAULT: '#D96276',
          light: '#e38495',
          dark: '#b84257'
        },
        sweetpink: {
          DEFAULT: '#F7C5CC',
          light: '#f9d7db',
          dark: '#f0adb6'
        },
        cream: {
          DEFAULT: '#FFFDF0',
          dark: '#f5f2df'
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
        script: ['Playball', 'cursive']
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-8px) rotate(1deg)' },
        },
        'pulse-soft': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.02)', opacity: '0.98' },
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulse-soft 3s ease-in-out infinite',
      }
    },
  },
  plugins: [],
}
