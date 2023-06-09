import type * as Stitches from '@stitches/react';
import { AutoplayOptions } from 'swiper/types';

import { StyledContainer } from './EditorialContent.styles';
import { FramedContent } from '@components/atoms/FramedContent/FramedContent';

declare module '@amq' {
  type EditorialContentProps = Omit<
    React.ComponentProps<typeof StyledContainer>,
    'theme' | 'padding'
  > & {
    delay?: AutoplayOptions['delay'];
  };

  type EditorialTextProps = Omit<
    React.ComponentProps<typeof FramedContent>,
    'spacing'
  >;

  type ContainerVariants = Stitches.VariantProps<typeof StyledContainer>;
}
