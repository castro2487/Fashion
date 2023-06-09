import { styled } from '@stitches-definitions';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { motion } from 'framer-motion';

export const Content = styled(DialogPrimitive.Content, {
  position: 'fixed',
  left: 0,
  bottom: 0,
  width: '100%',
  height: '90vh',
  '@supports (height: 100svh)': {
    height: '100svh',
  },
  backgroundColor: '$white',
});

export const Overlay = styled(motion.div, {
  background: '$black',
  position: 'fixed',
  inset: 0,
});

export const HandleContainer = styled(motion.div, {
  background: '$white',
  position: 'sticky',
  top: 0,
  touchAction: 'none',
  isolation: 'isolate',
  zIndex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
});

export const Handle = styled('button', {
  width: 80,
  height: 16,
  borderRadius: 8,
  border: 'none',
  outline: 'none',
  background: 'transparent',
  transition: 'background 300ms ease-in-out',
  position: 'relative',
  '&:focus-visible': {
    background: '$lightGrey',
  },
  '&:after': {
    content: '',
    position: 'absolute',
    top: '50%',
    left: 8,
    right: 0,
    width: 64,
    height: 1,
    transform: 'translateY(-50%)',
    background: '$black',
    borderRadius: 4,
  },
});
