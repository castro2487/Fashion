import React, { ComponentProps } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Image } from '@atoms/Image';
import { Text } from '@atoms/Text';
import { Card } from '@molecules/Card';
import { Color } from '@molecules/Color';
import { Select } from '@molecules/Select';

export default {
  title: 'Molecules/Card',
  component: Card,
  args: {
    ratio: 'portrait',
    dir: 'vertical',
    align: 'center',
  },
  argTypes: {
    ratio: {
      options: ['portrait', 'square'],
      control: { type: 'radio' },
    },
    dir: {
      options: ['horizontal', 'vertical'],
      control: { type: 'radio' },
    },
    align: {
      options: ['center', 'end'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Card>;

const selectProps: ComponentProps<typeof Select> = {
  id: 'test-select',
  variant: 'secondary',
  placeholder: 'placeholder',
  defaultValue: '1',
  options: [
    {
      id: '1',
      label: 'Qty 1',
    },
    {
      id: '2',
      label: 'Qty 2',
    },
    {
      id: '3',
      label: 'Qty 3',
    },
  ],
};

export const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ width: 375 }}>
    <Card {...args} />
  </div>
);
Template.args = {
  assets: (
    <Image
      src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
      alt="Test"
    />
  ),
  main: (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <Text type="labelMedium" css={{ color: '$red' }}>
        Only 1 item left
      </Text>
      <Text type="h4">Houndstooth Kickback Jacket</Text>
      <Color color="#000" label="Black" css={{ padding: '$xs 0' }} />
      <Select {...selectProps} css={{ padding: 0 }} />
    </div>
  ),
  actions: (
    <div style={{ display: 'flex', gap: 16 }}>
      <Text type="labelSmall">Edit</Text>
      <Text type="labelSmall">Remove</Text>
    </div>
  ),
  price: <Text type="labelMedium">€ 5 990</Text>,
};
