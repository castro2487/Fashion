import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Image } from '@atoms/Image';

export default {
  title: 'Atoms/Image',
  component: Image,
  args: {
    src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
    alt: 'Test',
  },
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Image>;

export const Default: ComponentStory<typeof Image> = (args) => (
  <Image {...args} />
);
