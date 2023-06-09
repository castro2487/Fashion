import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Zoom } from '@molecules/Zoom';

export default {
  title: 'Molecules/Zoom',
  argTypes: {
    onClickZoomIn: { action: 'clicked' },
    onClickZoomOut: { action: 'clicked' },
  },
  component: Zoom,
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Zoom>;

const Template: ComponentStory<typeof Zoom> = (args) => <Zoom {...args} />;

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};
