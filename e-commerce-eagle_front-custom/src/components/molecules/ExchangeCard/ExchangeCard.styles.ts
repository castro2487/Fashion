import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { styled } from '@stitches-definitions';

import { Card as CardTemplate } from '@molecules/Card/Card';
import { IndicatorContainer } from '@atoms/Indicator';

const styles: TCommonObject = {
  all: 'unset',
  position: 'relative',
  width: '100%',

  [`&:focus-visible ${IndicatorContainer}`]: {
    outline: '5px solid $mediumGrey',
  },
};

export const StyledContainer = styled(RadioGroupPrimitive.Item, styles);

export const Card = styled(CardTemplate, {
  cursor: 'pointer',
  outline: 'none',
  background: '$white',
});
