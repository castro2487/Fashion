import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Select } from '@molecules/Select';
import selectMock, {
  selectDefaultValueMock,
} from '@molecules/Select/__mock__/selectMock';

export default {
  title: 'Molecules/Select',
  component: Select,
  args: selectMock,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ width: 375 }}>
    <Select {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = selectMock;

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = selectDefaultValueMock;

export const Secondary: ComponentStory<typeof Select> = (args) => (
  <Select {...args} />
);
Secondary.args = {
  ...selectMock,
  variant: 'secondary',
  title: undefined,
};
