'use client';
import { styled } from '@stitches-definitions';

export const FramedContent = styled('div', {
  width: '100%',
  height: '100%',
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  gap: '$xxs',
  textAlign: 'center',

  variants: {
    spacing: {
      l: {
        padding: '$l',
      },
      '4xl': {
        padding: '$4xl',
      },
    },
  },

  '&:after': {
    content: '',
    position: 'absolute',
    inset: 0,
    pointerEvents: 'none',
    _framedBorder: '8px',
  },

  defaultVariants: {
    spacing: 'l',
  },
});
