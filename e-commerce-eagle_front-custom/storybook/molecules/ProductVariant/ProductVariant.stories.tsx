import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductVariant } from '@molecules/ProductVariant';

export default {
  title: 'Molecules/ProductVariant',
  component: ProductVariant,
  args: {
    label: 'Small',
  },
  argTypes: {
    selected: {
      type: 'boolean',
      defaultValue: false,
    },
    disabled: {
      type: 'boolean',
      defaultValue: false,
    },
    outOfStock: {
      type: 'boolean',
      defaultValue: false,
    },
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof ProductVariant>;

const Template: ComponentStory<typeof ProductVariant> = (args) => (
  <ProductVariant {...args} />
);

export const Default = Template.bind({});

export const ImageVariant = Template.bind({});
ImageVariant.args = {
  asset: {
    src: '/variant.png',
  },
};
