import { globalCss } from '../../stitches.config';

const GlobalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", Helvetica, "ヒラギノ角ゴ Pro W3", "Hiragino Kaku Gothic Pro", メイリオ, Meiryo, "ＭＳ Ｐゴシック", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    fontSize: '16px',
    lineHeight: 'normal',
    letterSpacing: 'normal',
    color: '#000000',
    textAlign: 'center',
  },

  button: {
    border: 'none',
    background: 'none',
    cursor: 'pointer',
  },

  body: {
    background: '$bg',
  },
});

export default GlobalStyles;
