import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '@atoms/Link';
import { Text } from '@atoms/Text';

export default {
  title: 'Atoms/Link',
  component: Link,
  args: {
    linkDisplayName: 'Femme',
    linkType: 'Text',
    linkDisplayType: 'Category',
    linkId: 'woman',
    linkUrl: 'http://',
    linkDisplayIcon: '',
    linkOpenInNewTab: false,
    linkColor: 'black',
  },
  argTypes: {
    linkType: {
      control: 'select',
      options: ['Content Page', 'External', 'Category'],
    },
    linkDisplayType: {
      control: 'select',
      options: ['Text', 'Icon'],
    },
  },
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Link>;

export const Default: ComponentStory<typeof Link> = (args) => (
  <Link {...args}>
    <Text>{args.linkDisplayName}</Text>
  </Link>
);
