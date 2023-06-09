import { styled, keyframes } from '@stitches-definitions';
import * as Dialog from '@radix-ui/react-dialog';

const fadeIn = keyframes({
  from: { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' },
  to: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
});
const fadeOut = keyframes({
  from: { clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)' },
  to: { clipPath: 'polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)' },
});

const slideIn = keyframes({
  from: { transform: 'translateY(-100%)' },
  to: { transform: 'translateY(0px)' },
});
const slideOut = keyframes({
  from: { transform: 'translateY(0px)' },
  to: { transform: 'translateY(-100%)' },
});

export const DialogContent = styled(Dialog.Content, {
  position: 'fixed',
  inset: 0,

  variants: {
    animation: {
      fade: {
        '&[data-state="open"]': {
          animation: `${fadeIn} 300ms ease-out`,
        },

        '&[data-state="closed"]': {
          animation: `${fadeOut} 300ms ease-in`,
        },
      },
      slide: {
        '&[data-state="open"]': {
          animation: `${slideIn} 300ms ease-out`,
        },

        '&[data-state="closed"]': {
          animation: `${slideOut} 300ms ease-in`,
        },
      },
    },
  },
});

export const CloseButton = styled(Dialog.Close, {
  position: 'absolute',
  top: '0',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  cursor: 'pointer',
  color: '$darkGrey',
  background: 'transparent',
  border: 'none',

  '&:active, &:focus, &:hover': {
    color: '$black',
  },

  variants: {
    type: {
      mobile: {
        height: '$headerHeightShort',
        right: '$m',
      },
      desktop: {
        height: '$headerHeightTall',
        right: '$l',
      },
    },
  },
});
