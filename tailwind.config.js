/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": {
          "bright-blue": "hsl(220, 98%, 61%)",
        },
        "lightTheme": {
          "veryLightGray": "hsl(0, 0%, 98%)",
          "veryLightGrayishBlue": "hsl(236, 33%, 92%)",
          "lightGrayishBlue": "hsl(233, 11%, 84%)",
          "darkGrayishBlue": "hsl(236, 9%, 61%)",
          "veryDarkGrayishBlue": " hsl(235, 19%, 35%)"
        },
        "darkTheme": {
          "veryDarkBlue": "hsl(235, 21%, 11%)",
          "veryDarkDesaturatedBlue": "hsl(235, 24%, 19%)",
          "lightGrayishBlue": "hsl(234, 39%, 85%)",
          "LightGrayishBlueHover": "hsl(236, 33%, 92%)",
          "DarkGrayishBlue": "hsl(234, 11%, 52%)",
          "VeryDarkGrayishBlue": "hsl(233, 14%, 35%)",
          "VeryVeryDarkGrayishBlue": "hsl(237, 14%, 26%)"
        }
      }
    },
  },
  plugins: [],
}