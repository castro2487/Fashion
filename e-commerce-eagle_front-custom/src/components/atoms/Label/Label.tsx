'use client';
import React from 'react';
import { Text } from '@atoms/Text';
import { LabelProps } from '@amq';
import { StyledLabel } from './Label.styles';

export const Label = ({
  children,
  type = 'labelSmall',
  ...props
}: LabelProps) => {
  return (
    <StyledLabel asChild {...props}>
      <Text as="label" type={type}>
        {children}
      </Text>
    </StyledLabel>
  );
};
