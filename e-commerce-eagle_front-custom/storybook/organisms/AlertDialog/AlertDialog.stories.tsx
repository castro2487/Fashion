import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogTrigger,
} from '@organisms/AlertDialog';

export default {
  title: 'Organisms/AlertDialog',
  component: AlertDialog,
  args: {
    title: 'This is my title',
    description: 'This is my description',
    actionCallback: () => {
      console.log('hello world');
    },
    actionLabel: 'remove from cart',
    cancelLabel: 'keep in cart',
  },
  parameters: {
    docs: {
      source: { type: 'dynamic' },
      description: {
        component:
          'You can use the $$paddingValue within Stitches components (or var(---paddingValue) in regular CSS) to set the padding of your children components.',
      },
    },
  },
} as ComponentMeta<typeof AlertDialogContent>;

const Template: ComponentStory<typeof AlertDialogContent> = (args) => (
  <AlertDialog>
    <AlertDialogTrigger>Open Alert Dialog</AlertDialogTrigger>
    <AlertDialogContent {...args} />
  </AlertDialog>
);

export const Default = Template.bind({});

export const ActionOnPrimary = Template.bind({});
ActionOnPrimary.args = {
  actionOnPrimary: true,
};

export const WithImage = Template.bind({});
WithImage.args = {
  image: {
    src: 'https://source.unsplash.com/random/960x1440/?fashion-beauty',
    alt: 'Test',
  },
};

export const Controlled: ComponentStory<typeof AlertDialogContent> = (args) => {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
      <AlertDialogContent {...args} />
    </AlertDialog>
  );
};
Controlled.args = {
  actionCallback: (e) => {
    e.preventDefault();
  },
};
