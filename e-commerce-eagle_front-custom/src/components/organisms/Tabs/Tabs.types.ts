import type * as Stitches from '@stitches/react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { TabItem } from '@atoms/TabItem';

declare module '@amq' {
  type TabItemVariants = Stitches.VariantProps<typeof TabItem>;

  type TabsRootProps = Omit<
    React.ComponentProps<typeof TabsPrimitive.Root>,
    'orientation'
  >;

  type TabsTriggerProps = TabsTriggerPrimitiveProps &
    TabItemVariants & { css?: StichesCSS };

  type TabsTriggerPrimitiveProps = Omit<
    React.ComponentProps<typeof TabsPrimitive.Trigger>,
    'asChild'
  >;
}
