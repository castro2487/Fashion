import { type VariantProps } from '@stitches/react';
import { Text } from '.';

declare module '@amq' {
  type TextVariants = VariantProps<typeof Text>;
}
