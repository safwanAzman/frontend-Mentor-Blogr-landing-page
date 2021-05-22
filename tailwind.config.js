module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {

        //Primary text
        'light-red-300': '#FF525D', // Light red
        'light-red-200': '#FF7A85', // Very light red
        'dark-blue-500': '#1F3F5B', // Very dark blue

        //Neutral
        'light-gray-300': '#C8C8CB', // text footer
        'light-gray-500': '#4B5862', // body copy
        'dark-gray-500':  '#25252D', // footer background

        //Gradient bg
        'light-red-400': '#FF8F70', // Very light red
        'light-red-500': '#FF3D54', // Light red

        //Background gradient body
        'dark-blue-600': '#2C2D3F', // Very dark gray blue
        'dark-blue-400': '#3F4164', // Very dark desaturated blue
      },

      height: {
        'h-35' :'35rem',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
