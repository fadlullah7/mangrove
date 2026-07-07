/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F2E8D5",
        rust: "#C1502E",
        teal: "#1F6F6F",
        mustard: "#E8A93B",
        ink: "#3B2A20",
      },
      fontFamily: {
        display: ['"Abril Fatface"', "serif"],
        body: ['"Vollkorn"', "serif"],
        stamp: ['"Inter"', "sans-serif"],
      },
    },
  },
  plugins: [],
};
