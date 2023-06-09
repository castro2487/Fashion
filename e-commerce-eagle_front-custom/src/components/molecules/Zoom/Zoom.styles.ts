import { styled } from '@stitches-definitions';

export const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const ZoomButton = styled('button', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '$space$xl',
  width: '$space$xl',
  padding: 0,
  cursor: 'pointer',
  background: '$white',
  border: '1px solid $mediumGrey',
  transition: 'color 0.2s ease-in-out',
  outline: 'none',

  '&:last-child:not(:focus-visible)': {
    borderTop: 'none',
  },

  '&:hover': {
    color: '$blackHover',
  },

  '&:focus-visible': {
    borderColor: '$darkGrey',
  },

  '&:disabled': {
    pointerEvents: 'none',
    color: '$mediumGrey',
  },
});
