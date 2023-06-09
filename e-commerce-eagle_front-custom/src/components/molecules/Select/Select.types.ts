import { ComponentProps } from 'react';
import type * as Stitches from '@stitches/react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { StichesCSS } from '@amq';
import { StyledTrigger } from './Select.styles';

type SelectVariants = Stitches.VariantProps<typeof StyledTrigger>;

type Option = {
  id: string;
  label: string;
};

export interface SelectProps
  extends ComponentProps<typeof SelectPrimitive.Root>,
    SelectVariants {
  id: string;
  title?: string;
  placeholder: string;
  options: Option[];
  css?: StichesCSS;
  helperText?: string;
  ariaLabel?: ComponentProps<typeof SelectPrimitive.Trigger>['aria-label'];
}
