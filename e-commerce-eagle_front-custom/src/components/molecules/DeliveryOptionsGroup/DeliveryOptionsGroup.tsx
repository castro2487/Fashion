'use client';
import React, { useRef, useEffect } from 'react';
import { Indicator as IndicatorPrimitive } from '@radix-ui/react-radio-group';

import { IndicatorContainer, Indicator } from '@atoms/Indicator';
import useInputError from '@lib/ui/useInputError';
import { InputError } from '@molecules/InputError/InputError';
import { Label } from '@atoms/Label/Label';
import { Text } from '@atoms/Text/Text';

import {
  RadioGroup,
  RadioItem,
  DescriptionContainer,
  Description,
  Content,
  ContentContainer,
  DescriptionText,
} from './DeliveryOptionsGroupStyles';
import { DeliveryOptionsProps } from './DeliveryOptionsGroup.types';

export const DeliveryOptionsGroup = ({
  values,
  errors,
  ...props
}: DeliveryOptionsProps) => {
  const { error, setError, onInvalid } = useInputError(errors);
  const inputRef = useRef<HTMLDivElement>(null);

  const onValueChange = () => {
    if (error !== null) {
      setError(null);
    }
  };

  useEffect(() => {
    let input: HTMLInputElement | null;

    if (inputRef.current) {
      input = inputRef.current.querySelector('input');
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
    <>
      <RadioGroup ref={inputRef} onValueChange={onValueChange} {...props}>
        {values.map(({ id, value, label, price, description }) => (
          <RadioItem key={value} id={id} value={value}>
            <ContentContainer>
              <IndicatorContainer input-type="radio">
                <IndicatorPrimitive asChild>
                  <Indicator />
                </IndicatorPrimitive>
              </IndicatorContainer>

              <Content>
                <Label
                  css={{ color: 'currentColor', marginBottom: '$xs' }}
                  htmlFor={id}
                  type="labelMedium"
                >
                  {label}
                </Label>

                {typeof description === 'string' ? (
                  <DescriptionText type="labelSmall">
                    {description}
                  </DescriptionText>
                ) : (
                  <DescriptionContainer>
                    {description.map(({ title, description }, i) => (
                      <Description key={i}>
                        <Text type="labelSmall">{title}</Text>
                        <DescriptionText type="labelSmall">
                          {description}
                        </DescriptionText>
                      </Description>
                    ))}
                  </DescriptionContainer>
                )}
              </Content>
            </ContentContainer>

            <Text type="labelSmall">{price}</Text>
          </RadioItem>
        ))}
      </RadioGroup>
      <InputError error={error} />
    </>
  );
};
