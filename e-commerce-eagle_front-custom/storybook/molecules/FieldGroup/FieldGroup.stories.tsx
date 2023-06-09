import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { FieldGroup } from '@molecules/FieldGroup/FieldGroup';

import { RadioGroup } from '@molecules/RadioGroup';
import radioGroupMock from '@molecules/RadioGroup/__mock__/radioGroupMock';

import { Input } from '@molecules/Input';
import inputMock from '@molecules/Input/__mock__/inputMock';

import { Select } from '@molecules/Select';
import selectMock from '@molecules/Select/__mock__/selectMock';

import { DatePicker } from '@molecules/DatePicker';
import datepickerMock from '@molecules/DatePicker/__mock__/datepickerMock';

import { Checkbox } from '@organisms/Checkbox';
import checkboxMock from '@organisms/Checkbox/__mock__/checkboxMock';

export default {
  title: 'Molecules/FieldGroup',
  component: FieldGroup,
  args: {
    title: 'Appointment details',
    mention: 'Required fields *',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof FieldGroup>;

const Template: ComponentStory<typeof FieldGroup> = (args) => (
  <form
    onInvalid={(e) => {
      e.preventDefault();
    }}
    style={{ width: 375 }}
  >
    <FieldGroup {...args}>
      <RadioGroup {...radioGroupMock} name="test" required />
      <Input {...inputMock} id="input1" />
      <Input {...inputMock} id="input2" />
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '20px',
        }}
      >
        <Select {...selectMock} />
        <DatePicker {...datepickerMock} id="datepickerid" />
      </div>
      <Checkbox {...checkboxMock} />
    </FieldGroup>
    <input type="submit" value="submit" />
  </form>
);

export const Default = Template.bind({});

export const VeryLongTitle = Template.bind({});
VeryLongTitle.args = {
  title:
    'This is very long title to show what happens when it reaches the right edge of the container.',
};
