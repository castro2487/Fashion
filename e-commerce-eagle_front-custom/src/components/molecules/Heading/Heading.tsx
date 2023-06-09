'use client';
import React from 'react';

import { Text } from '@atoms/Text/Text';

import { Header } from './Heading.styles';
import { HeadingProps } from '@amq';

export const Heading = ({
  title,
  htmlHeadingTag,
  subtitle,
  highlightTag,
  ...props
}: HeadingProps) => {
  const titleTag = htmlHeadingTag || 'h2';

  return (
    <Header
      gap={{
        '@bp2': 'xs',
        '@bp3': 'xs',
      }}
      margin={{
        '@initial': 'l',
        '@bp1': 'xl',
        '@bp2': 'xl',
        '@bp3': 'xl',
      }}
      {...props}
    >
      {highlightTag ? (
        <Text type="labelLarge" css={{ color: '$darkGrey' }}>
          {highlightTag}
        </Text>
      ) : null}
      {title ? (
        <Text as={titleTag} type={titleTag}>
          {title}
        </Text>
      ) : null}
      {subtitle ? (
        <Text as="p" type="labelMedium">
          {subtitle}
        </Text>
      ) : null}
    </Header>
  );
};
