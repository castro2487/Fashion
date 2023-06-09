import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { CaptionedImage } from '@molecules/CaptionedImage';

import { Text } from '@atoms/Text';

export default {
  title: 'Molecules/CaptionedImage',
  component: CaptionedImage,
  args: {
    image: {
      src: 'https://source.unsplash.com/random/960x540/?fashion-beauty',
      alt: 'Test',
      width: 960,
      height: 540,
    },
    children: (
      <>
        <Text type="h4" css={{ color: '$darkGrey' }}>
          Dressing Yellow:{' '}
        </Text>
        <Text type="labelLarge" css={{ color: '$darkGrey' }}>
          glued paper, magazine clippings, epoxy resin and fiberglass, Marcela
          Correa, 2022.‌
        </Text>
      </>
    ),
  },
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof CaptionedImage>;

export const Default: ComponentStory<typeof CaptionedImage> = (args) => (
  <CaptionedImage {...args} />
);
