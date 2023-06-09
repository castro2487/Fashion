import { Content, RadioItem, Item } from '@radix-ui/react-dropdown-menu';
import React from 'react';

export type DropdownContentRef = React.ElementRef<typeof Content>;

export type DropdownContentProps = React.ComponentPropsWithoutRef<
  typeof Content
>;

export type DropdownRadioItemRef = React.ElementRef<typeof RadioItem>;
export interface DropdownRadioItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof RadioItem>,
    'children' | 'asChild'
  > {
  label: string;
}

export type DropdownItemRef = React.ElementRef<typeof Item>;
export interface DropdownItemProps
  extends Omit<
    React.ComponentPropsWithoutRef<typeof Item>,
    'children' | 'asChild'
  > {
  label: string;
}
