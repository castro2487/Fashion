import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '@atoms/Link';

import { CollapsibleText } from '@molecules/CollapsibleText';

export default {
  title: 'Molecules/CollapsibleText',
  component: CollapsibleText,
  args: {
    moreLabel: 'see more',
    lessLabel: 'see less',
    type: 'h4',
  },
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof CollapsibleText>;

const Template: ComponentStory<typeof CollapsibleText> = (args) => (
  <div style={{ padding: 40 }}>
    <CollapsibleText {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  children:
    'Ea aliqua sit occaecat occaecat nisi velit eiusmod eu ut consequat nisi. Magna laborum Lorem laboris ex mollit eu ad eu officia ipsum voluptate sunt. Mollit sit officia nostrud cillum tempor laborum aute aute. Magna magna velit voluptate fugiat. Officia Lorem nostrud pariatur incididunt dolor consequat labore cupidatat id consectetur sunt. Commodo id ea labore irure incididunt id aliqua voluptate laboris eu do.',
};

export const LessClamp = Template.bind({});
LessClamp.args = {
  clampNumber: 5,
  children:
    'Ea aliqua sit occaecat occaecat nisi velit eiusmod eu ut consequat nisi. Magna laborum Lorem laboris ex mollit eu ad eu officia ipsum voluptate sunt. Mollit sit officia nostrud cillum tempor laborum aute aute. Magna magna velit voluptate fugiat. Officia Lorem nostrud pariatur incididunt dolor consequat labore cupidatat id consectetur sunt. Commodo id ea labore irure incididunt id aliqua voluptate laboris eu do.',
};

export const ShortText = Template.bind({});
ShortText.args = {
  children: 'There is not much to say here.',
};

export const TextWithLink = Template.bind({});
TextWithLink.args = {
  type: 'labelLarge',
  children: (
    <>
      This is some text content that also has{' '}
      <Link linkUrl="/" linkId={''} linkDisplayType={''} linkColor={''}>
        a link
      </Link>{' '}
      inside it to show that this is not limited to a simple string of text. You
      can also see you can change the typography style used for the Text
      component.
    </>
  ),
};
