'use client';
import React, { forwardRef, ElementRef } from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

import { TabItem } from '@atoms/TabItem/TabItem';
import { TabsList } from './Tabs.styles';
import { TabsRootProps, TabsTriggerProps } from '@amq';

const Tabs = forwardRef<HTMLDivElement, TabsRootProps>(function Tabs(
  props,
  forwardedRef
) {
  return (
    <TabsPrimitive.Root
      {...props}
      ref={forwardedRef}
      orientation="horizontal"
    />
  );
});

const TabsTrigger = forwardRef<
  ElementRef<typeof TabsPrimitive.Trigger>,
  TabsTriggerProps
>(function TabsTrigger({ children, ...props }, forwardedRef) {
  return (
    <TabsPrimitive.Trigger {...props} asChild ref={forwardedRef}>
      <TabItem>{children}</TabItem>
    </TabsPrimitive.Trigger>
  );
});

Tabs.displayName = 'Tabs';
TabsTrigger.displayName = 'TabsTrigger';

const TabsContent = TabsPrimitive.Content;

Tabs.displayName = 'Tabs';
TabsTrigger.displayName = 'TabsTrigger';

export { Tabs, TabsList, TabsTrigger, TabsContent };
