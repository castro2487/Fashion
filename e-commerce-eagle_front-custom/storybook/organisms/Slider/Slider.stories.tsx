import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Slider } from '@organisms/Slider';
import sliderMock from '@organisms/Slider/__mock__/sliderMock';

export default {
  title: 'Organisms/Slider',
  component: Slider,
  args: sliderMock,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Slider>;

export const Default: ComponentStory<typeof Slider> = (args) => (
  <div style={{ height: '100vh', width: '100vw' }}>
    <Slider {...args} />
  </div>
);
