import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FloatingButton } from '@atoms/FloatingButton';

import { Location as LocationIcon, ArrowUp, Chat as ChatIcon } from '@icons';

export default {
  title: 'Atoms/FloatingButton',
  component: FloatingButton,
  args: {
    disabled: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof FloatingButton>;

const Template: ComponentStory<typeof FloatingButton> = (args) => (
  <FloatingButton {...args} />
);

export const Location = Template.bind({});
Location.args = {
  children: <LocationIcon title="locate me" />,
};

export const BackToTop = Template.bind({});
BackToTop.args = {
  children: <ArrowUp title="go back to top" />,
  active: true,
  css: {
    right: '$xl',
  },
};

export const Chat = Template.bind({});
Chat.args = {
  children: <ChatIcon title="chat with us" />,
  css: {
    right: '$xl',
    bottom: '$7xl',
  },
};
