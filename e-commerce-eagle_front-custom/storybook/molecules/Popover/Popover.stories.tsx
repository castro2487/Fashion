import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Popover } from '@molecules/Popover';

export default {
  title: 'Molecules/Popover',
  component: Popover,
  args: {
    label: 'lorem ipsum',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Popover>;

const Template: ComponentStory<typeof Popover> = (args) => (
  <Popover {...args} />
);

export const Default = Template.bind({});

export const LongInfo = Template.bind({});
LongInfo.args = {
  label:
    'Officia incididunt cupidatat sint anim deserunt tempor non. Ex est in adipisicing laboris id ea tempor sit irure minim qui. Nisi do consequat commodo ad dolore ea exercitation.',
};
