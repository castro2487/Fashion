'use client';
import React, { useRef } from 'react';

import { Input } from '@molecules/Input';
import { ArrowRight } from '@icons';

import { SubmittableInputProps } from './SubmittableInput.types';
import { SubmitButton } from './SubmittableInput.styles';

export const SubmittableInput = ({
  onSubmit,
  ...props
}: SubmittableInputProps) => {
  const inputRef = useRef<HTMLDivElement>(null);

  const onClickSubmit = () => {
    if (inputRef.current) {
      const inputEl = inputRef.current.querySelector('input');
      if (inputEl) {
        const isValid = inputEl.checkValidity();
        const inputValue = inputEl.value;
        if (isValid) {
          onSubmit(inputValue);
        }
      }
    }
  };

  return (
    <Input
      {...props}
      ref={inputRef}
      outlined
      customComponent={
        <SubmitButton onClick={onClickSubmit}>
          <ArrowRight title="submit" />
        </SubmitButton>
      }
    />
  );
};
