import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CardsCarousel } from '@organisms/CardsCarousel';
import { Image } from '@atoms/Image';
import { Text } from '@atoms/Text';
import { Link } from '@atoms/Link';
import { Card } from '@molecules/Card';

export default {
  title: 'Organisms/CardsCarousel',
  component: CardsCarousel,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof CardsCarousel>;

export const Default: ComponentStory<typeof CardsCarousel> = (args) => (
  <CardsCarousel {...args}>
    {Array(12).map((card) => (
      <Card
        key={card}
        assets={
          <Image
            src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
            alt="Test"
          />
        }
        main={
          <Text as="p" type="h4">
            Houndstooth Kickback Jacket
          </Text>
        }
        ratio="portrait"
      />
    ))}
  </CardsCarousel>
);
Default.args = {
  id: 'cards-carousel',
  title: 'Similar items',
  subtitle: <Text type="h4">This is a subtitle</Text>,
  cta: {
    linkUrl: '/test',
    label: 'go here',
  },
};

export const OneItemPrimary: ComponentStory<typeof CardsCarousel> = (args) => (
  <CardsCarousel {...args}>
    <Card
      assets={
        <Image
          src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
          alt="Test"
        />
      }
      main={<Text type="h4">Houndstooth Kickback Jacket</Text>}
      ratio="portrait"
    />
  </CardsCarousel>
);
OneItemPrimary.args = {
  id: 'cards-carousel',
  title: 'No. F3S00MOGBO100016445 ',
  subtitle: (
    <Text as="p">
      € 2,750 - Online order 12 Sept -{' '}
      <Link linkUrl="/" linkDisplayType={''} linkId={''} linkColor={''}>
        <Text type="labelMedium">Exchange or Return</Text>
      </Link>
    </Text>
  ),
  cta: {
    linkUrl: '/test',
    label: 'go here',
  },
};

export const Cart: ComponentStory<typeof CardsCarousel> = (args) => (
  <CardsCarousel {...args}>
    {Array(4).map((card) => (
      <Card
        key={card}
        assets={
          <Image
            src="https://source.unsplash.com/random/960x1440/?fashion-beauty"
            alt="Test"
          />
        }
        main={<Text type="h4">Houndstooth Kickback Jacket</Text>}
        dir={{
          '@initial': 'horizontal',
          '@bp1': 'vertical',
          '@bp2': 'vertical',
          '@bp3': 'vertical',
        }}
        ratio={{
          '@initial': 'square',
          '@bp1': 'portrait',
          '@bp2': 'portrait',
          '@bp3': 'portrait',
        }}
      />
    ))}
  </CardsCarousel>
);
Cart.args = {
  id: 'cart-carousel',
  title: 'your cart (4)',
  variant: 'secondary',
};

export const EmptyCart: ComponentStory<typeof CardsCarousel> = (args) => (
  <CardsCarousel {...args} />
);
EmptyCart.args = {
  id: 'cart-carousel',
  title: 'your cart',
  variant: 'secondary',
  empty: <Text as="p">You haven’t added any items to your cart. </Text>,
};
