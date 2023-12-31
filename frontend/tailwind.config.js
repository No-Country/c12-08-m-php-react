module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
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
        customGray: '#CCD5D4',
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1350px',
        xl: '1536px',
        'max-xs': { max: '375px' },
        'max-sm': { max: '600px' },
        'max-md': { max: '900px' },
        'max-lg': { max: '1350px' },
        'max-xl': { max: '1536px' },
      },
      gridTemplateColumns: {
        sidebar: '300px auto',
      },
      gridTemplateRows: {
        header: '64px auto',
      },
    },
    plugins: [],
  },
};
