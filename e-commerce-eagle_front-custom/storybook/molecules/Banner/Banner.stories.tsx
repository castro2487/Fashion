import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Banner } from '@molecules/Banner';

export default {
  title: 'Molecules/Banner',
  component: Banner,
  args: {
    variant: 'banner',
    type: 'difference',
    padded: false,
    title: 'NEW SS23 COLLECTION',
    asset: {
      src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
      alt: 'Test',
    },
    cta: {
      linkUrl: '/test',
      label: 'click me',
    },
  },
  argTypes: {
    type: {
      control: 'select',
      options: ['difference', 'dark', 'light'],
    },
    variant: {
      control: 'select',
      options: ['banner', 'card'],
    },
    padded: {
      control: 'boolean',
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Banner>;

const Template: ComponentStory<typeof Banner> = (args) => (
  <div style={args.variant === 'card' ? { width: 375 } : undefined}>
    <Banner {...args} />
  </div>
);

export const FullWidth = Template.bind({});

export const WhiteText = Template.bind({});
WhiteText.args = {
  type: 'dark',
};

export const BlackText = Template.bind({});
BlackText.args = {
  type: 'light',
};

export const FullWidthPadded = Template.bind({});
FullWidthPadded.args = {
  padded: true,
};

export const Card = Template.bind({});
Card.args = {
  variant: 'card',
  cta: undefined,
};
Card.parameters = {
  layout: 'centered',
};

export const TwoCTA = Template.bind({});
TwoCTA.args = {
  ctaSecondary: {
    linkUrl: '/',
    label: 'another link',
  },
};
