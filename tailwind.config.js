module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    spacing: {
      px: "1px",
      0: "0",
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      24: "6rem",
      32: "8rem",
      40: "10rem",
      48: "12rem",
      56: "14rem",
      64: "16rem",
      72: "18rem",
      80: "20rem",
      88: "22rem",
      96: "24rem",
      104: "26rem",
      112: "28rem",
      120: "30rem",
      128: "32rem",
      136: "34rem",
      144: "36rem",
      152: "38rem",
      160: "40rem",
    },
    minHeight: (theme) => ({
      0: "0",
      auto: "auto",
      ...theme("spacing"),
      full: "100%",
      screen: "100vh",
    }),
    extend: {
      colors: {
        primary: {
          lighter: "#333333", // 06A7E2
          DEFAULT: "#333333", //ecc94b
          dark: "#333333",
        },
        secondary: {
          lighter: "#333333",
          DEFAULT: "#333333", //1a202c
          dark: "#333333",
        },
        tertiary: {
          lighter: "#7BC9E4",
          DEFAULT: "#00A7E0", //1a202c
          dark: "#1388B0",
        },
        dark: {
          lighter: "#363B45", // 06A7E2
          DEFAULT: "#1a202c", //ecc94b
          dark: "#080D15",
        },
        highlight: {
          lighter: "#f6e05e",
          DEFAULT: "#ecc94b", //1a202c
          dark: "#d69e2e",
        },

        // SB Specific Colors: Dont Change
        sb: {
          gray: "#595B69",
          lightgray: "#7B7D88",
          black: "#1B202B",
          green: "#00818A",
          blue: "#8591C6",
          teal: "#00818A",
          tealMedium: "#20B5BF",
          tealLight: "#CDF9FC",
          textColor: "#110E17",
        },
      },

      spacing: {
        xl: "10rem",
        lg: "6.25rem",
        md: "4rem",
        sm: "1.5rem",
        xs: ".75rem",
        "2/3": "66.666667%",
        "3/4": "75%",
        "1/2": "50%",
      },
      fontFamily: {
        // Dont forget to add google fonts link into public/index.html
        sans: ["Roboto", "system-ui"],
        lato: ["Lato", "system-ui"],

        // SB Specific: Dont Change
        sbHeading: ["Oswald", "system-ui"],
        sbBody: ["Roboto", "system-ui"],
      },
    },
  },
  variants: {
    extend: {
      opacity: ["group-hover", "hover", "active"],
      backgroundColor: ["group-hover", "active"],
      borderColor: ["group-focus"],
      textColor: ["active"],
    },
  },
  plugins: [],
};
