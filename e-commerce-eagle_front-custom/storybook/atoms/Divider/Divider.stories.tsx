import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Divider } from '@atoms/Divider';

export default {
  title: 'Atoms/Divider',
  component: Divider,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Divider>;

export const Default: ComponentStory<typeof Divider> = () => (
  <div style={{ width: '500px', margin: '0 auto' }}>
    <Divider />
  </div>
);
