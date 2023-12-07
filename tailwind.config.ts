import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        "Bright-orange": "hsl(31, 77%, 52%)",
        "Dark-cyan": "hsl(184, 100%, 22%)",
        "Very-dark-cyan": "hsl(179, 100%, 13%)",

        "Transparent-white(paragraphs)": "hsla(0, 0%, 100%, 0.75)",
        "Very-light-gray(background,headings,buttons)": "hsl(0, 0%, 95%)"
      }
    },
  },
  plugins: [],
}
export default config
