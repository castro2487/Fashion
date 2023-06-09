import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FramedContent } from '@atoms/FramedContent';

export default {
  title: 'Atoms/FramedContent',
  component: FramedContent,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof FramedContent>;

export const Default: ComponentStory<typeof FramedContent> = () => (
  <FramedContent>This is a framed content</FramedContent>
);
