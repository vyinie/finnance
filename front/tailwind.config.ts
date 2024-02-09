import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    gridTemplateAreas: {
      dashboard: ['budget card', 'budget gainSpend', 'notes debts'],
    },
    extend: {
      colors: {
        neutral: { 450: '#7d7d7d' },
        negative: '#FA3232',
        positive: '#00E5BC',
      },
      // screens: {
      //   xs: { max: '374px' },
      //   'tablet-sm': { min: '457px' },
      //   'tablet-md': { min: '560px' },
      // },
    },
  },
  plugins: [require('@savvywombat/tailwindcss-grid-areas')],
}
export default config
