/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlack: '#1a1a1a',
        customLightBlue: '#18D4E1',
        customLightBlueHover: '#0ee1f0',
        customWhite: '#efebdb',
      },
      fontFamily: {
        'slowdex': ['Slowdex', 'sans-serif'],
        'bruce-forever': ['BruceForeverRegular', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
