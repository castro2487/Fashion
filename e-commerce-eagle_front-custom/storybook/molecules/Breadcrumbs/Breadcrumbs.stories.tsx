import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Breadcrumbs } from '@molecules/Breadcrumbs';

export default {
  title: 'Molecules/Breadcrumbs',
  component: Breadcrumbs,
  args: {
    items: [
      {
        id: '1',
        label: 'Women',
        linkUrl: '#',
      },
      {
        id: '2',
        label: 'Ready-To-Wear',
        linkUrl: '#',
      },
    ],
    current: 'Dreses',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Breadcrumbs>;

export const Default: ComponentStory<typeof Breadcrumbs> = (args) => (
  <Breadcrumbs {...args} />
);
