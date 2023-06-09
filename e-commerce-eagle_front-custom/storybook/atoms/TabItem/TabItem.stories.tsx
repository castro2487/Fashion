import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '@atoms/Link';
import { TabItem } from '@atoms/TabItem';

export default {
  title: 'Atoms/TabItem',
  component: TabItem,
  args: {
    disabled: false,
    'data-state': 'active',
  },
  argTypes: {
    onClick: { action: 'clicked' },
    'data-state': {
      control: { type: 'radio' },
      options: ['active', 'inactive'],
      value: 'active',
    },
  },
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof TabItem>;

const Template: ComponentStory<typeof TabItem> = (args) => (
  <TabItem {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  children: 'tab 1',
};

export const PrimaryOnAsset: ComponentStory<typeof TabItem> = (args) => (
  <TabItem {...args} data-blurry="true" />
);
PrimaryOnAsset.args = {
  children: 'tab 1',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'Ship to home',
};

export const TabItemAsLink: ComponentStory<typeof Link> = (args) => (
  <TabItem
    {...args}
    as={Link}
    linkUrl="/test"
    underline={false}
    styled="default"
  />
);
TabItemAsLink.args = {
  children: 'this is a link',
};
