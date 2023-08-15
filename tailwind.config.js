/** @type {import('tailwindcss').Config} */
import { withTV } from 'tailwind-variants/transformer'

const getPropertyValue = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `rgba(var(--${variable}), ${opacityValue})`
      : `rgb(var(--${variable}))`
}


export default withTV({
  darkMode: "class",
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      gray: {
        50: getPropertyValue('gray-50'),
        100: getPropertyValue('gray-100'),
        200: getPropertyValue('gray-200'),
        300: getPropertyValue('gray-300'),
        400: getPropertyValue('gray-400'),
        500: getPropertyValue('gray-500'),
        600: getPropertyValue('gray-600'),
        700: getPropertyValue('gray-700'),
        800: getPropertyValue('gray-800'),
        900: getPropertyValue('gray-900')
      },
      red: {
        50: getPropertyValue('red-50'),
        100: getPropertyValue('red-100'),
        200: getPropertyValue('red-200'),
        300: getPropertyValue('red-300'),
        400: getPropertyValue('red-400'),
        500: getPropertyValue('red-500'),
        600: getPropertyValue('red-600'),
        700: getPropertyValue('red-700'),
        800: getPropertyValue('red-800'),
        900: getPropertyValue('red-900')
      },
      orange: {
        50: getPropertyValue('orange-50'),
        100: getPropertyValue('orange-100'),
        200: getPropertyValue('orange-200'),
        300: getPropertyValue('orange-300'),
        400: getPropertyValue('orange-400'),
        500: getPropertyValue('orange-500'),
        600: getPropertyValue('orange-600'),
        700: getPropertyValue('orange-700'),
        800: getPropertyValue('orange-800'),
        900: getPropertyValue('orange-900')
      },
      green: {
        50: getPropertyValue('green-50'),
        100: getPropertyValue('green-100'),
        200: getPropertyValue('green-200'),
        300: getPropertyValue('green-300'),
        400: getPropertyValue('green-400'),
        500: getPropertyValue('green-500'),
        600: getPropertyValue('green-600'),
        700: getPropertyValue('green-700'),
        800: getPropertyValue('green-800'),
        900: getPropertyValue('green-900')
      },
    },
    spacing: {
      xxs: "0.5rem",
      xs: "0.8rem",
      sm: "1rem",
      md: "1.25rem",
      lg: "1.5rem",
      xl: "2rem",
      xxl: "2.4rem",
      "3xl": "3rem",
      "4xl": "3.6rem"
    }
  },
  plugins: [],
})

