import { createStitches, type CSS } from '@stitches/react';
import breakpoints from '@lib/ui/breakpoints';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      black: '#000000',
      blackHover: '#4D4D4D',
      white: '#FFFFFF',
      red: '#D6001C',
      redHover: '#D62B41',
      lightGrey: '#F5F5F5',
      mediumGrey: '#E6E6E6',
      darkGrey: '#727272',
      blackGrey: '#333333',
    },
    fonts: {
      helvetica: 'HelveticaNeueLTStd, Helvetica, Arial, sans-serif',
      bembo: 'BemboStd, Georgia, serif',
    },
    fontSizes: {
      1: '10px',
      2: '11px',
      3: '12px',
      4: '14px',
      5: '15px',
      6: '16px',
      7: '21px',
      8: '24px',
      9: '30px',
      10: '32px',
      11: '44px',
      12: '48px',
    },
    fontWeights: {
      normal: '400',
      bold: '500',
    },
    lineHeights: {
      1: '0.9',
      2: '1.15',
      3: '1.2',
      4: '1.5',
    },
    space: {
      xxs: '4px',
      xs: '8px',
      s: '12px',
      m: '16px',
      l: '24px',
      xl: '32px',
      '2xl': '40px',
      '3xl': '44px',
      '4xl': '56px',
      '5xl': '64px',
      '6xl': '72px',
      '7xl': '80px',
      '8xl': '88px',
      '9xl': '96px',
      '10xl': '104px',
    },
    sizes: {
      headerHeightShort: '48px',
      headerHeightTall: '72px',
      buttonSmall: '40px',
      buttonBig: '48px',
    },
    timingFunctions: {
      1: 'cubic-bezier(0.87, 0, 0.13, 1)',
    },
  },
  utils: {
    _framedBorder: (size: string) => ({
      $$size: size,
      $$thickness: '1px',
      $$color: '$colors$red',
      border: '1px solid $$color',
      backgroundImage:
        'linear-gradient(45deg, $$color 0px, $$color calc($$size * 0.71 - $$thickness / 2), transparent calc($$size * 0.71 - $$thickness / 2)),linear-gradient(135deg, $$color 0px, $$color calc($$size * 0.70 - $$thickness / 2), transparent calc($$size * 0.70 - $$thickness / 2)), linear-gradient(225deg, $$color 0px, $$color calc($$size * 0.70 - $$thickness / 2), transparent calc($$size * 0.70 - $$thickness / 2)), linear-gradient(315deg, $$color 0px, $$color calc($$size * 0.71 - $$thickness / 2), transparent calc($$size * 0.71 - $$thickness / 2))',
    }),
  },
  media: breakpoints.reduce<Record<string, string>>((acc, curr, currIndex) => {
    if (currIndex === breakpoints.length - 1) {
      acc[`bp${currIndex + 1}`] = `(${curr}px <= width)`;
    } else {
      acc[`bp${currIndex + 1}`] = `(${curr}px <= width < ${
        breakpoints[currIndex + 1]
      }px)`;
    }
    return acc;
  }, {}),
});

declare module '@amq' {
  type StichesCSS = CSS<typeof config>;

  type CSSProps = {
    css?: CSS<typeof config>
  }
}
