import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Label } from '@atoms/Label';

export default {
  title: 'Atoms/Label',
  component: Label,
  args: {
    children: 'Label',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
