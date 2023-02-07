/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      backgroundImage: {
        blur: "url(/src/assets/blur.png)",
      },
      fontFamily: {
        sans: "Roboto, sans-serif",
      },
      colors: {
        blue: {
          500: "#81D8F7",
        },
        orange: {
          500: "#FBA94C",
        },
        dark: {
          100: "#18171F",
          200: "#1C1B25",
          300: "#101012",
          400: "#121214",
        },
        gray: {
          100: "#AFADC6",
          200: "#615E7B",
          300: "#5A576F",
          400: "#67637E",
          500: "#5D5A76",
          600: "#3B3949",
          700: "#373446",
          800: "#383646",
          900: "#343344",
          1000: "#292836",
          1100: "#23222E",
        },
        green: {
          100: "#89C140",
          200: "#5FB691",
          300: "#185247",
        },

        purpple: {
          100: "#737AAE",
          200: "#7F5FFF",
          300: "#7453F8",
          400: "#8C70FF",
          500: "#6444E5",
          600: "#3E3078",
          700: "#393956",
        },

        pink: {
          100: "#E43474",
          200: "#FA035C",
        },

        red: {
          100: "#F26060",
          200: "#C24949",
          300: "#6D3535",
        },

        white: {
          100: "#FFFFFF",
          200: "#F3F1F5",
        },

        yellow: {
          100: "#DDBD6C",
        },
      },
    },
  },
  plugins: [],
};
