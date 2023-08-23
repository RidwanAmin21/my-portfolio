module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation: {
        typing: 'typing 5s steps(40, end) forwards',  // 5 seconds duration and 40 steps
        'blink-caret': 'blink-caret 1s infinite'
    },
    keyframes: {
        typing: {
            '0%': { width: '0' },
            '100%': { width: '100%' }
        },
        'blink-caret': {
            '0%, 100%': { borderColor: 'transparent' },
            '50%': { borderColor: 'white' }
        }
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}