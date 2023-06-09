import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Container } from '@atoms/Container';

export default {
  title: 'Atoms/Container',
  component: Container,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Container>;

export const Default: ComponentStory<typeof Container> = () => <Container />;
