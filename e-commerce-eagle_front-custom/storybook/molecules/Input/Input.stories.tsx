import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Input } from '@molecules/Input';
import inputMock, {
  inputDescriptionMock,
  inputRequiredMock,
  inputCustomErrorMock,
  inputPatternCheckMock,
  inputHelperMock,
} from '@molecules/Input/__mock__/inputMock';

export default {
  title: 'Molecules/Input',
  component: Input,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Input>;

export const Default: ComponentStory<typeof Input> = (args) => (
  <Input {...args} />
);
Default.args = inputMock;

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ width: 375 }}>
    <Input {...args} />
  </div>
);

export const WithDescription = Template.bind({});
WithDescription.args = inputDescriptionMock;

export const WithHelper = Template.bind({});
WithHelper.args = inputHelperMock;

export const Required = Template.bind({});
Required.args = {
  id: 'required',
  label: 'Required field',
  type: 'text',
  required: true,
};

export const WithCustomErrors = Template.bind({});
WithCustomErrors.args = {
  ...inputCustomErrorMock,
  type: 'email',
};

export const WithPatternCheck = Template.bind({});
WithPatternCheck.args = {
  ...inputPatternCheckMock,
  type: 'tel',
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...inputMock,
  outlined: true,
  required: true,
};

const FormTemplate: ComponentStory<typeof Input> = (args) => (
  <form
    onInvalid={(e) => {
      e.preventDefault();
    }}
    style={{ width: 375 }}
  >
    <Input {...args} />
    <input type="submit" value="submit" />
  </form>
);

export const FormExample = FormTemplate.bind({});
FormExample.args = inputRequiredMock;

export const CustomValidation = FormTemplate.bind({});
CustomValidation.args = {
  ...inputRequiredMock,
  isCustomCheckValid: false,
  errors: {
    customError: 'custom check blocking submission',
  },
};
