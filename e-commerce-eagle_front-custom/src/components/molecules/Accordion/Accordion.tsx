'use client';
import React from 'react';

import { StyledContainer } from './Accordion.styles';
import { TAccordionProps } from '@amq';

export const Accordion = ({ children, ...props }: TAccordionProps) => (
  <StyledContainer
    {...props}
    {...(props.type === 'single' ? { collapsible: true } : {})}
  >
    {children}
  </StyledContainer>
);
