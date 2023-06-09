'use client';
import React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { Text } from '@atoms/Text/Text';
import { Close } from '@icons';

import {
  Header,
  StyledCloseButton,
  StyledContent,
  StyledOverlay,
} from './ActionSheet.styles';
import { ActionSheetContentProps } from './ActionSheet.types';

const ActionSheetContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  ActionSheetContentProps
>(({ title, children, ...props }, forwardedRef) => (
  <DialogPrimitive.Portal>
    <StyledOverlay>
      <StyledContent
        {...props}
        ref={forwardedRef}
        side={{
          '@initial': 'bottom',
          '@bp1': 'right',
          '@bp2': 'right',
          '@bp3': 'right',
        }}
        width={{
          '@initial': 'full',
          '@bp1': 'half',
          '@bp2': 'side',
          '@bp3': 'fixed',
        }}
        padding={{
          '@initial': 'm',
          '@bp1': 'l',
          '@bp2': 'l',
          '@bp3': 'l',
        }}
      >
        <Header>
          <DialogPrimitive.Title>
            <Text type="h3">{title}</Text>
          </DialogPrimitive.Title>
          <StyledCloseButton>
            <Close title="Close" />
          </StyledCloseButton>
        </Header>
        {children}
      </StyledContent>
    </StyledOverlay>
  </DialogPrimitive.Portal>
));

ActionSheetContent.displayName = 'Search';
const ActionSheet = DialogPrimitive.Root;
const ActionSheetTrigger = DialogPrimitive.Trigger;

export { ActionSheet, ActionSheetTrigger, ActionSheetContent };
