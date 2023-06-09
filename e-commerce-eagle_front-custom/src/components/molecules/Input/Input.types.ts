import { StichesCSS } from '@amq';
import { InputHTMLAttributes, ReactElement } from 'react';
import { ErrorList } from '@lib/ui/useInputError';

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  id: string;
  type?: 'text' | 'email' | 'tel' | 'password';
  description?: ReactElement | string;
  errors?: ErrorList;
  noValidation?: boolean;
  customComponent?: ReactElement;
  css?: StichesCSS;
  outlined?: boolean;
  isCustomCheckValid?: boolean;
  helperText?: string;
}
