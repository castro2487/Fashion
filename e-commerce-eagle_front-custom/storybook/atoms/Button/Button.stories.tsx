import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Button } from '@atoms/Button';
import { ArrowLeft, ArrowRight } from '@icons';

export default {
  title: 'Atoms/Button',
  component: Button,
  args: {
    disabled: false,
  },
  argTypes: {
    onClick: { action: 'clicked' },
  },
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  children: 'primary cta',
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: 'secondary',
  children: 'secondary cta',
};

export const Tertiary = Template.bind({});
Tertiary.args = {
  variant: 'tertiary',
  size: 'small',
  children: 'Tertiary cta',
};

export const Big = Template.bind({});
Big.args = {
  children: 'primary cta',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  children: 'small',
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = {
  size: 'small',
  variant: 'tertiary',
  children: (
    <>
      <ArrowLeft role="none" />
      BACK
    </>
  ),
};

export const WithIconRight = Template.bind({});
WithIconRight.args = {
  size: 'small',
  variant: 'tertiary',
  children: (
    <>
      SUBMIT
      <ArrowRight role="none" />
    </>
  ),
};

export const OnlyIconLeft = Template.bind({});
OnlyIconLeft.args = {
  size: 'small',
  variant: 'tertiary',
  children: <ArrowLeft title="back" />,
};

export const OnlyIconRight = Template.bind({});
OnlyIconRight.args = {
  size: 'small',
  variant: 'tertiary',
  children: <ArrowRight title="next" />,
};
