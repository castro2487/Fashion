import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { IndicatorContainer, Indicator } from '@atoms/Indicator';

export default {
  title: 'Atoms/Indicator',
  component: IndicatorContainer,
  args: {
    inputType: 'radio',
  },
  argTypes: {
    inputType: {
      options: ['radio', 'checkbox'],
      control: { type: 'radio' },
    },
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof IndicatorContainer>;

export const Default: ComponentStory<typeof IndicatorContainer> = (
  args: any
) => (
  <IndicatorContainer {...args}>
    <Indicator />
  </IndicatorContainer>
);
