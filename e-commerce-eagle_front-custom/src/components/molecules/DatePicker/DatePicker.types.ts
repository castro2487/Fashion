import { ComponentProps } from 'react';
import ReactDatePicker from 'react-datepicker';
import { ErrorList } from '@lib/ui/useInputError';

export interface HighlightDates {
  [className: string]: Date[];
}

export type ReactDatePickerProps = Omit<
  ComponentProps<typeof ReactDatePicker>,
  | 'selected'
  | 'onChange'
  | 'onClickOutside'
  | 'customInput'
  | 'showPopperArrow'
  | 'highlightDates'
>;

export type DatePickerProps = ReactDatePickerProps & {
  label: string;
  id: string;
  errors?: ErrorList;
  highlightDates?: Array<HighlightDates | Date> | undefined;
  helperText?: string;
};
