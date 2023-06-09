import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Spotlight } from '@organisms/Spotlight';
import { spotlightMock } from '@organisms/Spotlight/__mock__/spotlightMock';

export default {
  title: 'Organisms/Spotlight',
  component: Spotlight,
  args: spotlightMock,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Spotlight>;

export const Default: ComponentStory<typeof Spotlight> = (args) => (
  <div style={{ width: 375 }}>
    <Spotlight {...args} />
  </div>
);
