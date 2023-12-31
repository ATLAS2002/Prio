import type { Config } from 'tailwindcss'
import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))'
      },
      colors: {
        primary: {
          50: colors.indigo['50'],
          100: colors.indigo['100'],
          200: colors.indigo['200'],
          300: colors.indigo['300'],
          400: colors.indigo['400'],
          500: colors.indigo['500'],
          600: colors.indigo['600'],
          700: colors.indigo['700'],
          800: colors.indigo['800'],
          900: colors.indigo['900'],
          950: colors.indigo['950']
        }
      }
    }
  },
  plugins: []
}
export default config
