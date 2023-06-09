'use client';
import React from 'react';

import { ProductVariantProps } from './ProductVariant.types';

import { Text } from '@atoms/Text/Text';
import { Image } from '@atoms/Image/Image';

import { ImageContainer, StyledContainer } from './ProductVariant.styles';

export const ProductVariant = ({
  label,
  asset,
  selected,
  outOfStock,
  disabled,
  ...props
}: ProductVariantProps) => (
  <StyledContainer
    {...props}
    disabled={disabled}
    outOfStock={asset && outOfStock}
    selected={!outOfStock && selected}
  >
    {asset && (
      <ImageContainer>
        <Image {...asset} alt={label} />
      </ImageContainer>
    )}
    {!asset && (
      <Text
        type="labelMedium"
        css={{ textDecoration: outOfStock ? 'line-through' : 'none' }}
      >
        {label}
      </Text>
    )}
  </StyledContainer>
);
