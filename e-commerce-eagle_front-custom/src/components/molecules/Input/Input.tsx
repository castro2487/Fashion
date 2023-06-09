'use client';
import React, { useState, useRef, forwardRef, RefObject } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';

import useInputError, { Elements } from '@lib/ui/useInputError';
import { Label } from '@atoms/Label';
import { InputMention } from '@atoms/InputMention';
import { InputError } from '@molecules/InputError';
import { Popover } from '@molecules/Popover';
import { Close } from '@icons';

import { InputProps } from './Input.types';
import {
  InputContainer,
  InputWrapper,
  Slot,
  StyledInput,
  LabelContainer,
} from './Input.styles';

const Input = forwardRef(
  (
    {
      label,
      id,
      type = 'text',
      description,
      errors,
      noValidation,
      customComponent,
      css,
      outlined,
      isCustomCheckValid,
      helperText,
      ...rest
    }: InputProps,
    ref:
      | ((instance: HTMLDivElement | null) => void)
      | RefObject<HTMLDivElement>
      | null
      | undefined
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { error, onBlur, onInvalid } = useInputError(
      errors,
      inputRef,
      isCustomCheckValid
    );
    const [focused, setFocused] = useState<boolean>(false);

    const onFocus = () => {
      setFocused(true);
    };

    const onInputBlur = (e: React.FocusEvent<Elements>) => {
      setFocused(false);
      if (!noValidation) {
        onBlur(e);
      }
    };

    return (
      <InputWrapper ref={ref} css={css}>
        {outlined ? (
          <VisuallyHidden>
            <label>{label}</label>
          </VisuallyHidden>
        ) : (
          <LabelContainer>
            <Label htmlFor={id}>{label}</Label>
            {helperText && <Popover label={helperText} />}
          </LabelContainer>
        )}
        <InputContainer
          outlined={outlined}
          {...(!noValidation && {
            'data-invalid': !!error,
          })}
          data-focused={focused}
        >
          <StyledInput
            {...rest}
            ref={inputRef}
            type={type}
            id={id}
            onFocus={onFocus}
            onBlur={onInputBlur}
            {...(!noValidation && {
              onInvalid: onInvalid,
            })}
            {...(outlined && {
              placeholder: label,
            })}
          />
          <Slot data-slot>
            {customComponent || <Close aria-hidden data-icon-error />}
          </Slot>
        </InputContainer>
        {!noValidation && <InputError error={error} />}
        {description && <InputMention>{description}</InputMention>}
      </InputWrapper>
    );
  }
);

Input.displayName = 'Input';

export { Input };
