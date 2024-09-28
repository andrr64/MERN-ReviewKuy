/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-login': "url(src/assets/background-image/banner-login.jpg)"
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'], 
      },
      screens: {
        'xs': '475px',
        // => @media (min-width: 475px) { ... }
        'tablet': '640px',
        // => @media (min-width: 640px) { ... }
        'laptop': '1024px',
        // => @media (min-width: 1024px) { ... }
        'desktop': '1280px',
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
}