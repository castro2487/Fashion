'use client';
import React, { useRef, useEffect } from 'react';
import { Indicator as IndicatorPrimitive } from '@radix-ui/react-radio-group';

import useInputError from '@lib/ui/useInputError';
import { Text } from '@atoms/Text/Text';
import { Label } from '@atoms/Label';
import { InputError } from '@molecules/InputError/InputError';
import { Popover } from '@molecules/Popover/Popover';
import { IndicatorContainer, Indicator } from '@atoms/Indicator';

import { RadioGroupProps } from './RadioGroup.types';
import {
  RadioGroupWrapper,
  StyledRadioGroup,
  RadioContainer,
  RadioItem,
  TextContainer,
} from './RadioGroup.styles';

export const RadioGroup = ({
  title,
  values,
  errors,
  helperText,
  ...props
}: RadioGroupProps) => {
  const { error, setError, onInvalid } = useInputError(errors);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const onValueChange = () => {
    if (error !== null) {
      setError(null);
    }
  };

  useEffect(() => {
    let input: HTMLInputElement | null;

    if (wrapperRef.current) {
      input = wrapperRef.current.querySelector('input');
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
    <RadioGroupWrapper>
      <TextContainer>
        <Text
          as="legend"
          type="labelSmall"
          css={{ padding: 0, color: '$darkGrey' }}
        >
          {title}
        </Text>
        {helperText && <Popover label={helperText} />}
      </TextContainer>
      <StyledRadioGroup
        ref={wrapperRef}
        onValueChange={onValueChange}
        {...props}
      >
        {values.map(({ value, id, label, suffix }) => (
          <RadioContainer key={id}>
            <RadioItem id={id} value={value}>
              <IndicatorContainer input-type="radio">
                <IndicatorPrimitive asChild>
                  <Indicator />
                </IndicatorPrimitive>
              </IndicatorContainer>
            </RadioItem>
            <Label
              css={{ color: 'currentColor' }}
              htmlFor={id}
              type="labelMedium"
            >
              {label}
            </Label>
            {suffix && suffix}
          </RadioContainer>
        ))}
      </StyledRadioGroup>
      <InputError error={error} />
    </RadioGroupWrapper>
  );
};
