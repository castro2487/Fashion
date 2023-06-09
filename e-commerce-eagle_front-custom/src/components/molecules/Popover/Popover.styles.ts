import * as Popover from '@radix-ui/react-popover';
import { styled, keyframes } from '@stitches-definitions';

const open = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

export const Trigger = styled(Popover.Trigger, {
  all: 'unset',
  width: 12,
  height: 12,
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$black',
  color: '$white',
  cursor: 'pointer',
  transition: 'background 300ms ease-in-out',

  '&:hover': {
    background: '$blackHover',
  },

  '&:focus-visible': {
    outline: '12px solid $lightGrey',
  },
});

export const Content = styled(Popover.Content, {
  background: '$black',
  padding: '$xxs $xs',
  maxWidth: 200,
  color: '$white',

  '&[data-state="open"]': {
    animation: `${open} 400ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: 'transform, opacity',
  },

  '&:focus-visible': {
    outline: '4px solid $lightGrey',
  },
});
