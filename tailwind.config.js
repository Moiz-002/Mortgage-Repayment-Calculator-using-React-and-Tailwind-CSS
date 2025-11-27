/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'jakarta': ['Plus Jakarta Sans', 'sans-serif'],
      },
      fontSize: {
        base: '16px',
      },
      colors: {
        'lime': 'hsl(61, 70%, 52%)',
        'red': 'hsl(4, 69%, 50%)',
        'accentYellow': "hsl(61,70%,52%)",
        // custom requested color utility
        'accentYellowLight': 'hsl(61, 74%, 74%)',
        'slate': {
          100: 'hsl(202, 86%, 94%)',
          300: 'hsl(203, 41%, 72%)',
          500: 'hsl(200, 26%, 54%)',
          700: 'hsl(200, 24%, 40%)',
          900: 'hsl(202, 55%, 16%)',
        },
      },
    },
  },
  plugins: [
    // Add accent-* utilities from the color palette (e.g. .accent-accentYellowLight)
    (function () {
      const plugin = require('tailwindcss/plugin');
      const flatten = require('tailwindcss/lib/util/flattenColorPalette').default || require('tailwindcss/lib/util/flattenColorPalette');

      return plugin(function ({ matchUtilities, theme }) {
        const values = flatten(theme('colors'));
        matchUtilities(
          {
            accent: (value) => ({ 'accent-color': value }),
          },
          { values }
        );
      });
    })(),
  ],
}