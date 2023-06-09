import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Text } from '@atoms/Text';
import { Blockquote } from '@atoms/Blockquote';

export default {
  title: 'Atoms/Blockquote',
  component: Blockquote,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Blockquote>;

const Template: ComponentStory<typeof Blockquote> = (args) => (
  <div style={{ width: 450 }}>
    <Blockquote {...args}>
      <Text type="h2" as="p">
        This work is born as a result of a solo development
      </Text>
      <Text>
        making a series of small models built as three-dimensional collages
        based on glued paper, magazine clippings, epoxy resin and fiberglass. It
        began in the midst of the pandemic, and perhaps for this reason it is
        about absent faces and broken memories. The work takes a long time to
        execute, placing successive material layers where each one of them
        provides new information, gives more life. It is my first
        three-dimensional pictorial work so it is maybe the beginning of a new
        stage. The materials interest me as a field of research and not as
        formal results. This exercise, especially thanks to the intensive use of
        colour as a three-dimensional material, opens new doors, new research.
      </Text>
    </Blockquote>
  </div>
);

export const VerticalQuotes = Template.bind({});
VerticalQuotes.args = {
  quotesPlacement: 'vertical',
};

export const HorizontalQuotes = Template.bind({});
HorizontalQuotes.args = {
  quotesPlacement: 'horizontal',
};

export const Responsive = Template.bind({});
Responsive.args = {
  quotesPlacement: {
    '@bp2': 'horizontal',
    '@bp3': 'horizontal',
  },
};
