/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "off-white": "rgb(245, 247, 244)",
        "navy-blue": "rgb(16, 40, 54)",
        "light-blue": "rgb(115, 165, 240)",
      },
      boxShadow: {
        xl: "3px 3px 9px rgba(0, 0, 0, .7)",
        "nav-shadow": "0 8px 8px rgba(0, 0, 0, .1)",
      },
      dropShadow: {
        "black": "2px 2px 4px #000000AA",
      },
      fontFamily: {
        archivo: ["archivo", "archivo-italic"],
        lilitia: ["lilitia"],
      },
      animation: {
        slideUp: "slideUp 1s ease-in-out",
      },
    },
  },
  plugins: [],
}

