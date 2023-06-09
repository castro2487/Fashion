import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import * as RadioGroupPrimitive from '@radix-ui/react-radio-group';

import { ExchangeCard } from '@molecules/ExchangeCard';
import { Text } from '@atoms/Text';
import { Image } from '@atoms/Image';

export default {
  title: 'Molecules/Card/ExchangeCard',
  component: ExchangeCard,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof ExchangeCard>;

const Template: ComponentStory<typeof ExchangeCard> = (args) => (
  <RadioGroupPrimitive.Root style={{ width: 375 }}>
    <ExchangeCard {...args} value="1" />
  </RadioGroupPrimitive.Root>
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
