import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { theme } from '@stitches-definitions';

import { Button } from '@atoms/Button';

import { StoreCard } from '@organisms/StoreCard';

export default {
  title: 'Organisms/Store Card',
  component: StoreCard,
  args: {
    title: 'Flagship - Old Bond Street',
    phoneNumber: {
      linkUrl: 'tel:+442033185921',
      label: '+44 20 33 18 59 21',
    },
    openingHours: 'Open - Closes 18:30',
    description: (
      <>
        27 Old Bond Street
        <br />
        London W1S 4QE, Great Britain
        <br />
      </>
    ),
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof StoreCard>;

const Template: ComponentStory<typeof StoreCard> = (args) => (
  <div style={{ width: 375 }}>
    <StoreCard {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  disabled: false,
  active: false,
  children: (
    <div style={{ paddingTop: theme.space.m.value }}>
      <Button>request appointment</Button>
    </div>
  ),
};

const openingHours = {
  title: 'Open - Closes 18:30',
  items: [
    {
      id: '1',
      text: 'Monday: 11:00 - 18:00',
    },
    {
      id: '2',
      text: 'Tuesday: 11:00 - 18:00',
    },
    {
      id: '3',
      text: 'Wednesday: 11:00 - 18:00',
    },
    {
      id: '4',
      text: 'Thursday: 11:00 - 18:00',
    },
    {
      id: '5',
      text: 'Friday: 11:00 - 18:00',
    },
    {
      id: '6',
      text: 'Saturday: 11:00 - 18:00',
    },
    {
      id: '7',
      text: 'Sunday: 11:00 - 18:00',
    },
  ],
};

export const OtherContent = Default.bind({});
OtherContent.args = {
  ...Default.args,
  openingHours,
};

export const Disabled = Template.bind({});
Disabled.args = {
  disabled: true,
  children: (
    <div
      style={{
        display: 'flex',
        gap: theme.space.xxs.value,
        flexWrap: 'wrap',
        paddingTop: theme.space.m.value,
      }}
    >
      <Button variant="secondary" disabled css={{ flex: '1 1 max-content' }}>
        view store details
      </Button>
      <Button disabled css={{ flex: '1 1 max-content' }}>
        request appointment
      </Button>
    </div>
  ),
};
