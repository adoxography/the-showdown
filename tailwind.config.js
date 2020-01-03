const neutralGray = {
  '100': '#F7F7F7',
  '200': '#E1E1E1',
  '300': '#CFCFCF',
  '400': '#B1B1B1',
  '500': '#9E9E9E',
  '600': '#7E7E7E',
  '700': '#626262',
  '800': '#515151',
  '900': '#3B3B3B',
  '1000': '#222222'
};

const warmGray = {
  '100': '#FAF9F7',
  '200': '#e8e6e1',
  '300': '#D3C3C4',
  '400': '#B8B2A7',
  '500': '#A39E93',
  '600': '#857F72',
  '700': '#625D52',
  '800': '#504A40',
  '900': '#423D33',
  '1000': '#27241D'
};

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        display: ['Titillium\\ Web', 'sans-serif'],
        body: ['Open\\ Sans', 'sans-serif']
      },
      colors: {
        yellow: {
          '100': '#FFFBEA',
          '200': '#FFF3C4',
          '300': '#FCE588',
          '400': '#FADB5F',
          '500': '#F7C948',
          '600': '#F0B429',
          '700': '#DE911D',
          '800': '#CB6E17',
          '900': '#B44D12',
          '1000': '#8D2B0B'
        },
        gray: warmGray
      },
      maxHeight: {
        '0': '0'
      },
      transitionProperty: {
        'height': 'height'
      }
    }
  },
  variants: {},
  plugins: [
    require('tailwindcss-transitions')()
  ]
};
