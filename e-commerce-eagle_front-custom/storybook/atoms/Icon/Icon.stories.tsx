import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Icon } from '@atoms/Icon';
import { IconName } from '@functional/DynamicIconsMap';

export default {
  title: 'Molecules/Icon',
  component: Icon,
  args: {
    iconName: IconName.Account,
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
  argTypes: {
    iconName: {
      control: { type: 'select', options: [...Object.values(IconName)] },
    },
  },
} as ComponentMeta<typeof Icon>;

export const Default: ComponentStory<typeof Icon> = (args) => (
  <Icon {...args} />
);
