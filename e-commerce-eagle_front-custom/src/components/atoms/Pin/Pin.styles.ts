import { styled } from '@stitches-definitions';

export const StyledContainer = styled('button', {
  background: 'none',
  padding: 0,
  border: 'none',
  outline: 'none',

  svg: {
    cursor: 'pointer',
    transition: 'all 0.2s ease-in-out',
    transformOrigin: 'bottom',
  },

  '&:hover': {
    svg: {
      color: '$blackHover',
      stroke: '$blackHover',
      transform: 'scale(1.15)',
      transformOrigin: 'bottom',
    },
  },

  '&:focus-visible': {
    svg: { color: '$white', stroke: '$black' },
  },

  '&:disabled': {
    pointerEvents: 'none',

    svg: { color: '$mediumGrey' },
  },

  variants: {
    active: {
      true: {
        '&:not(:disabled)': {
          svg: {
            color: '$white',
            stroke: '$black',
            transform: 'scale(1.15)',
            transformOrigin: 'bottom',
          },
        },
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});
