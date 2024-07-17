/** @type {import('tailwindcss').Config} */
export default {
  purge: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  content: [],
  theme: {
    container: {
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
      },
    },
    extend: {
      container: {
        center: true,
      },
      fontFamily: {
        serif: ['"Volkhov"'],
        digital: ['"Digital Numbers"'],
      },
      colors: {
        primary: "#484848",
        secondary: "#8a8a8a",
      },
    },
  },
  plugins: [
    // function ({ addComponents }) {
    //   addComponents({
    //     ".container": {
    //       maxWidth: "100%",
    //       "@screen lg": {
    //         maxWidth: "850px",
    //       },
    //       "@screen xl": {
    //         maxWidth: "1280px",
    //       },
    //     },
    //   });
    // },
  ],
};
