import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Stepper } from '@organisms/Stepper';

export default {
  title: 'Organisms/Stepper',
  component: Stepper,
  args: {
    steps: 5,
    activeIndex: 0,
    next: {
      visible: true,
      disabled: false,
    },
    prev: {
      visible: false,
      disabled: false,
    },
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => (
  <div style={{ width: 375 }}>
    <Stepper {...args} />
  </div>
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  steps: 4,
  activeIndex: 2,
  prev: { visible: true, disabled: true },
};
