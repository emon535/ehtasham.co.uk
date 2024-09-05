/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brown: {
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
      },
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
