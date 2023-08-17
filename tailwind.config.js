/** @type {import('tailwindcss').Config} */
import { withTV } from 'tailwind-variants/transformer'

const getPropertyValue = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`
}

const spacingValues = {
  0: "0rem",
  xs: "0.5rem",
  sm: "0.75rem",
  md: "1rem",
  lg: "1.25rem",
  xl: "2.25rem",
  "2xl": "3rem",
  "3xl": "5rem",
  "4xl": "10rem",
  "5xl": "14rem",
  "6xl": "18rem",
  "7xl": "24rem",
  "8xl": "32rem",
  "9xl": "40rem",

  1: '0.125rem',
  2: '0.25rem',
  3: '0.375rem',
  4: '0.5rem',
  5: '0.625rem',
  6: '0.75rem',
  7: '0.875rem',
  8: '1rem',
  9: '1.25rem',
  10: '1.5rem',
  11: '1.75rem',
  12: '2rem',
  13: '2.25rem',
  14: '2.5rem',
  15: '2.75rem',
  16: '3rem',
  17: '3.5rem',
  18: '4rem',
  20: '5rem',
  24: '6rem',
  28: '7rem',
  32: '8rem',
  36: '9rem',
  40: '10rem',
  44: '11rem',
  48: '12rem',
  52: '13rem',
  56: '14rem',
  60: '15rem',
  64: '16rem',
  72: '18rem',
  80: '20rem',
  96: '24rem',
}

export default withTV({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Semantic Tokens
        'primary': {
          'light': getPropertyValue('blue200'),
          'light-hover': getPropertyValue('blue300'),
          'light-active': getPropertyValue('blue400'),
          'light-contrast': getPropertyValue('blue600'),

          'border': getPropertyValue('blue500'),
          'border-hover': getPropertyValue('blue600'),
          'solid-hover': getPropertyValue('blue700'),
          'shadow': getPropertyValue('blue500'),
          'DEFAULT': getPropertyValue('blue600'),
        },

        'secondary': {
          'light': getPropertyValue('purple200'),
          'light-hover': getPropertyValue('purple300'),
          'light-active': getPropertyValue('purple400'),
          'light-contrast': getPropertyValue('purple600'),

          'border': getPropertyValue('purple500'),
          'border-hover': getPropertyValue('purple600'),
          'solid-hover': getPropertyValue('purple700'),
          'shadow': getPropertyValue('purple500'),
          'DEFAULT': getPropertyValue('purple600'),
        },

        'success': {
          'light': getPropertyValue('green200'),
          'light-hover': getPropertyValue('green300'),
          'light-active': getPropertyValue('green400'),
          'light-contrast': getPropertyValue('green700'),

          'border': getPropertyValue('green500'),
          'border-hover': getPropertyValue('green600'),
          'solid-hover': getPropertyValue('green700'),
          'shadow': getPropertyValue('green500'),
          'DEFAULT': getPropertyValue('green600'),
        },

        'warning': {
          'light': getPropertyValue('yellow200'),
          'light-hover': getPropertyValue('yellow300'),
          'light-active': getPropertyValue('yellow400'),
          'light-contrast': getPropertyValue('yellow700'),

          'border': getPropertyValue('yellow500'),
          'border-hover': getPropertyValue('yellow600'),
          'solid-hover': getPropertyValue('yellow700'),
          'shadow': getPropertyValue('yellow500'),
          'DEFAULT': getPropertyValue('yellow600'),
        },

        'error': {
          'light': getPropertyValue('red200'),
          'light-hover': getPropertyValue('red300'),
          'light-active': getPropertyValue('red400'),
          'light-contrast': getPropertyValue('red600'),

          'border': getPropertyValue('red500'),
          'border-hover': getPropertyValue('red600'),
          'solid-hover': getPropertyValue('red700'),
          'shadow': getPropertyValue('red500'),
          'DEFAULT': getPropertyValue('red600'),
        },
      },
      spacing: spacingValues,
      borderRadius: {
        xs: "7px",
        sm: "9px",
        md: "12px",
        base: "14px",
        lg: "16px",
        xl: "18px",
        "2xl": "24px",
        "3xl": "32px",
        squared: "33%",
        rounded: "50%",
        pill: "9999px",
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        md: '1rem',
        lg: '1.125rem',
        xl: '1.25rem',
        "2xl": '1.5rem',
        "3xl": '1.875rem',
        "4xl": '2.25rem',
        "5xl": '3rem',
        "6xl": '3.75rem',
        "7xl": '4.5rem',
        "8xl": '6rem',
        "9xl": '8rem'
      },
      minWidth: spacingValues,
      lineHeight: spacingValues
    },
  },
  plugins: [],
})

