import React, { ComponentProps } from 'react';

import { styled } from '@stitches-definitions';

import { Input } from '@molecules/Input';
import { Select } from '@molecules/Select';
import { InputMention } from '@atoms/InputMention';

const PhoneWrapper = styled('div', {
  paddingBottom: '$m',
});

const PhoneContainer = styled('div', {
  display: 'flex',
  gap: '$l',
});

export default {
  title: 'Examples/Phone',
  args: {
    prefix: {
      id: 'prefix',
      name: 'prefix',
      title: 'Prefix',
      placeholder: 'Prefix',
      defaultValue: '+33',
      options: [
        {
          id: '+31',
          label: '+31',
        },
        {
          id: '+32',
          label: '+32',
        },
        {
          id: '+33',
          label: '+33',
        },
        {
          id: '+34',
          label: '+34',
        },
        {
          id: '+35',
          label: '+35',
        },
      ],
    },
    tel: {
      id: 'required',
      label: 'Phone *',
      type: 'tel',
      required: true,
      pattern: '^\\d{6,12}$',
      errors: {
        valueMissing: 'This field is required',
        patternMismatch: 'Make sure the format is correct',
      },
    },
    description:
      'Please note that your contact details will only be used to get in touch with you regarding your appointment.',
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
};

interface StoryProps {
  prefix: ComponentProps<typeof Select>;
  tel: ComponentProps<typeof Input>;
  description: string;
}

export const Default = ({ prefix, tel, description }: StoryProps) => (
  <form style={{ width: 375 }}>
    <PhoneWrapper>
      <PhoneContainer>
        <Select
          {...prefix}
          css={{ maxWidth: 100, flex: '1 0 30%', paddingBottom: 0 }}
        />
        <Input {...tel} css={{ flex: '1 1 60%', paddingBottom: 0 }} />
      </PhoneContainer>
      {description && <InputMention>{description}</InputMention>}
    </PhoneWrapper>
  </form>
);
