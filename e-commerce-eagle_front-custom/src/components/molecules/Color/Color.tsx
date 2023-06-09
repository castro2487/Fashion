'use client';
import React from 'react';

import { Text } from '@atoms/Text/Text';

import { ColorBlock, ColorContainer } from './Color.styles';

import { ColorProps } from './Color.types';

export const Color = ({ color, label, css }: ColorProps) => (
  <ColorContainer css={css}>
    <ColorBlock
      css={{
        background: color,
        border: `1px solid ${
          color === '#fff' || color === '#ffffff' ? '$darkGrey' : 'transparent'
        }`,
      }}
    />
    {label && (
      <Text type="labelSmall" css={{ color: '$darkGrey' }}>
        {label}
      </Text>
    )}
  </ColorContainer>
);
