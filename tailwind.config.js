const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    colors: {
      gray: colors.coolGray,
      red: colors.rose,
      pink: colors.fuchsia,
      white: colors.white,
      yellow: colors.yellow,
      green: colors.green,
      emerald: colors.emerald,
      cyan: colors.cyan,
      black: colors.black,
      blue: colors.blue,
    },
    fontFamily: {
      sans: ['Poppins', 'serif'],
    }
  },
}
