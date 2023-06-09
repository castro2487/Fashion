import { ComponentProps, ReactNode } from 'react';
import type * as Stitches from '@stitches/react';

import { StyledContainer, ImageContainer, Content } from './Card.styles';

export type ContentSpacingVariants = Pick<
  Stitches.VariantProps<typeof Content>,
  'spacing'
>;

export type MinimalCardProps = {
  assets: ReactNode;
  main: ReactNode;
  actions?: ReactNode;
  price?: ReactNode;
  verticalSpacingOverride?: ContentSpacingVariants['spacing'];
};

export type CardProps = ComponentProps<typeof StyledContainer> &
  Stitches.VariantProps<typeof ImageContainer> &
  Stitches.VariantProps<typeof StyledContainer> &
  MinimalCardProps;

export type ContentAreaVariants = Pick<
  Stitches.VariantProps<typeof Content>,
  'area'
>;
