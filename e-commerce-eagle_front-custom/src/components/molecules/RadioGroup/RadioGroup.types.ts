import { ComponentProps, ReactNode } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ErrorList } from '@lib/ui/useInputError';

type Value = {
  value: string;
  id: string;
  label: string;
  suffix?: ReactNode;
};

type RadioGroupPrimitiveProps = ComponentProps<typeof RadioGroupPrimitive.Root>;

export type RadioGroupProps = RadioGroupPrimitiveProps & {
  title: string;
  values: Value[];
  errors?: ErrorList;
  helperText?: string;
};
