import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Accordion } from '@molecules/Accordion';
import { AccordionItem } from '@molecules/Accordion';
import { Text } from '@atoms/Text';
import { TextVariants } from '@amq';

import accordionMock from '@molecules/Accordion/__mock__/accordionMock';

const items = accordionMock.items.map((item) => {
  const headerType = item.type as TextVariants['type'];
  const type: TextVariants['type'] = headerType;

  return {
    ...item,
    type,
    children: (
      <Text type="labelSmall">
        Off-the-shoulder midi dress in pop yellow polyfaille featuring oversized
        sleeves, corset detailing around the waistline and a pleated skirt.
        Finished with a back zip fastening.
      </Text>
    ),
  };
});

export default {
  title: 'Molecules/Accordion',
  component: Accordion,
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Accordion>;

export const Default: ComponentStory<typeof Accordion> = (args) => {
  return (
    <div style={{ width: 375 }}>
      <Accordion {...args}>
        {items.map(({ id, children, ...item }) => (
          <AccordionItem id={id} key={id} {...item}>
            {children}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
Default.args = {
  collapsible: true,
};

const darkItems = items.map((item) => {
  const theme = 'dark';
  const alignment = 'center';
  return {
    ...item,
    theme,
    alignment,
  };
});

export const Dark: ComponentStory<typeof Accordion> = (args) => {
  return (
    <div style={{ width: 375 }}>
      <Accordion {...args}>
        {darkItems.map(({ id, children, ...item }) => (
          <AccordionItem id={id} key={id} {...item}>
            {children}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};
Dark.args = {
  collapsible: true,
};
Dark.parameters = {
  backgrounds: {
    default: 'black',
    values: [{ name: 'black', value: 'black' }],
  },
};
