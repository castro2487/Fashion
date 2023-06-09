import React, { useState } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { ShopButton } from '@molecules/ShopButton';

export default {
  title: 'Molecules/ShopButton',
  component: ShopButton,
  args: {
    label: '2 items',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof ShopButton>;

export const Interactive: ComponentStory<typeof ShopButton> = (args) => {
  const [active, setActive] = useState<boolean | undefined>(false);

  const onClick = () => {
    setActive(!active);
  };

  return <ShopButton {...args} active={active} onClick={onClick} />;
};

const Template: ComponentStory<typeof ShopButton> = (args) => (
  <ShopButton {...args} />
);

export const Inactive = Template.bind({});
Inactive.args = {
  active: false,
};

export const Active = Template.bind({});
Active.args = {
  active: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  active: false,
  disabled: true,
};
