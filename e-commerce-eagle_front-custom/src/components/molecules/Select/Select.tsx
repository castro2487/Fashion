'use client';
import React from 'react';
import * as SelectPrimitive from '@radix-ui/react-select';

import { CoinDown, Tick } from '@icons';

import { Text } from '@atoms/Text/Text';
import { Label } from '@atoms/Label';
import { OptionItem } from '@atoms/OptionItem/OptionItem';
import { Popover } from '@molecules/Popover/Popover';

import {
  StyledContainer,
  StyledTrigger,
  StyledContent,
  StyledViewport,
  ScrollArea,
  ScrollAreaViewport,
  ScrollAreaScrollbar,
  ScrollAreaThumb,
  LabelContainer,
} from './Select.styles';
import { SelectProps } from './Select.types';

export const Select = ({
  title,
  placeholder,
  options,
  id,
  css,
  variant,
  helperText,
  ariaLabel,
  ...props
}: SelectProps) => (
  <StyledContainer css={css}>
    {title && (
      <LabelContainer>
        <Label htmlFor={id}>{title}</Label>
        {helperText && <Popover label={helperText} />}
      </LabelContainer>
    )}

    <SelectPrimitive.Root {...props}>
      <StyledTrigger id={id} variant={variant} aria-label={ariaLabel}>
        <Text type={variant === 'secondary' ? 'labelSmall' : 'h4'}>
          <SelectPrimitive.Value placeholder={placeholder} />
        </Text>
        <SelectPrimitive.Icon>
          <CoinDown />
        </SelectPrimitive.Icon>
      </StyledTrigger>

      <SelectPrimitive.Portal>
        <StyledContent>
          <ScrollArea>
            <StyledViewport asChild>
              <ScrollAreaViewport>
                {options.map(({ id, label }) => (
                  <SelectPrimitive.Item asChild key={id} value={id}>
                    <OptionItem>
                      <Text type="labelMedium">
                        <SelectPrimitive.ItemText>
                          {label}
                        </SelectPrimitive.ItemText>
                      </Text>
                      <SelectPrimitive.ItemIndicator>
                        <Tick />
                      </SelectPrimitive.ItemIndicator>
                    </OptionItem>
                  </SelectPrimitive.Item>
                ))}
              </ScrollAreaViewport>
            </StyledViewport>
            <ScrollAreaScrollbar orientation="vertical">
              <ScrollAreaThumb />
            </ScrollAreaScrollbar>
          </ScrollArea>
        </StyledContent>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  </StyledContainer>
);
