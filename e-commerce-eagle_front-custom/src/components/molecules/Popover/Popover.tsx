'use client';
import React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';

import { Info } from '@icons';
import { Text } from '@atoms/Text/Text';

import { PopoverProps } from './Popover.types';
import { Trigger, Content } from './Popover.styles';

export const Popover = ({ label }: PopoverProps) => {
  return (
    <PopoverPrimitive.Root>
      <Trigger>
        <Info title="info" />
      </Trigger>
      <PopoverPrimitive.Portal>
        <Content side="top" sideOffset={6}>
          <Text type="labelMedium" as="p">
            {label}
          </Text>
        </Content>
      </PopoverPrimitive.Portal>
    </PopoverPrimitive.Root>
  );
};
