import { styled } from '@stitches-definitions';

export const InputWrapper = styled('div', {
  paddingTop: '$m',
  paddingBottom: '$m',
});

export const InputContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  gap: '$m',

  '[data-icon-error]': {
    transition: 'opacity 300ms ease-in-out',
    color: '$red',
    opacity: 0,
  },

  '&[data-invalid="true"] [data-icon-error]': {
    opacity: 1,
  },

  variants: {
    outlined: {
      true: {
        borderRadius: 0,
        boxShadow: '0 0 0 1px $colors$mediumGrey',
        padding: '$xs $m',
        transition: 'box-shadow 300ms ease-in-out',

        '&[data-focused="true"]': {
          boxShadow: '0 0 0 1px $colors$black',
        },

        '&[data-invalid="true"]': {
          boxShadow: '0 0 0 1px $colors$red',
        },
      },
      false: {
        padding: 0,
        borderBottom: '1px solid $mediumGrey',
        transition: 'border-color 300ms ease-in-out',

        '&[data-focused="true"]': {
          borderColor: '$black',
        },

        '&[data-invalid="true"]': {
          borderColor: '$red',
        },
      },
    },
  },

  defaultVariants: {
    outlined: 'false',
  },
});

export const StyledInput = styled('input', {
  width: '100%',
  height: 24,
  boxSizing: 'content-box',
  border: 'none',
  fontFamily: '$bembo',
  fontWeight: '$normal',
  fontSize: '$6',
  lineHeight: '$2',
  padding: '$xs 0',
  outline: 'none',
  caretColor: '$red',
});

export const Slot = styled('div', {
  flexShrink: 0,
});

export const LabelContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$xxs',
});
