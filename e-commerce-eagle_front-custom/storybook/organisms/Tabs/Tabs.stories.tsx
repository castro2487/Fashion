import React from 'react';
import { ComponentMeta } from '@storybook/react';
import type * as Stitches from '@stitches/react';

import { Tabs, TabsList, TabsTrigger, TabsContent } from '@organisms/Tabs';

export default {
  title: 'Organisms/Tabs',
  component: Tabs,
  args: {
    alignment: 'left',
    variant: 'primary',
  },
  argTypes: {
    alignment: {
      options: ['left', 'center'],
      control: { type: 'radio' },
    },
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: {
        component:
          'You can use the $$paddingValue within Stitches components (or var(---paddingValue) in regular CSS) to set the padding of your children components.',
      },
    },
  },
} as ComponentMeta<typeof Tabs>;

type TabsStory = Stitches.VariantProps<typeof TabsList>;

export const Default = ({ alignment, variant }: TabsStory) => (
  <Tabs defaultValue="1">
    <TabsList variant={variant} alignment={alignment}>
      <TabsTrigger variant={variant} value="1">
        tab 1
      </TabsTrigger>
      <TabsTrigger variant={variant} value="2">
        tab 2
      </TabsTrigger>
      <TabsTrigger variant={variant} value="3">
        tab 3
      </TabsTrigger>
    </TabsList>
    <TabsContent value="1">tab 1 content</TabsContent>
    <TabsContent value="2">tab 2 content</TabsContent>
    <TabsContent value="3">tab 3 content</TabsContent>
  </Tabs>
);

export const PrimaryOnImage = () => (
  <Tabs defaultValue="1">
    <TabsList alignment="center">
      <TabsTrigger data-blurry value="1">
        tab 1
      </TabsTrigger>
      <TabsTrigger data-blurry value="2">
        tab 2
      </TabsTrigger>
      <TabsTrigger data-blurry value="3">
        tab 3
      </TabsTrigger>
    </TabsList>
    <TabsContent value="1">tab 1 content</TabsContent>
    <TabsContent value="2">tab 2 content</TabsContent>
    <TabsContent value="3">tab 3 content</TabsContent>
  </Tabs>
);
