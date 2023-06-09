'use client';
import React, { useRef, useEffect } from 'react';
import { Indicator as IndicatorPrimitive } from '@radix-ui/react-checkbox';

import { IndicatorContainer } from '@atoms/Indicator';
import useInputError from '@lib/ui/useInputError';
import { Label } from '@atoms/Label';
import { InputError } from '@molecules/InputError';
import { CheckboxProps } from '@amq';

import * as CheckboxPrimitive from '@radix-ui/react-checkbox';
import {
  CheckboxContainer,
  CheckboxWrapper,
  StyledCheckbox,
  StyledIndicator,
} from './Checkbox.styles';

export const Checkbox = ({
  label,
  id,
  errors,
  accentColor,
  ...props
}: CheckboxProps) => {
  const { error, setError, onInvalid } = useInputError(errors);
  const containerRef = useRef<HTMLDivElement>(null);
  const isAccentColorWhite =
    accentColor === '#fff' || accentColor === '#ffffff';

  const onCheckedChange = (checked: CheckboxPrimitive.CheckedState) => {
    if (checked && error !== null) {
      setError(null);
    }
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
    <CheckboxWrapper>
      <CheckboxContainer ref={containerRef}>
        <StyledCheckbox
          {...props}
          id={id}
          onCheckedChange={onCheckedChange}
          border={!accentColor || isAccentColorWhite}
        >
          <IndicatorContainer
            input-type="checkbox"
            css={{
              backgroundColor: accentColor,
              borderColor: isAccentColorWhite
                ? '$colors$mediumGrey'
                : 'currentColor',
            }}
          >
            <IndicatorPrimitive asChild>
              <StyledIndicator
                outlined={!!accentColor}
                css={{
                  $$accentColor: isAccentColorWhite
                    ? '$colors$black'
                    : accentColor,
                  $$inset: isAccentColorWhite ? '-3px' : '-2px',
                }}
              />
            </IndicatorPrimitive>
          </IndicatorContainer>
        </StyledCheckbox>
        <Label css={{ color: 'currentColor' }} htmlFor={id} type="labelMedium">
          {label}
        </Label>
      </CheckboxContainer>
      <InputError error={error} />
    </CheckboxWrapper>
  );
};
