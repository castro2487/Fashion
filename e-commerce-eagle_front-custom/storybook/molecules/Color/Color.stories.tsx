import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Color } from '@molecules/Color';

export default {
  title: 'Molecules/Color Block',
  component: Color,
  args: {
    color: '#fff',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Color>;

const Template: ComponentStory<typeof Color> = (args) => <Color {...args} />;

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  color: '#000',
  label: 'Black',
};
