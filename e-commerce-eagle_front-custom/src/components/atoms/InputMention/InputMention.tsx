'use client';
import React from 'react';
import { Mention } from './InputMention.styles';
import { StichesCSS, InputMentionTypes } from '@amq';

export const InputMention = ({ children, css }: InputMentionTypes) => (
  <Mention as="p" type="labelMedium" css={css as StichesCSS}>
    {children}
  </Mention>
);
