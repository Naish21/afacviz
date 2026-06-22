/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // desactiva el modo oscuro automático: tema claro y coherente
  content: [
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF8F1',
        ink: '#26312B',
        muted: '#5C6B62',
        line: '#ECE6DA',
        brand: { DEFAULT: '#2F7A4D', dark: '#1E5538', light: '#E5F0E9' },
        coral: { DEFAULT: '#E26D5C', dark: '#C2503F', light: '#FBE9E5' },
        sun: { DEFAULT: '#F2B441', dark: '#C98A18', light: '#FCEFD2' },
        sky: { DEFAULT: '#3D8DA8', dark: '#2C6A80', light: '#E2EFF3' },
        grape: { DEFAULT: '#7A5BB0', dark: '#5E4490', light: '#EEE8F6' },
      },
      fontFamily: {
        display: ['"Baloo 2"', 'ui-rounded', 'system-ui', 'sans-serif'],
        body: ['"Nunito Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        card: '0 2px 4px rgba(38,49,43,.04), 0 8px 24px rgba(38,49,43,.07)',
        lift: '0 10px 20px rgba(38,49,43,.08), 0 20px 48px rgba(38,49,43,.12)',
      },
    },
  },
  plugins: [],
}
