import * as ToastPrimitive from '@radix-ui/react-toast';
import { styled, keyframes } from '@stitches-definitions';

export const Viewport = styled(ToastPrimitive.Viewport, {
  '--viewport-padding': '$space$l',
  position: 'fixed',
  bottom: 0,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647,
  outline: 'none',
  padding: 'var(--viewport-padding)',
  width: '100%',

  variants: {
    type: {
      mobile: {
        width: 343,
      },
      tablet: {
        width: 480,
      },
      desktop: {
        width: 400,
      },
    },
    centered: {
      true: {
        left: '50%',
        transform: 'translateX(-50%)',
      },
      false: {
        right: 0,
      },
    },
  },

  defaultVariants: {
    centered: false,
  },
});

const hide = keyframes({
  from: { opacity: 1 },
  to: { opacity: 0 },
});

const slideIn = keyframes({
  from: { transform: 'translateY(calc(100% + var(--viewport-padding)))' },
  to: { transform: 'translateY(0)' },
});

const swipeOut = keyframes({
  from: { transform: 'translateY(var(--radix-toast-swipe-end-y))' },
  to: { transform: 'translateY(calc(100% + var(--viewport-padding)))' },
});

export const StyledContainer = styled(ToastPrimitive.Root, {
  width: '100%',
  color: '$white',
  padding: '$m',
  display: 'flex',
  alignItems: 'center',
  gap: '$m',
  justifyContent: 'space-between',
  '&[data-state="open"]': {
    animation: `${slideIn} 0.2s ease-in-out`,
  },
  '&[data-state="closed"]': {
    animation: `${hide} 0.2s ease-in`,
  },
  '&[data-swipe="move"]': {
    transform: 'translateY(var(--radix-toast-swipe-move-y))',
  },
  '&[data-swipe="cancel"]': {
    transform: 'translateY(0)',
    transition: 'transform 0.2s ease-out',
  },
  '&[data-swipe="end"]': {
    animation: `${swipeOut} 0.2s ease-out`,
  },

  variants: {
    isSuccess: {
      true: {
        background: '$black',
      },
      false: {
        background: '$red',
      },
    },
  },
});

export const Provider = styled(ToastPrimitive.Provider, {});

export const Description = styled(ToastPrimitive.Description, {
  display: 'flex',
  alignItems: 'center',
  gap: '$l',
});

export const DescriptionIcon = styled('div', {
  flexShrink: 0,
});

export const CloseButton = styled(ToastPrimitive.Close, {
  flexShrink: 0,
  color: '$white',
  background: 'transparent',
  border: 'none',
  padding: 0,
  cursor: 'pointer',
  transition: 'color 0.3s ease-in-out, outline 0.3s ease-in-out',

  '&:hover': {
    color: '$mediumGrey',
  },
  '&:focus-visible': {
    outline: '1px solid $white',
  },
});
