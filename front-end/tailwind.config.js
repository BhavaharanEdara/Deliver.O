/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,html}"],
    theme: {
      extend: {
        fontFamily: {
          customFont: ['"Custom Font"',"Helvetica Neue"],
        },
  
      },
    },
    plugins: [],
  }