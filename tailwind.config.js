/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')

export default {
  content: [ "./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#2761e7",
          light: "#2761e7",
          dark: "#2761e7",
          hover: '#4e83fd',
          100: '#e6effd'
        },
        secondary: {
          DEFAULT: "#f1d24d",
          light: "#f1d24d",
          dark: "#f1d24d",
          100: '#fff2bb',
        },
      },
      flex: {
        '0': '0 0 auto'
      },
      gridTemplateColumns: {
        '2': 'repeat(2, minmax(0, 1fr))',
      }
    },
    screens: {
      sm: '480px',
      md: '768px',
      lg: '992px',
      xl: '1400px',
    },
    fontFamily: {
      'Roboto': ['Roboto', 'sans-serif'],
    },
  },
  plugins: [
    plugin(function ({ addBase, addComponents, theme }) {
      addBase({
        // ".icon-rounded, a": {
        //   transitionProperty: theme("transitionProperty.all"),
        //   transitionDuration: theme("transitionDuration.500"),
        //   transitionTimingFunction: theme("transitionTimingFunction[in-out]")
        // }
      })
      addComponents({
        // '.icon-rounded': {
        //   display: "flex",
        //   flex: theme("flex.0"),
        //   alignItems: "center",
        //   justifyContent: "center",
        //   width: theme("width.10"),
        //   height: theme("height.10"),
        //   fontSize: theme("fontSize.xl"),
        //   borderRadius: theme('borderRadius.full'),
        //   background: theme('colors.white'),
        //   color: theme('colors.black'),
        //   "&:hover": {
        //     color: theme('colors.primary.DEFAULT'),
        //   }
        // }
      })
    })
  ],
}