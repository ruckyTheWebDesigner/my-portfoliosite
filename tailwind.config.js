/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "#64ffda",
        "secondary-color": "#1de9b6",
        "card-dark": "hsl(210deg, 30%, 8%)",
      },

      fontFamily: {
        "primary-font": ["Poppins", "sans-serif"],
        "secondary-font": ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
