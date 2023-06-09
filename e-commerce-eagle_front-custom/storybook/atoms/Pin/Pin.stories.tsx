import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Pin } from '@atoms/Pin';

export default {
  title: 'Atoms/Pin',
  component: Pin,
  argTypes: {
    active: { control: 'boolean', defaultValue: false },
  },
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Pin>;

const Template: ComponentStory<typeof Pin> = (args) => <Pin {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
