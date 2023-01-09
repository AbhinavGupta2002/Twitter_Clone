/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        search: '#EBEEF0',
        rightDashboard: '#F7F9FA'
      },
      colors: {
        text1: '#5B7083',
        main: '#1DA1F2',
        more: '#071622',
        heart: '#d8236f',
        retweet: '#2eba7c'
      },
      width: {
        rightDashboard: '3.5rem',
        42: '10.5rem',
        34: '8.5rem',
        main: '37.5rem'
      },
      height: {
        rightDashboard: '3.5rem',
        fullRightDashboard: '64rem'
      },
      borderWidth: {
        3: '3px'
      },
      paddingLeft: {
        10_5: '2.625rem'
      },
      paddingRight: {
        10_5: '2.625rem'
      }
    },
  },
  plugins: [],
}
