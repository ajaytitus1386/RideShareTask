module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ['"Raleway"', "sans-serif"],
      },
      colors: {
        jetBlack: "#101010",
        coal: "#171717",
        midGray: "#232323",
        primary: "#FFFFFF",
        lightGray: "#D0CBCB",
      },
    },
  },
  plugins: [],
};
