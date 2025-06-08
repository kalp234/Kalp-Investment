/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '25%': { transform: 'translateX(-3px)' },
          '75%': { transform: 'translateX(3px)' },
        },
        wiggle: {
          '0%, 100%': { transform: 'rotate(-1deg)' },
          '50%': { transform: 'rotate(1deg)' },
        },
      },
      animation: {
        shake: 'shake 0.5s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      }
      
    },
  },
  plugins: [
    require('daisyui'),
    require('flowbite/plugin')
  ],
}

