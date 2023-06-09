/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled, keyframes } from '@stitches-definitions';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

const fadeIn = keyframes({
  from: { opacity: '0' },
  to: { opacity: '1' },
});

const fadeOut = keyframes({
  from: { opacity: '1' },
  to: { opacity: '0' },
});

export const StyledOverlay = styled(AlertDialogPrimitive.Overlay, {
  position: 'fixed',
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  display: 'flex',
  justifyContent: 'flex-end',

  '&[data-state="open"]': {
    animation: `${fadeIn} 300ms ease-in-out`,
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

export const Title = styled(AlertDialogPrimitive.Title, {
  marginTop: 'auto',
});

export const Description = styled(AlertDialogPrimitive.Description, {
  marginBottom: '$l',
});

export const Buttons = styled('div', {
  alignSelf: 'stretch',
  display: 'flex',
  gap: '$xxs',
  padding: '0 $$paddingValue',

  variants: {
    order: {
      normal: {
        flexDirection: 'column',
      },
      reverse: {
        flexDirection: 'column-reverse',
      },
    },
  },
});

export const ImageContainer = styled('div', {
  alignSelf: 'stretch',
  position: 'relative',
  height: 0,
  paddingTop: '125%',
  marginBottom: '$l',
});

const styledContentStyles: TCommonObject = {
  backgroundColor: '$white',
  overflowY: 'auto',
  willChange: 'transform',
  padding: '$$paddingValue 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

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

        [`& ${Buttons}`]: {
          marginBottom: 'auto',
          marginTop: '$l',
        },
      },
      bottom: {
        $$transformValue: 'translate3d(0,100%,0)',

        [`& ${Buttons}`]: {
          marginTop: 'auto',
        },
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
};

// TODO: Find a solution to avoid using any for this component
export const StyledContent = styled(
  AlertDialogPrimitive.Content,
  styledContentStyles
) as any;

export const Header = styled('div', {
  alignSelf: 'stretch',
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  gap: '$l',
  padding: '0 $$paddingValue',
});

export const StyledCloseButton = styled(AlertDialogPrimitive.Cancel, {
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
