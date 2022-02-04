module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/features/**/*.{js,ts,jsx,tsx}',
    './src/globals/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    colors: {
      'blue': {
        'light': '#31C3BD',
        'light-hover': '#65E9E4',
      },
      'yellow': {
        'light': '#F2B137',
        'light-hover': '#FFC860',
      },
      'navi': {
        'dark': '#1A2A33',
        'dark-semi': '#1F3641'
      },
      'silver': {
        'normal': '#A8BFC9',
        'hover': '#DBE8ED'
      }
    },
  },
  plugins: [],
}
