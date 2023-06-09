import { styled } from '@stitches-definitions';

export const ImageContainer = styled('div', {
  width: 60,
  height: 60,
  position: 'relative',
});

export const StyledContainer = styled('button', {
  all: 'unset',
  outline: 'none',
  cursor: 'pointer',
  color: 'var(--defaultColor, $black)',
  transition:
    'color 150ms ease-in-out, background 150ms ease-in-out, box-shadow 150ms ease-in-out',
  position: 'relative',

  '&:focus-visible': {
    background: '$lightGrey',
    boxShadow: '0 0 0 4px $colors$lightGrey',
  },

  '&:disabled': {
    color: '$darkGrey',
    cursor: 'not-allowed',
    filter: 'grayscale(1)',

    [`& ${ImageContainer}`]: {
      opacity: 0.5,
    },
  },

  variants: {
    selected: {
      true: {
        '&:after': {
          content: '',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'currentColor',
        },
      },
    },
    outOfStock: {
      true: {
        ['&:after']: {
          content: '',
          position: 'absolute',
          width: '100%',
          height: 1,
          background: '$darkGrey',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%) rotate(-45deg)',
        },
      },
    },
  },
});
