'use client';
import React, { forwardRef } from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { Text } from '@atoms/Text/Text';
import { OptionItem } from '@atoms/OptionItem/OptionItem';
import { Tick } from '@icons';
import { DropdownMenuContent } from './Dropdown.styles';
import {
  DropdownContentProps,
  DropdownRadioItemProps,
  DropdownItemProps,
  DropdownContentRef,
  DropdownRadioItemRef,
  DropdownItemRef,
} from './Dropdown.types';

const DropdownContent = forwardRef<DropdownContentRef, DropdownContentProps>(
  (props, ref) => (
    <DropdownMenu.Portal>
      <DropdownMenuContent ref={ref} sideOffset={5} {...props} />
    </DropdownMenu.Portal>
  )
);

const DropdownRadioItem = forwardRef<
  DropdownRadioItemRef,
  DropdownRadioItemProps
>(({ label, ...props }, ref) => (
  <DropdownMenu.RadioItem ref={ref} asChild {...props}>
    <OptionItem>
      <Text type="labelMedium">{label}</Text>
      <DropdownMenu.ItemIndicator>
        <Tick />
      </DropdownMenu.ItemIndicator>
    </OptionItem>
  </DropdownMenu.RadioItem>
));

const DropdownItem = forwardRef<DropdownItemRef, DropdownItemProps>(
  ({ label, ...props }, ref) => (
    <DropdownMenu.Item ref={ref} asChild {...props}>
      <OptionItem active>
        <Text type="labelMedium">{label}</Text>
      </OptionItem>
    </DropdownMenu.Item>
  )
);

const Dropdown = DropdownMenu.Root;
const DropdownTrigger = DropdownMenu.Trigger;
const DropdownRadioGroup = DropdownMenu.RadioGroup;

DropdownContent.displayName = 'DropdownContent';
DropdownRadioItem.displayName = 'DropdownRadioItem';
DropdownItem.displayName = 'DropdownItem';

export {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownRadioGroup,
  DropdownRadioItem,
  DropdownItem,
};
