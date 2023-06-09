'use client';
import React, { forwardRef, RefObject } from 'react';

import {
  StyledContainer,
  ImageContainer,
  Content,
  ContentItem,
} from './Card.styles';
import {
  CardProps,
  ContentSpacingVariants,
  ContentAreaVariants,
} from './Card.types';

const getArea = (
  dir: CardProps['dir'],
  actions: CardProps['actions'],
  price: CardProps['price']
) => {
  if (!actions && !price) {
    return 'mainOnly';
  }
  if (!actions) {
    return 'noActions';
  }
  if (!price) {
    return dir === 'horizontal' ? 'noPricePacked' : 'noPriceBig';
  }
  return dir === 'horizontal' ? 'packed' : 'big';
};

export const Card = forwardRef(
  (
    {
      ratio,
      dir,
      align,
      assets,
      main,
      actions,
      price,
      verticalSpacingOverride,
      ...props
    }: CardProps,
    ref:
      | ((instance: HTMLDivElement | null) => void)
      | RefObject<HTMLDivElement>
      | null
      | undefined
  ) => {
    const area: ContentAreaVariants['area'] = getArea(dir, actions, price);
    const verticalCardSpacings: ContentSpacingVariants['spacing'] =
      verticalSpacingOverride || {
        '@initial': 'vm',
        '@bp1': 'vt',
        '@bp2': 'vd',
        '@bp3': 'vd',
      };
    const spacing = dir === 'horizontal' ? 'h' : verticalCardSpacings;

    return (
      <StyledContainer {...props} dir={dir} align={align} ref={ref}>
        <div className="card-image-wrapper">
          <ImageContainer ratio={ratio}>{assets}</ImageContainer>
        </div>
        <Content area={area} spacing={spacing}>
          <ContentItem data-area="main">{main}</ContentItem>
          {actions && <ContentItem data-area="actions">{actions}</ContentItem>}
          {price && <ContentItem data-area="price">{price}</ContentItem>}
        </Content>
      </StyledContainer>
    );
  }
);

Card.displayName = 'Card';
