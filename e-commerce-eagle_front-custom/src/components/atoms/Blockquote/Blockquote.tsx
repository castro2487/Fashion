'use client';
import { styled } from '@stitches-definitions';

export const Blockquote = styled('blockquote', {
  position: 'relative',

  '&:before,&:after': {
    display: 'block',
    fontFamily: '$bembo',
    fontSize: 60,
    lineHeight: 0,
    fontWeight: '$normal',
    position: 'absolute',
  },
  '&:before': {
    content: 'open-quote',
  },
  '&:after': {
    content: 'close-quote',
  },

  variants: {
    quotesPlacement: {
      vertical: {
        padding: '$xl 0',

        '&:after': {
          right: 0,
          bottom: 0,
        },
      },
      horizontal: {
        padding: '0 $3xl',

        '&:before': {
          left: 0,
          top: 30,
        },
        '&:after': {
          right: 0,
          bottom: 0,
        },
      },
    },
  },

  defaultVariants: {
    quotesPlacement: 'vertical',
  },
});
