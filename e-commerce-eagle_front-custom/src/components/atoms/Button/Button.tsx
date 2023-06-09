'use client';
import { styled } from '@stitches-definitions';

export const Button = styled('button', {
  fontFamily: '$helvetica',
  fontWeight: '$normal',
  fontSize: '$2',
  lineHeight: '$3',
  border: 0,
  cursor: 'pointer',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$xxs',
  padding: '0 $l',
  outline: '0px solid transparent',
  outlineOffset: 0,
  transition:
    'color 300ms ease-in-out, background-color 300ms ease-in-out, border-color 300ms ease-in-out, opacity 300ms ease-in-out, outline 300ms ease-in-out',

  '&:disabled': {
    cursor: 'not-allowed',
  },

  variants: {
    variant: {
      primary: {
        color: '$white',
        backgroundColor: '$black',
        textTransform: 'uppercase',
        '&:hover': {
          backgroundColor: '$blackHover',
        },
        '&:focus-visible': {
          outline: '4px solid $black',
        },
        '&:disabled': {
          color: '$darkGrey',
          backgroundColor: '$lightGrey',
        },
      },
      secondary: {
        color: '$black',
        backgroundColor: '$white',
        textTransform: 'uppercase',
        border: '1px solid $black',
        '&:hover': {
          color: '$blackGrey',
          borderColor: '$darkGrey',
        },
        '&:focus-visible': {
          color: '$black',
          borderColor: '$blackGrey',
          outline: '1px solid $blackGrey',
        },
        '&:disabled': {
          color: '$darkGrey',
          borderColor: '$mediumGrey',
        },
      },
      tertiary: {
        padding: '0 $xs',
        color: '$black',
        backgroundColor: 'transparent',
        '&:hover': {
          color: '$blackHover',
        },
        '&:focus-visible': {
          backgroundColor: '$lightGrey',
          outline: 'none',
        },
        '&:disabled': {
          color: '$darkGrey',
        },
      },
      camelCase: {
        textTransform: 'capitalize',
      },
    },
    textTransform: {
      capitalize: {
        textTransform: 'capitalize',
      },
    },
    size: {
      small: {
        height: '$buttonSmall',
      },
      big: {
        height: '$buttonBig',
        width: '100%',
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
    size: 'big',
  },
});
