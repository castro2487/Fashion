import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputMention } from '@atoms/InputMention';

export default {
  title: 'Atoms/InputMention',
  component: InputMention,
  args: {
    children: 'This is the description shown in a form',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof InputMention>;

export const Default: ComponentStory<typeof InputMention> = (args) => (
  <InputMention {...args} />
);
