'use client';
import React, { useRef, useState } from 'react';

import { Button } from '@atoms/Button';
import { Input } from '@molecules/Input';

import { PasswordInputProps } from './PasswordInput.types';

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const inputRef = useRef<HTMLDivElement>(null);

  const onClickShowHide = () => {
    if (inputRef.current) {
      const inputEl = inputRef.current.querySelector('input');
      if (inputEl) {
        inputEl.type = isPasswordVisible ? 'password' : 'text';
        setIsPasswordVisible(!isPasswordVisible);
      }
    }
  };

  return (
    <Input
      {...props}
      ref={inputRef}
      customComponent={
        <Button variant="tertiary" size="small" onClick={onClickShowHide}>
          {isPasswordVisible ? 'Hide' : 'Show'}
        </Button>
      }
    />
  );
};
