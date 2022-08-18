module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  mode: "jit",
  theme: {
    color: {
      'thumb': '#6C3AC2',
      'track': '#666666'
    },
    fontSize: {
      'h1': '36px',
      'h2': '24px',
      'h3': '18px',
      'h4': '18px',
      'p': '14px',
      'mobile-h1': '23px',
      'mobile-h2': '21px',
      'mobile-h3': '20px',
      'mobile-h4': '17px',
      'mobile-h5': '15px',
      'mobile-p1': '13px',
      'mobile-s': '11px',
      'mobile-xs': '7px',
      'laptop-h1': '24px',
      'laptop-h2': '22px',
      'laptop-h3': '18px',
      'tablet-h4': '18px',
      'tablet-h5': '16px',
      'tablet-p1': '14px',
      'tablet-s': '12px',
      'tablet-xs': '8px',

    },
    extend: {
      fontFamily: {
        'montserrat': ['Montserrat', 'san-serif']
      },
      textColor: {
        'heading-false': '#4f4d4e',
        'heading': '#000000',
        'secondary-purple': '#6c3ac2',
        'tertiary-yellow': '#f5d300',
        'secondary-dark': '#666666',
        'primary-white': '#fff',
        'primary-light': '#F8BD7A'
      },
      gridTemplateColumns:{
        'auto-fill': 'repeat(auto-fill, 14.2%)',
      },
      backgroundColor: {
        'primary-white': '#fff',
        'primary-dark': '#666666',
        'secondary-purple': '#6c3ac2',
        'tertiary-yellow': '#f5d300',
        'primary-light': '#F8BD7A',
        'primary-background':'#FBFBFB'
    
      },
      borderColor: {
        'tertiary-yellow': '#F8BD7A',
        'primary-light' : '#F8BD7A',
        'secondary-purple': '#6c3ac2',

      },
      borderWidth: {
    
      },
      width: {
        '150': '150px',
        '431': '431px',
        'search': '465px',
        'pop-up': '532px',
        'sidebar': '90px',
        'filter-popUP': '302px',
        'search': '465px'
      },
      height: {
        'pop-up': '360px',
        'sidebar': '420px',
        'filter-popUP': '292px',
        'search': '46px'
      },
      outlineColor: {
        'primary-light' : '#F8BD7A'
      },
    },
  },
  
  plugins: [],
}