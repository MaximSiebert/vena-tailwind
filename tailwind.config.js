module.exports = {
  purge: [],
  theme: {
    fontFamily: {
      'sans': ['Open Sans', 'system-ui', '-apple-system', 'BlinkMacSystemFont', "Segoe UI", 'Roboto', "Helvetica Neue", 'Arial', "Noto Sans", 'sans-serif', "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"],
      'serif': ['Gelasio', 'Georgia', 'Cambria', "Times New Roman", 'Times', 'serif']
    },
    extend: {
      colors: {
        green: {
          '500': '#4A9462',
          '800': '#225D38'
        },
        orange: {
          '400': '#F3B4A2',
          '800': '#953C23',
          '900': '#9D381B'
        },
        gray: {
          '100': '#FBFBFB',
          '200': '#F5F6F5',
          '300': '#D9D8D6',
          '400': '#cbd5e0',
          '500': '#6F7271',
          '600': '#6A6A6A',
          '700': '#4a5568',
          '800': '#2D2A26',
          '900': '#1a202c'
        }
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'last'],
    margin: ['responsive', 'last'],
    padding: ['responsive', 'last'],
  },
  plugins: [],
}
