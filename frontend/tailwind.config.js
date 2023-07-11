module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        green: '#A5D481',
        lightGreen: '#D4F1BE',
        blue: '#0568FD',
        lightBlue: '#D4E6FF',
        yellow: '#EBEE70',
        lightGray: '#E6E9EF',
        white: '#FFFFFF',
        black: '#000000',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
      },
    },
    plugins: [],
  },
};
