import { ComponentProps } from 'react';
import { StichesCSS } from '@amq';
import { Input } from '@molecules/Input/Input';

export type SubmittableInputProps = Omit<
  ComponentProps<typeof Input>,
  'outlined' | 'customComponent' | 'placeholder' | 'ref'
> & {
  css?: StichesCSS;
  onSubmit(value: string): void;
};
