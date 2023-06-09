import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Campaign } from '@organisms/Campaign';
import { Image } from '@atoms/Image';
import { Text } from '@atoms/Text';
import { Card } from '@molecules/Card';

export default {
  title: 'Organisms/Campaign',
  component: Campaign,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Campaign>;

export const Default: ComponentStory<typeof Campaign> = (args) => (
  <Campaign {...args} />
);
Default.args = {
  id: 'cards-carousel',
  heading: {
    label: 'new',
    title: 'The Winter Edit',
    subtitle: 'description',
  },
  asset: {
    src: 'https://source.unsplash.com/random/1000x1000/?fashion',
    alt: 'Test',
  },
  productTiles: [
    {
      productTile: 'productTile_1',
      productTileLinkType: 'Product',
      productTileImage: {
        src: 'https://amq-sandbox.getbynder.com/m/bbc2fa657b48f7c/webimage-Large-4x5.png',
        alt: 'Large-4x5',
      },
    },
    {
      productTile: 'productTile_2',
      productTileLinkType: 'Category',
      productTileImage: {
        src: 'https://amq-sandbox.getbynder.com/m/bbc2fa657b48f7c/webimage-Large-4x5.png',
        alt: 'Large-4x5',
      },
    },
    {
      productTile: 'productTile_3',
      productTileLinkType: 'Product',
      productTileImage: {
        src: 'https://amq-sandbox.getbynder.com/m/bbc2fa657b48f7c/webimage-Large-4x5.png',
        alt: 'Large-4x5',
      },
    },
  ],
};
