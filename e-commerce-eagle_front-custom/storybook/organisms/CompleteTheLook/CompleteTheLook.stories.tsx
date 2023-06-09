import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CompleteTheLook } from '@organisms/CompleteTheLook';
import { Image } from '@atoms/Image';
import { Text } from '@atoms/Text';
import { Card } from '@molecules/Card';

export default {
  title: 'Organisms/CompleteTheLook',
  component: CompleteTheLook,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof CompleteTheLook>;

export const Default: ComponentStory<typeof CompleteTheLook> = (args) => (
  <CompleteTheLook {...args}>
    {Array(6).map((card) => (
      <Card
        key={card}
        assets={
          <Image
            src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
            alt="Test"
          />
        }
        main={
          <div
            style={{ display: 'flex', flexDirection: 'column', rowGap: '4' }}
          >
            <Text type="labelMedium">Houndstooth Kickback Jacket</Text>
            <Text type="labelMedium" css={{ color: '$blackGrey' }}>
              € 2 750
            </Text>
          </div>
        }
        ratio="portrait"
      />
    ))}
  </CompleteTheLook>
);
Default.args = {
  id: 'complete-carousel',
  title: 'Complete the look',
  look: {
    src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
    alt: 'Test',
  },
};
