import React, { useEffect } from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { registerLocale, setDefaultLocale } from 'react-datepicker';

import { DatePicker } from '@molecules/DatePicker';
import datepickerMock, {
  datepickerI18nMock,
  datepickerFormMock,
} from '@molecules/DatePicker/__mock__/datepickerMock';

export default {
  title: 'Molecules/DatePicker',
  component: DatePicker,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof DatePicker>;

export const Default: ComponentStory<typeof DatePicker> = (args) => (
  <DatePicker {...args} />
);
Default.args = datepickerMock;

export const Localized: ComponentStory<typeof DatePicker> = (args) => {
  useEffect(() => {
    async function getDateFns() {
      const localeLanguage = 'fr'; // This can be a function to get the correct locale

      if (localeLanguage) {
        const dateFnsLocale = await import(
          `date-fns/locale/${localeLanguage}/index.js`
        );

        if (dateFnsLocale) {
          registerLocale(localeLanguage, dateFnsLocale.default);
          setDefaultLocale(localeLanguage);
        }
      }
    }

    getDateFns();
  }, []);

  return (
    <div style={{ width: 375 }}>
      <DatePicker {...args} />
    </div>
  );
};
Localized.args = datepickerI18nMock;

export const FormExample: ComponentStory<typeof DatePicker> = (args) => (
  <form
    onInvalid={(e) => {
      e.preventDefault();
    }}
    style={{ width: 375 }}
  >
    <DatePicker {...args} />
    <input type="submit" value="submit" />
  </form>
);
FormExample.args = datepickerFormMock;
