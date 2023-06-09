import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Link } from '@atoms/Link';

import { Checkbox } from '@organisms/Checkbox';
import checkboxMock, {
  checkboxDisabledMock,
  checkbocFormMock,
} from '@organisms/Checkbox/__mock__/checkboxMock';

export default {
  title: 'Organisms/Checkbox',
  component: Checkbox,
  args: checkboxMock,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
  <Checkbox {...args} />
);

export const Default = Template.bind({});

export const WithLink = Template.bind({});
WithLink.args = {
  label: (
    <div>
      Test label with{' '}
      <Link
        linkUrl="https://google.com"
        target="_blank"
        linkDisplayType={''}
        linkId={''}
        linkColor={''}
      >
        link
      </Link>
    </div>
  ),
};

export const Disabled = Template.bind({});
Disabled.args = checkboxDisabledMock;

export const BackgroundColor = Template.bind({});
BackgroundColor.args = {
  accentColor: '#f00',
};

export const BackgroundColorDisabled = Template.bind({});
BackgroundColorDisabled.args = {
  accentColor: '#f00',
  disabled: true,
};

export const BackgroundColorWhite = Template.bind({});
BackgroundColorWhite.args = {
  accentColor: '#fff',
};

export const FormExample: ComponentStory<typeof Checkbox> = (args) => (
  <form
    style={{ width: 375 }}
    onInvalid={(e) => {
      e.preventDefault();
    }}
  >
    <Checkbox {...args} />
    <input type="submit" value="submit" />
  </form>
);
FormExample.args = checkbocFormMock;
