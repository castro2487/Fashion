import { styled } from '@stitches-definitions';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { Text } from '@atoms/Text/Text';
import { IndicatorContainer } from '@atoms/Indicator';

export const RadioGroup = styled(RadioGroupPrimitive.Root, {
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
  rowGap: '$m',
});

export const DescriptionText = styled(Text, {
  transition: 'color 300ms ease-in-out',
});

export const RadioItem = styled(RadioGroupPrimitive.Item, {
  all: 'unset',
  backgroundColor: '$white',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  position: 'relative',
  flexShrink: 0,
  outline: '0px solid transparent',
  transition:
    'color 300ms ease-in-out, background 300ms ease-in-out, outline 300ms ease-in-out, border-color 300ms ease-in-out',
  border: '1px solid $black',
  padding: '$m',
  gap: '$m',
  cursor: 'pointer',

  '&:disabled': {
    borderColor: '$mediumGrey',
    backgroundColor: '$lightGrey',
    cursor: 'not-allowed',
    color: '$darkGrey',
  },

  '&[data-state="checked"]': {
    backgroundColor: '$black',
    color: '$white',

    [`${IndicatorContainer}`]: {
      background: '$black',
    },

    [`${DescriptionText}`]: {
      color: '$white',
    },

    '&:focus-visible': {
      outline: '5px solid $black',
    },
  },
  '&[data-state="unchecked"]:not(:disabled)': {
    backgroundColor: '$white',
    color: '$black',

    [`${DescriptionText}`]: {
      color: '$darkGrey',
    },

    '&:hover': {
      borderColor: '$blackHover',
      color: '$blackHover',
    },

    '&:focus-visible': {
      backgroundColor: '$lightGrey',
      borderColor: '$black',
    },
  },
});

export const DescriptionContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$m',
});

export const Description = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xxs',
});

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
});

export const ContentContainer = styled('div', {
  display: 'flex',
  gap: '$xs',
});
