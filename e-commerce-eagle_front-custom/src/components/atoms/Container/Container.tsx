'use client';
import { styled } from '@stitches-definitions';

export const Container = styled('div', {
  variants: {
    display: {
      grid: {
        display: 'grid',
      },
      flex: {
        display: 'flex',
      },
    },
    gridColumns: {
      two: {
        'grid-template-columns': 'repeat(2, 1fr)',
      },
    },
    gridFlow: {
      row: { 'grid-auto-flow': 'row' },
      column: { 'grid-auto-flow': 'column' },
    },
    flexDirection: {
      column: { 'flex-direction': 'column' },
    },
    flexWrap: {
      wrap: { 'flex-wrap': 'wrap' },
    },
    alignItems: {
      center: { 'align-items': 'center' },
    },
    justifyContent: {
      center: { 'justify-content': 'center' },
    },
    margin: {
      xxs: {
        margin: '$space$xxs',
      },
      xs: {
        margin: '$space$xs',
      },
      s: {
        margin: '$space$s',
      },
      m: {
        margin: '$space$m',
      },
      l: {
        margin: '$space$l',
      },
      xl: {
        margin: '$space$xl',
      },
    },
    marginTop: {
      xxs: {
        'margin-top': '$space$xxs',
      },
      xs: {
        'margin-top': '$space$xs',
      },
      s: {
        'margin-top': '$space$s',
      },
      m: {
        'margin-top': '$space$m',
      },
      l: {
        'margin-top': '$space$l',
      },
      xl: {
        'margin-top': '$space$xl',
      },
    },
    marginBottom: {
      xxs: {
        'margin-bottom': '$space$xxs',
      },
      xs: {
        'margin-bottom': '$space$xs',
      },
      s: {
        'margin-bottom': '$space$s',
      },
      m: {
        'margin-bottom': '$space$m',
      },
      l: {
        'margin-bottom': '$space$l',
      },
      xl: {
        'margin-bottom': '$space$xl',
      },
    },
    marginLeft: {
      xxs: {
        'margin-left': '$space$xxs',
      },
      xs: {
        'margin-left': '$space$xs',
      },
      s: {
        'margin-left': '$space$s',
      },
      m: {
        'margin-left': '$space$m',
      },
      l: {
        'margin-left': '$space$l',
      },
      xl: {
        'margin-left': '$space$xl',
      },
    },
    marginRight: {
      xxs: {
        'margin-right': '$space$xxs',
      },
      xs: {
        'margin-right': '$space$xs',
      },
      s: {
        'margin-right': '$space$s',
      },
      m: {
        'margin-right': '$space$m',
      },
      l: {
        'margin-right': '$space$l',
      },
      xl: {
        'margin-right': '$space$xl',
      },
    },
    padding: {
      xxs: {
        padding: '$space$xxs',
      },
      xs: {
        padding: '$space$xs',
      },
      s: {
        padding: '$space$s',
      },
      m: {
        padding: '$space$m',
      },
      l: {
        padding: '$space$l',
      },
      xl: {
        padding: '$space$xl',
      },
    },
    backgroundColor: {
      black: {
        backgroundColor: '$black',
      },
      darkGrey: {
        backgroundColor: '$darkGrey',
      },
      blackHover: {
        backgroundColor: '$blackHover',
      },
      white: {
        backgroundColor: '$white',
      },
      redHover: {
        backgroundColor: '$redHover',
      },
      red: {
        backgroundColor: '$red',
      },
      lightGrey: {
        backgroundColor: '$lightGrey',
      },
      mediumGrey: {
        backgroundColor: '$mediumGrey',
      },
      blackGrey: {
        backgroundColor: '$blackGrey',
      },
      greyedOut: {
        opacity: 0.8,
      },
    },
  },
});
