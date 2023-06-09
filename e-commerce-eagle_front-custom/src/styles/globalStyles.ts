import { globalCss } from '@stitches-definitions';

export const injectGlobalStyles = globalCss({
  // Josh's Custom CSS Reset https://www.joshwcomeau.com/css/custom-css-reset/
  '*, *::before, *::after': {
    boxSizing: 'border-box',
  },
  '*': {
    margin: 0,
  },
  'html, body': {
    height: '100%',
  },
  body: {
    '-webkit-font-smoothing': 'antialiased',
  },
  'img, picture, vide, canvas, svg': {
    display: 'block',
    maxWidth: '100%',
  },
  'input, button, textarea, select': {
    font: 'inherit',
  },
  'p, h1, h2, h3, h4, h5, h6': {
    overflowWrap: 'break-word',
  },
  '#__next': {
    isolation: 'isolate',
    height: '100%',
  },
});
