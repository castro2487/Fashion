'use client';
import { styled } from '@stitches-definitions';

export const TabItem = styled('button', {
  display: 'inline-flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: 0,
  outline: 'none',
  cursor: 'pointer',
  height: 40,
  padding: '0 $xxs',
  fontFamily: '$helvetica',
  fontWeight: '$normal',
  fontSize: '$2',

  '&:disabled': {
    cursor: 'not-allowed',
    opacity: 0.5,
  },

  variants: {
    variant: {
      primary: {
        width: 120,
        color: '$darkGrey',
        backgroundColor: '$white',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        transition: 'color 300ms ease-in-out, background 300ms ease-in-out',

        '&[data-state="active"]': {
          position: 'relative',
          fontFamily: '$bembo',
          fontSize: '$4',
          color: '$black',
          _framedBorder: '6px',
        },

        '&:hover': {
          color: '$blackHover',
        },
        '&:focus-visible': {
          color: '$blackHover',
          backgroundColor: '$lightGrey',
        },

        '&[data-blurry="true"]:not([data-state="active"])': {
          color: '$white',
          background: 'rgba(0,0,0, 0.4)',
          backdropFilter: 'blur(4px)',
        },
        '&[data-blurry="true"]:not([data-state="active"]):focus-visible, &[data-blurry="true"]:not([data-state="active"]):hover':
          {
            background: 'rgba(0,0,0, 0.8)',
          },
      },
      secondary: {
        color: '$black',
        background: 'transparent',
        borderBottom: '1px solid transparent',
        transition:
          'color 300ms ease-in-out, background 300ms ease-in-out, border 300ms ease-in-out',
        '&:hover': {
          color: '$blackHover',
        },
        '&:focus-visible': {
          color: '$blackHover',
          background: '$lightGrey',
        },
        '&[data-state="active"]': {
          borderBottomColor: '$black',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});
