'use client';
import React from 'react';

import { Text } from '@atoms/Text/Text';
import { InputMention } from '@atoms/InputMention';
import { Fieldset, TitleContainer } from './FieldGroup.styles';
import { FieldGroupProps } from './FieldGroup.types';

export const FieldGroup = ({ title, mention, children }: FieldGroupProps) => (
  <Fieldset>
    <TitleContainer>
      <Text as="legend" type="h4">
        {title}
      </Text>
      {mention && (
        <InputMention
          css={{
            padding: 0,
            flexShrink: 0,
            lineHeight: 'calc($fontSizes$6 * $lineHeights$2)',
          }}
        >
          {mention}
        </InputMention>
      )}
    </TitleContainer>
    {children}
  </Fieldset>
);
