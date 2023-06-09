import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { InputError } from '@molecules/InputError';

export default {
  title: 'Molecules/InputError',
  component: InputError,
  args: {
    error: 'This is an error message',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof InputError>;

export const Default: ComponentStory<typeof InputError> = (args) => (
  <InputError {...args} />
);
