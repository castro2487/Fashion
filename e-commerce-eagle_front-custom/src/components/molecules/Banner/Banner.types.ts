import type * as Stitches from '@stitches/react';
import { StyledContainer, ContentContainer } from './Banner.styles';

declare module '@amq' {
  interface BannerProps
    extends Omit<React.ComponentProps<typeof StyledContainer>, 'padding'> {
    title?: string;
    cta?: AMQ.TLink;
    ctaSecondary?: AMQ.TLink;
    asset: ImageProps;
    padded?: boolean;
    type: TContentfulBannerType;
    variant?: TContentfulBannerVariant;
    align?: TContentfulBannerAlign;
  }

  type TContainerPaddingVariants = Pick<
    Stitches.VariantProps<typeof StyledContainer>,
    'padding'
  >;

  type TContentGapVariants = Pick<
    Stitches.VariantProps<typeof ContentContainer>,
    'gap'
  >;

  type TContentPaddingVariants = Pick<
    Stitches.VariantProps<typeof ContentContainer>,
    'padding'
  >;
}
