import { ComponentProps } from 'react';
import { StichesCSS } from '@amq';
import { Input } from '@molecules/Input/Input';

export type PasswordInputProps = Omit<
  ComponentProps<typeof Input>,
  'customComponent' | 'ref'
> & {
  css?: StichesCSS;
};
