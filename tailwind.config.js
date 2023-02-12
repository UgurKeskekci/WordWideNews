/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
  
    extend: {
      
        colors:{
          twitter:'blue'
        },
        spacing:{
          '15':'3.75rem'
        }
      
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    
  ],
}
