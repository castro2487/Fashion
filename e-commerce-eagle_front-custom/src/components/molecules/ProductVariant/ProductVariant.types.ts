import { ComponentProps } from 'react';
import { ImageProps } from 'next/image';
import { StyledContainer } from './ProductVariant.styles';

export interface ProductVariantProps
  extends ComponentProps<typeof StyledContainer> {
  label: string;
  asset?: ImageProps;
}
