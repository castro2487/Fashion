'use client';
import React from 'react';
import { StyledContainer } from './FramedText.styles';
import { FramedTextProps } from './FramedText.types';
import { Text } from '@atoms/Text/Text';
import { FramedContent } from '@atoms/FramedContent/FramedContent';

export const FramedText = ({ title, subtitle }: FramedTextProps) => (
  <StyledContainer>
    <FramedContent spacing="4xl">
      <Text type="h3">{title}</Text>
      <Text css={{ color: '$darkGrey' }}>{subtitle}</Text>
    </FramedContent>
  </StyledContainer>
);
