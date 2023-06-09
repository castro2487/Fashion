import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { PasswordInput } from '@molecules/PasswordInput';

export default {
  title: 'Molecules/PasswordInput',
  component: PasswordInput,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof PasswordInput>;

export const Default: ComponentStory<typeof PasswordInput> = (args) => {
  return (
    <div style={{ width: 375 }}>
      <PasswordInput
        {...args}
        pattern="(?=.*[ !#$£€%()*+\x22\x26\x3C\x3E\x5B\x5D\x2F',\-.:_;=?@\^`{|}~'])(?=.*[A-Z])(?=.*[0-9]).{8,}"
      />
    </div>
  );
};
Default.args = {
  id: 'password',
  label: 'Password',
  description:
    'Password should contain at least 8 characters, one upper case letter, one special character (!+,-./:;<=>?@) and one number.',
  type: 'password',
  required: true,
  errors: {
    valueMissing: 'The password is required',
    patternMismatch: 'Password doesn’t meet requirements',
  },
};
