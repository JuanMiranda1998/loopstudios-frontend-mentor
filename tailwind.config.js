/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'hero-desktop': "url('/images/desktop/image-hero.jpg')",
        'hero-mobile': "url('/images/mobile/image-hero.jpg')",
      }
    },
    fontFamily: {
      'body': ['"alata"'],
      'title': ['"josefin_sans"'],
    }
  },
  plugins: [],
}

