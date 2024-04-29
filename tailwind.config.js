/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ) ,url('/images/desktop/image-hero.jpg')",
        'hero-mobile': "linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/images/mobile/image-hero.jpg')",
      }
    },
    fontFamily: {
      'body': ['"alata"'],
      'title': ['"josefin_sans"'],
    }
  },
  plugins: [],
}

