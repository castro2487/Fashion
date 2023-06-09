'use client';
import { styled } from '@stitches-definitions';

export const Text = styled('span', {
  variants: {
    type: {
      button: {
        fontFamily: '$helvetica',
        fontWeight: '$normal',
        fontSize: '$2',
        lineHeight: '$3',
      },
      labelSmall: {
        fontFamily: '$helvetica',
        fontWeight: '$normal',
        fontSize: '$1',
        lineHeight: '$3',
      },
      labelMedium: {
        fontFamily: '$helvetica',
        fontWeight: '$normal',
        fontSize: '$2',
        lineHeight: '$4',
      },
      labelLarge: {
        fontFamily: '$helvetica',
        fontWeight: '$bold',
        fontSize: '$2',
        lineHeight: '$4',
        textTransform: 'uppercase',
      },
      body: {
        fontFamily: '$helvetica',
        fontWeight: '$normal',
        fontSize: '$5',
        lineHeight: '$3',
      },
      h4: {
        fontFamily: '$bembo',
        fontWeight: '$normal',
        fontSize: '$6',
        lineHeight: '$2',
      },
      h3: {
        fontFamily: '$bembo',
        fontWeight: '$normal',
        fontSize: '$8',
        lineHeight: '$2',
      },
      h2: {
        fontFamily: '$bembo',
        fontWeight: '$normal',
        fontSize: '$10',
        lineHeight: '$1',
        textTransform: 'uppercase',
      },
      h1: {
        fontFamily: '$bembo',
        fontWeight: '$normal',
        fontSize: '$12',
        lineHeight: '$1',
        textTransform: 'uppercase',
      },
    },
    color: {
      black: {
        color: '$black',
      },
      darkGrey: {
        color: '$darkGrey',
      },
      blackHover: {
        color: '$blackHover',
      },
      white: {
        color: '$white',
      },
      redHover: {
        color: '$redHover',
      },
      red: {
        color: '$red',
      },
      lightGrey: {
        color: '$lightGrey',
      },
      mediumGrey: {
        color: '$mediumGrey',
      },
      blackGrey: {
        color: '$blackGrey',
      },
      greyedOut: {
        opacity: 0.8,
      },
    },
  },

  defaultVariants: {
    type: 'body',
  },
});
