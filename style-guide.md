# Front-end Style Guide

## Layout

The designs were created to the following widths:

- Mobile: 375px
- Desktop: 1440px

> 💡 These are just the design sizes. Ensure content is responsive and meets WCAG requirements by testing the full range of screen sizes from 320px to large screens.

## Colors

### Primary

- Lime C: hsl(61, 70%, 52%)
- Red C: hsl(4, 69%, 50%)

### Neutral

- White: hsl(0, 0%, 100%)
- Slate 100: hsl(202, 86%, 94%)
- Slate 300: hsl(203, 41%, 72%)
- Slate 500: hsl(200, 26%, 54%)
- Slate 700: hsl(200, 24%, 40%)
- Slate 900: hsl(202, 55%, 16%)

## Typography

### Body Copy

- Font size (paragraph): 16px /** @type {import('tailwindcss').Config} */
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
      colors: {
        'lime': 'hsl(61, 70%, 52%)',
        'red': 'hsl(4, 69%, 50%)',
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
  plugins: [],
}
### Font

- Family: [Plus Jakarta Sans](https://fonts.google.com/specimen/Plus+Jakarta+Sans)
- Weights: 500, 700

> 💎 [Upgrade to Pro](https://www.frontendmentor.io/pro?ref=style-guide) for design file access to see all design details and get hands-on experience using a professional workflow with tools like Figma. The design file for this challenge also includes a design system and tablet layout to help you build a more accurate solution faster.