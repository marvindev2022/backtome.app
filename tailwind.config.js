/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        footer: "url('/src/assets/footer/background.svg')",
      },
      screens: {
        1536: { max: '1536px', min: '1367px' },
        1440: { max: '1440px', min: '1367px' },
        1366: { min: '1366px', max: '1439px' },
        md: '850px',
      },
      colors: {
        secondary: '#231e54',
        primary: '#FBAD36',
        gray: {
          500: '#494949',
        },
      },
      boxShadow: {
        around:
          '0 59.6602px 184.454px #00000015, 0 24.9246px 77.0605px #0000001e, 0 13.3259px 41.2002px #00000025, 0 7.47038px 23.0965px #0000002c, 0 3.96746px 12.2664px #00000035, 0 1.65095px 5.10431px #0000004a;',
        modal:
          '0px 0px 0px 0px rgba(0, 0, 0, 0.10), 0px 4px 8px 0px rgba(0, 0, 0, 0.10), 0px 15px 15px 0px rgba(0, 0, 0, 0.09), 0px 33px 20px 0px rgba(0, 0, 0, 0.05), 0px 59px 24px 0px rgba(0, 0, 0, 0.01), 0px 92px 26px 0px rgba(0, 0, 0, 0.00);',
      },
      fontFamily: {
        main: ['Abril Fatface'],
        special: ['Poiret One'],
        secondary: ['Inter'],
      },
    },
    
    styles: {
      '::-webkit-scrollbar': {
        width: '5px',
      },
      '::-webkit-scrollbar-track': {
        background: 'var(--blue-dark, #231E54)',
        borderRadius: '10px',
      },
      '::-webkit-scrollbar-thumb': {
        backgroundColor: 'var(--blue-dark, #231E54)',
        borderRadius: '10px',
      },
      scrollbarWidth: 'thin',
      scrollbarColor: 'var(--blue-dark, #231E54) var(--blue-dark, #231E54)',
    },
  },
  plugins: [require('tailwind-scrollbar')],
};
