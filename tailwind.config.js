module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    typography: (theme) => {
      console.log(theme("fontSize.3xl"));
      return {
        DEFAULT: {
          css: {
            h1: {
              fontSize: theme("fontSize.3xl")[0],
              ...theme("fontSize.3xl")[1],
              // fontSize: "32px", // reflected
              marginTop: theme("margin.4"), // reflected
            },
          },
        },
      };
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/typography")],
};
