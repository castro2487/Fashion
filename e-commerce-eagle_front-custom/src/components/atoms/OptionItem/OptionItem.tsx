'use client';
import { styled } from '@stitches-definitions';

export const OptionItem = styled('div', {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  alignSelf: 'center',
  height: '60px',
  userSelect: 'none',
  background: '$white',
  color: '$darkGrey',
  padding: '0 $m',
  transition: 'color 100ms ease-in-out, background-color 100ms ease-in-out',
  border: '1px solid $lightGrey',
  cursor: 'pointer',

  '&:not(:last-of-type)': {
    borderBottom: 'none',
  },

  '&[data-state="checked"]': {
    color: '$black',
  },

  '&:focus': {
    background: '$lightGrey',
    color: '$black',
  },

  variants: {
    active: {
      true: {
        color: '$black',
      },
    },
  },
});
