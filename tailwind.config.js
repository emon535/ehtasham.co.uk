/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        spring: ['Roboto', 'sans-serif',"FontSpringDemo"],
      },
      colors: {
        custom: {
        50: '#f5f2eb',
        100: '#eaddd3',
        200: '#d4bba7',
        300: '#b79679',
        400: '#95714c',
        500: '#76562f',
        600: '#5b4324',
        700: '#453219',
        800: '#312311',
        900: '#20150a',
        1000:"#3b2d2c"
      },
        background: "#f6f3ee",
        foreground: "#f6f3ee",
      },
    },
  },
  plugins: [],
};
