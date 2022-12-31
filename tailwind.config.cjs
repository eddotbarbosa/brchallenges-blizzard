/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#00AEFF',
        'custom-blue-two': '#29BBFF',
        'custom-gray': '#8F9199',
        'custom-gray-two': '#E5E5E5',
        'custom-black': '#363842',
        'custom-black-two': '#15171B',
        'custom-black-transparent': 'rgba(0, 0, 0, 0.90)'
      },
      backgroundImage: {
        'diablo': "url('/src/assets/banner-hero/games/diablo-bg.png')",
        'hearthstone': "url('/src/assets/banner-hero/games/hearthstone-bg.png')",
        'wow': "url('/src/assets/banner-hero/games/wow-bg.png')",
        'login-modal': "url('/src/assets/modal-background.png')",
      },
      boxShadow: {
        'game-shadow': 'inset 0px -98px 102px -36px rgba(0,0,0,0.97)'
      }
    },
    screens: {
      '2xl': {'max': '1535px'},
      'xl': {'max': '1920px'},
      'lg': {'max': '1440px'},
      'md': {'max': '768px'},
      'sm': {'max': '375px'}
    }
  },
  plugins: [],
}
