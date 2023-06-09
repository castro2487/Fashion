import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { styled } from '@stitches-definitions';

import { Text } from '@atoms/Text';

export default {
  title: 'Atoms/Text',
  component: Text,
  parameters: {
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Text>;

const Grid = styled('div', {
  display: 'grid',
  gridTemplateColumns: 'auto 1fr',
  gap: '$10xl',
});

const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xl',
});

export const FontsPreview: ComponentStory<typeof Text> = () => (
  <Grid>
    <Text>Header</Text>
    <StyledContainer>
      <Text type="h1">Desktop H1 Font</Text>
      <Text type="h2">Desktop H2 Font</Text>
      <Text type="h3">Desktop H3 Font</Text>
      <Text type="h4">H4 Font</Text>
    </StyledContainer>
    <Text>Body</Text>
    <StyledContainer>
      <Text>Body Font</Text>
    </StyledContainer>
    <Text>Label</Text>
    <StyledContainer>
      <Text type="labelLarge">Desktop Label Large Font</Text>
      <Text type="labelMedium">Desktop Label Medium Font</Text>
      <Text type="labelSmall">Desktop Label Small Font</Text>
    </StyledContainer>
    <Text>Button</Text>
    <StyledContainer>
      <Text type="button">Button Font</Text>
    </StyledContainer>
  </Grid>
);
