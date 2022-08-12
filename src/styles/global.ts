import { globalCss } from 'styles/stitches.config';

const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Poppins, sans-serif',
    fontSize: '16px',
    color: '#000000',
  },

  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },

  body: {
    background: '$white',
  },
});

export default GlobalStyles;
