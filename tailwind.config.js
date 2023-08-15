/** @type {import('tailwindcss').Config} */

const getPropertyValue = (variable) => {
  return ({ opacityValue }) =>
    opacityValue
      ? `hsl(var(--${variable}) / ${opacityValue})`
      : `hsl(var(--${variable}))`
}


export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: getPropertyValue("primary"),
          foreground: getPropertyValue("primary-foreground")
        },
        secondary: {
          DEFAULT: getPropertyValue("secondary"),
          foreground: getPropertyValue("secondary-foreground")
        }
      }
    },
    spacing: {
      xxs: '0.6rem',
      xs: '0.8rem',
      sm: '1rem',
      md: '1.2rem',
      lg: '1.5rem',
      xl: '2rem',
      xxl: '2.4rem',
      '3xl': '3rem',
      '4xl': '3.6rem'
    }
  },
  plugins: [],
}

