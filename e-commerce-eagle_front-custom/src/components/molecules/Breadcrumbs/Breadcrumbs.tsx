'use client';
import React from 'react';

import { BreadcrumbsProps } from '@amq';
import { Link } from '@atoms/Link';
import { Text } from '@atoms/Text';
import { StyledContainer } from './Breadcrumbs.styles';

export const Breadcrumbs = ({
  items,
  current,
  css,
  className,
}: BreadcrumbsProps) => (
  <StyledContainer css={css} className={className}>
    {items.map(({ id, label, linkUrl }) => (
      <React.Fragment key={id}>
        <Link
          key={label}
          linkUrl={linkUrl}
          linkId={''}
          linkDisplayType={''}
          linkColor={''}
          underline={false}
        >
          <Text type="labelMedium">{label}</Text>
        </Link>
        /
      </React.Fragment>
    ))}
    <Text type="labelMedium" css={{ color: '$darkGrey' }}>
      {current}
    </Text>
  </StyledContainer>
);
