import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FramedText } from '@molecules/FramedText';

export default {
  title: 'Molecules/FramedText',
  component: FramedText,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
  args: {
    title: 'Welcome to the London Flagship store',
    subtitle:
      'Experience the woodland escapade, designed by creative director Sarah Burton and architect Smiljan Radic, in the centre of London',
  },
} as ComponentMeta<typeof FramedText>;

export const Default: ComponentStory<typeof FramedText> = (args) => (
  <FramedText {...args} />
);
