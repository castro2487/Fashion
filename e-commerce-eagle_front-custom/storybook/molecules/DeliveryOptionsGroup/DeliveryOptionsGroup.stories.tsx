import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { DeliveryOptionsGroup } from '@molecules/DeliveryOptionsGroup';
import {
  deliveryOptionsGroupMock,
  deliveryOptionsGroupFormMock,
} from '@molecules/DeliveryOptionsGroup/__mock__/deliveryOptionsGroupMock';

export default {
  title: 'Molecules/Delivery Options Group',
  component: DeliveryOptionsGroup,
  args: deliveryOptionsGroupMock,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof DeliveryOptionsGroup>;

const Template: ComponentStory<typeof DeliveryOptionsGroup> = (args) => (
  <DeliveryOptionsGroup {...args} />
);

export const Default = Template.bind({});

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
};

export const FormExample: ComponentStory<typeof DeliveryOptionsGroup> = (
  args
) => (
  <form
    style={{ width: 375 }}
    onInvalid={(e) => {
      e.preventDefault();
    }}
  >
    <DeliveryOptionsGroup {...args} />
    <input type="submit" value="submit" />
  </form>
);
FormExample.args = deliveryOptionsGroupFormMock;
