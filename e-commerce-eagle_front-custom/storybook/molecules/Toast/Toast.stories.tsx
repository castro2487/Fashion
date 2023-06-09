import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Toast, ToastProvider } from '@molecules/Toast';

export default {
  title: 'Molecules/Toast',
  component: Toast,
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: {
        component:
          'The ToastProvider should wrap your whole application, not just the Toast.',
      },
    },
  },
  args: {
    open: true,
    centered: false,
    className: 'ToastRoot',
  },
} as ComponentMeta<typeof Toast>;

const Template: ComponentStory<typeof Toast> = (args) => (
  <ToastProvider>
    <Toast {...args} />
  </ToastProvider>
);

export const Success = Template.bind({});
Success.args = {
  title: 'Thank you for your inquiry.',
  isSuccess: true,
};

export const Error = Template.bind({});
Error.args = {
  title: 'Error',
  isSuccess: false,
};
