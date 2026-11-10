const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eef3ff",
          100: "#dbe5fe",
          200: "#bccffd",
          500: "#3b5bdb",
          600: "#2f4ac0",
          700: "#263c9c",
          800: "#1e3a8a",
          900: "#172a63",
        },
        accent: {
          100: "#fff7d1",
          200: "#ffee99",
          300: "#ffe066",
          400: "#ffd43b",
          500: "#fcc419",
        },
      },
      borderRadius: {
        "4xl": "2.5rem",
      },
      fontFamily: {
        sans: ["Mona Sans", ...defaultTheme.fontFamily.sans],
        display: [
          ["Mona Sans", ...defaultTheme.fontFamily.sans],
          { fontVariationSettings: '"wdth" 125' },
        ],
      },
    },
  },
  plugins: [],
};
