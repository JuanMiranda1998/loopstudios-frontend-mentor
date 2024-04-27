/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('./src/images/desktop/image-hero.jpg')",
        'hero-mobile': "url('./src/images/mobile/image-hero.jpg')",
      }
    },
    fontFamily: {
      'body': ['"alata"'],
      'title': ['"josefin_sans"'],
    }
  },
  plugins: [],
}

