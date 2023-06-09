import { ComponentProps } from 'react';
import type * as Stitches from '@stitches/react';
import { StyledContainer, CustomTile, GridContainer } from './Grid.styles';

declare module '@amq' {
  interface BannerProps extends ComponentProps<typeof CustomTile> {
    id: string;
  }

  export interface GridProps extends ComponentProps<typeof StyledContainer> {
    tiles?: BannerProps[];
    heading?: HeadingProps;
  }

  export type GridContainerVariants = Stitches.VariantProps<
    typeof GridContainer
  >;
}
