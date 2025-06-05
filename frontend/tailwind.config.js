/** @type {import('tailwindcss').Config} */
import { colors } from './src/theme'

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        offWhite: colors.offWhite,
        nearBlack: colors.nearBlack,
        brandBrown: colors.brandBrown,
        accentTeal: colors.accentTeal,
      },
      fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
      borderRadius: {
        card: '24px',
      },
    },
  },
  plugins: [],
}
