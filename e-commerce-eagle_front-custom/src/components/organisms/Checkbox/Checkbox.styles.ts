import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '@stitches-definitions';

import { IndicatorContainer, Indicator } from '@atoms/Indicator';

export const CheckboxWrapper = styled('div', {
  padding: '$xs 0',
});

export const CheckboxContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',
  transition: 'color 300ms ease-in-out',

  '&:hover': {
    color: '$blackHover',
  },
});

export const StyledCheckbox = styled(CheckboxPrimitive.Root, {
  all: 'unset',
  flexShrink: 0,
  outline: '0px solid transparent',
  transition: 'outline 300ms ease-in-out',

  '&:focus-visible': {
    outline: '5px solid $lightGrey',
  },

  '&:disabled': {
    cursor: 'not-allowed',
    '& + label': {
      color: '$darkGrey',
      cursor: 'not-allowed',
    },
  },

  variants: {
    border: {
      true: {
        '&:disabled': {
          color: '$mediumGrey',
        },
      },
      false: {
        [`& ${IndicatorContainer}`]: {
          border: 'none',
        },

        '&:disabled': {
          opacity: 0.5,
        },
      },
    },
  },
});

export const StyledIndicator = styled(Indicator, {
  variants: {
    outlined: {
      true: {
        width: '100%',
        height: '100%',
        background: 'transparent',
        position: 'relative',
        '&:after': {
          content: '',
          position: 'absolute',
          inset: '$$inset',
          border: '1px solid $$accentColor',
        },
      },
    },
  },
});
