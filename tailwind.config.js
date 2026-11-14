/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Geist"', "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ['"Geist Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      colors: {
        ink: {
          950: "#09090B",
          900: "#0E0E11",
          850: "#131317",
          800: "#18181D",
          700: "#26262D",
        },
        accent: {
          DEFAULT: "#2DD4BF",
          soft: "#5EEAD4",
          dim: "#134E4A",
        },
      },
      maxWidth: {
        page: "72rem",
      },
    },
  },
  plugins: [],
};
