import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { RadioGroup } from '@molecules/RadioGroup';
import radioGroupMock, {
  radioGroupFormMock,
} from '@molecules/RadioGroup/__mock__/radioGroupMock';

import { Mastercard, Amex } from '@icons';

export default {
  title: 'Molecules/RadioGroup',
  component: RadioGroup,
  args: radioGroupMock,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof RadioGroup>;

const Template: ComponentStory<typeof RadioGroup> = (args) => (
  <RadioGroup {...args} />
);

export const Default = Template.bind({});

export const Disabled = Default.bind({});
Disabled.args = {
  disabled: true,
  values: [
    ...radioGroupMock.values,
    {
      ...radioGroupMock.values[radioGroupMock.values.length - 1],
      suffix: (
        <div
          style={{
            opacity: 0.5,
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-xs)',
          }}
        >
          <Mastercard />
          <Amex />
        </div>
      ),
    },
  ],
};

export const Vertical = Template.bind({});
Vertical.args = {
  orientation: 'vertical',
  values: [
    ...radioGroupMock.values,
    {
      value: 'fourth',
      id: 'four',
      label: 'This is the fourth option',
      suffix: (
        <>
          <Mastercard />
          <Amex />
        </>
      ),
    },
  ],
};

export const FormExample: ComponentStory<typeof RadioGroup> = (args) => (
  <form
    style={{ width: 375 }}
    onInvalid={(e) => {
      e.preventDefault();
    }}
  >
    <RadioGroup {...args} />
    <input type="submit" value="submit" />
  </form>
);
FormExample.args = radioGroupFormMock;
