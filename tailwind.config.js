/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'forest green': '#00381F', 
        'metallic gold': '#E8C75A', 
        'off-white': '#F2F0Ef', 
        'pitch': '#1E1E1E', 
        'smoke-grey': '#DADADA',
      }, 
      fontFamily: {
        'main': ['Geist', 'sans-serif'], 
        'body': ['Inter', 'system-ui', 'sans-serif']
      }
    },
  },
  plugins: [],
}

