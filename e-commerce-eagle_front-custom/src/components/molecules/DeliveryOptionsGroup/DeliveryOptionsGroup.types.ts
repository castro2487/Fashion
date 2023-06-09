import { ComponentProps } from 'react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';
import { ErrorList } from '@lib/ui/useInputError';

export type Value = {
  id: string;
  value: string;
  label: string;
  price: string;
  description: string | { title: string; description: string }[];
};

export type RadioGroupPrimitiveProps = ComponentProps<
  typeof RadioGroupPrimitive.Root
>;

export interface DeliveryOptionsProps extends RadioGroupPrimitiveProps {
  values: Value[];
  errors?: ErrorList;
}
