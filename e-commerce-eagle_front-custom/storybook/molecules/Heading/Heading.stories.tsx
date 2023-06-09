import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Heading } from '@molecules/Heading';

export default {
  title: 'Molecules/Heading',
  component: Heading,
  args: {
    label: 'World of McQueen',
    title: 'Take a look behind the scenes',
  },
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});

export const WithDescription = Template.bind({});
WithDescription.args = {
  subtitle: 'description',
};
