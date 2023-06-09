'use client';
import React from 'react';

import { Down } from '@icons';
import { Text } from '@atoms/Text/Text';

import {
  StyledItem,
  StyledCollapse,
  PaddedContainer,
  StyledHeader,
  StyledTrigger,
  StyledContent,
  StyledDivider,
} from './Accordion.styles';

import { AccordionItemProps } from './AccordionItems.types';

export const AccordionItem = ({
  children,
  id,
  title,
  type = 'labelMedium',
  divider = true,
  ...props
}: AccordionItemProps) => (
  <StyledItem {...props} value={id}>
    <StyledHeader>
      <StyledTrigger>
        <Text type={type}>{title}</Text>{' '}
        <StyledCollapse aria-hidden>
          <Down />
        </StyledCollapse>
      </StyledTrigger>
    </StyledHeader>
    <StyledContent>
      <PaddedContainer>{children}</PaddedContainer>
    </StyledContent>
    {divider && <StyledDivider />}
  </StyledItem>
);
