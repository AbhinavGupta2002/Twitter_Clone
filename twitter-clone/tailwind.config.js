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
        main: '#1DA1F2'
      },
      width: {
        rightDashboard: '3.5rem',
        42: '10.5rem',
        main: '37.5rem'
      },
      height: {
        rightDashboard: '3.5rem',
        fullRightDashboard: '64rem'
      }
    },
  },
  plugins: [],
}
