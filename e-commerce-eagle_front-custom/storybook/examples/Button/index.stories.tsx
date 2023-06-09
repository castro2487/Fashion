import React from 'react';

import { styled } from '@stitches-definitions';

import { Button } from '@atoms/Button';

const Flex = styled('div', {
  display: 'flex',
  gap: '$m',
  flexWrap: 'wrap',
});

export default {
  title: 'Examples/Button',
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
};

export const Default = () => (
  <Flex>
    <Button variant="secondary" css={{ flex: '1 1 max-content' }}>
      secondary
    </Button>
    <Button css={{ flex: '1 1 max-content' }}>primary</Button>
  </Flex>
);
