import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RichText } from '@molecules/RichText/RichText';
import richTextMock from '@molecules/RichText/__mock__/richTextMock';

export default {
  title: 'Molecules/RichText',
  component: RichText,
  args: richTextMock,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof RichText>;

export const Default: ComponentStory<typeof RichText> = (args) => (
  <div style={{ width: 800 }}>
    <RichText {...args} />
  </div>
);
