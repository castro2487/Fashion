import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ProductCard } from '@organisms/ProductCard';
import productCardMock from '@organisms/ProductCard/__mock__/productCardMock';

export default {
  title: 'Organisms/Card/ProductCard',
  component: ProductCard,
  args: productCardMock,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof ProductCard>;

const Template: ComponentStory<typeof ProductCard> = (args) => (
  <div style={{ width: 375 }}>
    <ProductCard {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithOptionals = Template.bind({});
WithOptionals.args = {
  label: 'New In',
  colorsLabel: '+7 colors',
  extraColors: '+1 color',
  colors: [
    {
      linkUrl: '/black',
      color: '#000',
    },
    {
      linkUrl: '/white',
      color: '#fff',
    },
    {
      linkUrl: '/white',
      color: '#faf',
    },
    {
      linkUrl: '/white',
      color: '#fbf',
    },
    {
      linkUrl: '/white',
      color: '#fcf',
    },
    {
      linkUrl: '/white',
      color: '#fdf',
    },
    {
      linkUrl: '/white',
      color: '#fef',
    },
  ],
  isDemo: true,
  asset: {
    src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
    alt: 'Deconstructed Corset Dress',
  },
};

export const WithVideo = Template.bind({});
WithVideo.args = {
  isDemo: true,
  asset: {
    src: '/amq-video.mp4',
    type: 'video/mp4',
  },
};
