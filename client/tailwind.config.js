module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tomato': '#FF6347',
        'gold': '#FFD700',
        'olive': '#808000',
        'teal': '#008080',
        'navy': '#000080',
      }
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}