import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#14532d',
        secondary: '#15803d',
        accent: '#22c55e',
        forest: '#166534',
        white: '#ffffff',
      },
    },
  },
  plugins: [],
};

export default config;