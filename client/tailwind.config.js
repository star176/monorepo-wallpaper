/** @type {import('tailwindcss').Config} */
module.exports = {
  // content: [],
  content: ['./index.html', './src/renderer/src/**/*.{vue,js,ts,jsx,tsx}'], // 这里是需要扫描的文件
  theme: {
    extend: {}
  },
  plugins: []
}
