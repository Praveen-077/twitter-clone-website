/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui";
import daisyUIThemes from "daisyui/src/theming/themeDefaults";
module.exports = {
  content: ["./index.html", "./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  daisyui: {
    themes: [
      "light",
      {
        black: {
          ...daisyUIThemes["black"],
          primary: "rgb(29, 155, 240)",
          secondary: "rgb(24, 24, 24)",
					"base-100": "#000000",
        },
      },
    ],
  },
};
