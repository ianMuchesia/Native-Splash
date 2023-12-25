// tailwind.config.js

module.exports = {

   content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}", "./**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        fontFamily:{
          regular:['Quicksand-regular'],
          bold:['Quicksand-bold'],
          semi:['Quicksand-SemiBold'],
          // medium:['Quicksand-Medium'],
          light:['Quicksand-Light']

        }
      },
    },
    plugins: [],
  }