import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { styled } from '@stitches-definitions';

export const RadioGroupWrapper = styled('fieldset', {
  all: 'unset',
  marginTop: '$m',
});

export const StyledRadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  flexWrap: 'wrap',
  columnGap: '$m',

  '&[data-orientation="vertical"]': {
    flexDirection: 'column',
    gap: 0,
  },
});

export const RadioContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
  gap: '$xs',
  padding: '$xs 0',
  transition: 'color 300ms ease-in-out',

  '&:hover': {
    color: '$blackHover',
  },
});

export const RadioItem = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  flexShrink: 0,
  borderRadius: '50%',
  outline: '0px solid transparent',
  transition: 'outline 300ms ease-in-out',

  '&:focus-visible': {
    outline: '5px solid $lightGrey',
  },

  '&:disabled': {
    color: '$mediumGrey',
    cursor: 'not-allowed',
    '& + label': {
      color: '$mediumGrey',
      cursor: 'not-allowed',
    },
  },
});

export const TextContainer = styled('div', {
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$xxs',
  marginBottom: '$s',
});
