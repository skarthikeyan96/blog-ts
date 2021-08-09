module.exports = {
  purge: {
    enabled: true,
    options: {
      safelist: ["dark"],
    },
    content: [
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
  },
  darkMode: "class", // or 'media' or 'class'
  theme: {
    typography: (theme) => ({
      dark: {
        css: {
          color: "white",
        },
      },
    }),
    extend: {},
  },
  variants: {
    typography: ["dark"],

    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
}
