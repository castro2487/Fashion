import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import { styled } from '@stitches-definitions';

import { Card as CardTemplate } from '@molecules/Card/Card';
import { IndicatorContainer } from '@atoms/Indicator';

const styledContainerStyles: TCommonObject = {
  all: 'unset',
  position: 'relative',
  width: '100%',

  [`&:focus-visible ${IndicatorContainer}`]: {
    outline: '5px solid $mediumGrey',
  },
};

export const StyledContainer = styled(
  CheckboxPrimitive.Root,
  styledContainerStyles
);

export const Card = styled(CardTemplate, {
  cursor: 'pointer',
  outline: 'none',
  background: '$white',
});
