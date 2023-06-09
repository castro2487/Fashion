import { styled, keyframes } from '@stitches-definitions';
import * as DialogPrimitive from '@radix-ui/react-dialog';

const fadeIn = keyframes({
  from: { background: 'rgba(0,0,0,0)' },
  to: { background: 'rgba(0,0,0,0.8)' },
});

const fadeOut = keyframes({
  from: { background: 'rgba(0,0,0,0.8)' },
  to: { background: 'rgba(0,0,0,0)' },
});

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  position: 'fixed',
  zIndex: 1,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  display: 'flex',
  justifyContent: 'flex-end',

  '&[data-state="open"]': {
    animation: `${fadeIn} 300ms ease-in-out forwards`,
  },

  '&[data-state="closed"]': {
    animation: `${fadeOut} 300ms ease-in-out`,
  },
});

const slideIn = keyframes({
  from: { transform: '$$transformValue' },
  to: { transform: 'translate3d(0,0,0)' },
});

const slideOut = keyframes({
  from: { transform: 'translate3d(0,0,0)' },
  to: { transform: '$$transformValue' },
});

export const StyledContent = styled(DialogPrimitive.Content, {
  backgroundColor: '$white',
  overflowY: 'auto',
  willChange: 'transform',
  padding: '$$paddingValue 0',

  '&[data-state="open"]': {
    animation: `${slideIn} 300ms ease-in-out`,
  },

  '&[data-state="closed"]': {
    animation: `${slideOut} 300ms ease-in-out`,
  },

  variants: {
    side: {
      right: {
        $$transformValue: 'translate3d(100%,0,0)',
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',
      },
    },

    width: {
      full: {
        width: '100%',
      },
      half: {
        width: '50%',
      },
      side: {
        width: 'calc(472/1440 * 100%)',
      },
      fixed: {
        width: '472px',
      },
    },

    padding: {
      m: {
        $$paddingValue: '$space$m',
      },
      l: {
        $$paddingValue: '$space$l',
      },
    },
  },
});

export const Header = styled('div', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$l',
  padding: '0 $$paddingValue',
});

export const StyledCloseButton = styled(DialogPrimitive.Close, {
  flexShrink: 0,
  padding: 0,
  outline: 'none',
  borderRadius: '50%',
  border: 'none',
  background: 'none',

  '&:focus-visible': {
    outline: '1px solid $black',
  },
});
