import { ComponentProps } from 'react';
import * as CheckboxPrimitive from '@radix-ui/react-checkbox';

import { MinimalCardProps } from '@molecules/Card/Card.types';

declare module '@amq' {
  type ReturnCardProps = ComponentProps<typeof CheckboxPrimitive.Root> &
    MinimalCardProps;
}
