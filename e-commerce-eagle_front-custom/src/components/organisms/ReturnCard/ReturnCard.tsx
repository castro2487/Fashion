'use client';
import React from 'react';
import { Indicator as IndicatorPrimitive } from '@radix-ui/react-checkbox';

import { IndicatorContainer, Indicator } from '@atoms/Indicator';
import { StyledContainer, Card } from './ReturnCard.styles';
import { ReturnCardProps } from '@amq';

export const ReturnCard = ({
  assets,
  main,
  price,
  ...props
}: ReturnCardProps) => {
  return (
    <StyledContainer {...props}>
      <Card
        ratio="square"
        dir="vertical"
        assets={assets}
        main={main}
        price={price}
      />
      <IndicatorContainer
        css={{ position: 'absolute', top: '$l', left: '$l' }}
        input-type="checkbox"
      >
        <IndicatorPrimitive asChild>
          <Indicator />
        </IndicatorPrimitive>
      </IndicatorContainer>
    </StyledContainer>
  );
};
