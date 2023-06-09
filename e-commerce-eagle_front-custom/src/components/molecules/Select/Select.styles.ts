import { styled } from '@stitches-definitions';

import * as SelectPrimitive from '@radix-ui/react-select';
import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area';

export const StyledContainer = styled('div', {
  padding: '$m 0',
});

export const StyledTrigger = styled(SelectPrimitive.Trigger, {
  all: 'unset',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$xs',
  background: 'transparent',
  border: 'none',
  position: 'relative',

  svg: {
    color: '$black',
  },

  '&[data-placeholder]': { color: '$darkGrey' },

  variants: {
    variant: {
      primary: {
        width: '100%',
        paddingBottom: '$xs',
        borderBottom: '1px solid $mediumGrey',
        transition: 'border-color 300ms ease-in-out',

        '&:focus': {
          borderColor: '$black',
        },
      },
      secondary: {
        width: 'auto',
        transition:
          'background 300ms ease-in-out, box-shadow 300ms ease-in-out',

        '&:focus-visible': {
          boxShadow: '0 0 0 $space$xs $colors$lightGrey',
          background: '$lightGrey',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'primary',
  },
});

export const StyledContent = styled(SelectPrimitive.Content, {
  background: '$white',
  overflow: 'hidden',
});

export const StyledViewport = styled(SelectPrimitive.Viewport, {
  padding: '$m 0',
});

export const ScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: '100%',
  height: '100%',
});

export const ScrollAreaViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',
});

export const ScrollAreaScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  userSelect: 'none',
  touchAction: 'none',
  padding: 2,
  '&[data-orientation="vertical"]': { width: 10 },
});

export const ScrollAreaThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: '$lightGrey',
  borderRadius: 10,
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44,
  },
});

export const LabelContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$xxs',
  paddingBottom: '$xs',
});
