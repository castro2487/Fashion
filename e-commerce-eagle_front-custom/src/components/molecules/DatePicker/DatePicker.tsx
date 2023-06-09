'use client';
import React, { useState, useEffect, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

import useInputError from '@lib/ui/useInputError';
import { Input } from '@molecules/Input/Input';
import { InputError } from '@molecules/InputError/InputError';
import { CoinDown } from '@icons';

import { DatePickerContainer } from './DatePicker.styles';
import { DatePickerProps } from './DatePicker.types';

export const DatePicker = ({
  label,
  id,
  errors,
  required,
  helperText,
  ...props
}: DatePickerProps) => {
  const { error, setError, onInvalid } = useInputError(errors);
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const checkValidity = () => {
    if (required && containerRef.current) {
      const input = containerRef.current.querySelector('input');
      if (input) {
        input.checkValidity();
        input.dataset.invalid = 'true';
      }
    }
  };

  const onChange = (date: Date | null) => {
    if (date) {
      if (required && error !== null) {
        if (containerRef.current) {
          const input = containerRef.current.querySelector('input');
          if (input) {
            input.dataset.invalid = 'false';
          }
        }
        setError(null);
      }
    } else {
      checkValidity();
    }
    setSelectedDate(date);
  };

  useEffect(() => {
    let input: HTMLInputElement | null;

    if (containerRef.current) {
      input = containerRef.current.querySelector('input');
      if (input) {
        input.addEventListener('invalid', onInvalid);
      }
    }

    return () => {
      if (input) {
        input.removeEventListener('invalid', onInvalid);
      }
    };
  }, []);

  return (
    <DatePickerContainer ref={containerRef}>
      <ReactDatePicker
        {...props}
        selected={selectedDate}
        onChange={onChange}
        onClickOutside={checkValidity}
        id={id}
        customInput={
          <Input
            label={label}
            helperText={helperText}
            id={id}
            type="text"
            noValidation
            customComponent={<CoinDown role="none" />}
            css={{ paddingBottom: 0 }}
          />
        }
        showPopperArrow={false}
        required={required}
      />
      <InputError error={error} />
    </DatePickerContainer>
  );
};
