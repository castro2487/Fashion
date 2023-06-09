import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ReturnCard } from '@organisms/ReturnCard';
import { Text } from '@atoms/Text';
import { Image } from '@atoms/Image';

export default {
  title: 'Organisms/Card/ReturnCard',
  component: ReturnCard,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof ReturnCard>;

const Template: ComponentStory<typeof ReturnCard> = (args) => (
  <div style={{ width: 375 }}>
    <ReturnCard {...args} aria-label="label for the card" />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  assets: (
    <Image
      src="https://source.unsplash.com/random/600x600/?fashion-beauty"
      alt="test"
    />
  ),
  main: <Text type="labelMedium">Deconstructed Corset Dress</Text>,
  price: <Text type="labelMedium">€ 7 500</Text>,
};
