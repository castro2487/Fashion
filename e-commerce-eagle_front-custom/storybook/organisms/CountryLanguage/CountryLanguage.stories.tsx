import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CountryLanguage } from '@organisms/CountryLanguage';
import {
  CURRENT_COUNTRY_PROPS_MOCK,
  CURRENT_LANG_PROPS_MOCK,
  LOCALE_CONFIG_PROPS_MOCK,
} from './__mock__/countryLanguageMock';

export default {
  title: 'Organisms/CountryLanguage',
  component: CountryLanguage,
  args: {
    regAndCountriesList: LOCALE_CONFIG_PROPS_MOCK,
    currentCountry: CURRENT_COUNTRY_PROPS_MOCK,
    currentLanguage: CURRENT_LANG_PROPS_MOCK,
    theme: 'light',
  },
  argTypes: {
    theme: {
      control: { type: 'select', options: ['light', 'dark'] },
    },
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof CountryLanguage>;

const Template: ComponentStory<typeof CountryLanguage> = (args) => (
  <CountryLanguage {...args} />
);

export const Default = Template.bind({});

export const Dark = Template.bind({});
Dark.args = {
  theme: 'dark',
};
Dark.parameters = {
  backgrounds: {
    default: 'black',
    values: [{ name: 'black', value: 'black' }],
  },
};
