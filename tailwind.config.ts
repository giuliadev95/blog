import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";


const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/sanity/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        darkGrey: 'var(--dark-grey)',
        white: 'var(--white)',
        lightGrey: 'var(--light-grey)',
        lightMintGreen: 'var(--light-mint-green)',
        red: 'var(--red)',
      },
      screens: {
        xs: '360px',
        largeMobile426: '426px',
        xxl2560: '2560px',
        mobile568: '568px',
      },
      width: {
        'fill': '-webkit-fill-available',
      },
    },
  },
  plugins: [typography],
}

export default config; 