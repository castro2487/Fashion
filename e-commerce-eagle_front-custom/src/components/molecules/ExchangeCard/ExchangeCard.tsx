'use client';
import React from 'react';
import { Indicator as IndicatorPrimitive } from '@radix-ui/react-radio-group';

import { IndicatorContainer, Indicator } from '@atoms/Indicator';
import { StyledContainer, Card } from './ExchangeCard.styles';

import { ExchangeCardProps } from './ExchangeCard.types';

export const ExchangeCard = ({
  assets,
  main,
  price,
  ...props
}: ExchangeCardProps) => {
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
        input-type="radio"
      >
        <IndicatorPrimitive asChild>
          <Indicator />
        </IndicatorPrimitive>
      </IndicatorContainer>
    </StyledContainer>
  );
};
