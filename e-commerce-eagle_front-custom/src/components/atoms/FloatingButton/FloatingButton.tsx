'use client';
import { styled } from '@stitches-definitions';

export const FloatingButton = styled('button', {
  position: 'fixed',
  zIndex: 2,
  right: '$l',
  bottom: '$l',
  cursor: 'pointer',
  height: '$space$xl',
  width: '$space$xl',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  border: '1px solid transparent',
  borderRadius: '50%',
  transition:
    'background 0.3s ease-in-out, color 0.3s ease-in-out, borderColor 0.3s ease-in-out',

  '&:hover': {
    background: '$blackHover',
  },

  '&:disabled': {
    background: '$mediumGrey',
    pointerEvents: 'none',
    color: '$darkGrey',
  },

  '&:focus-visible': {
    outlineColor: '$mediumGrey',
    background: '$white',
    borderColor: '$mediumGrey',
    color: '$black',
  },

  variants: {
    active: {
      true: {
        '&:not(:disabled)': {
          background: '$white',
          borderColor: '$mediumGrey',
          color: '$black',
        },
      },
      false: {
        background: '$black',
        color: '$white',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
