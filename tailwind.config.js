/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        customBlack: '#1a1a1a',
        customViolet: '#8e5e9a',
        customLightViolet: '#af83c1',
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
