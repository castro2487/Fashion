import { motion } from 'framer-motion';
import { styled } from '@stitches-definitions';

export const Button = styled(motion.button, {
  all: 'unset',
  display: 'flex',
  alignItems: 'center',
  overflow: 'hidden',
  background: '$black',
  color: '$white',
  height: 32,
  padding: '0 $xxs',
  borderRadius: 16,
  cursor: 'pointer',
  transition:
    'background 300ms ease-in-out, color 300ms ease-in-out, outline 300ms ease-in-out',

  '&:hover': {
    background: '$blackHover',
  },

  '&:disabled': {
    background: '$mediumGrey',
    color: '$darkGrey',
    cursor: 'not-allowed',
  },

  '&:focus-visible': {
    outline: '1px solid $mediumGrey',
    background: '$white',
    color: '$black',
  },
});
