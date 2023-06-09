import { ComponentProps } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { MinimalCardProps } from '@molecules/Card/Card.types';

export type ExchangeCardProps = ComponentProps<
  typeof RadioGroupPrimitive.Item
> &
  MinimalCardProps;
