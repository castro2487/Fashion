import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Grid } from '@organisms/Grid';
import gridMock from '@organisms/Grid/__mock__/gridMock';

export default {
  title: 'Organisms/Grid',
  component: Grid,
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => <Grid {...args} />;

export const TwoTiles = Template.bind({});
TwoTiles.args = {
  tiles: [
    { ...gridMock, id: '1' },
    { ...gridMock, id: '2' },
  ],
};

export const ThreeTiles = Template.bind({});
ThreeTiles.args = {
  tiles: [
    { ...gridMock, id: '1' },
    { ...gridMock, id: '2' },
    { ...gridMock, id: '3' },
  ],
};

export const FourTiles = Template.bind({});
FourTiles.args = {
  tiles: [
    { ...gridMock, id: '1' },
    { ...gridMock, id: '2' },
    { ...gridMock, id: '3' },
    { ...gridMock, id: '4' },
  ],
};

export const WithHeading = Template.bind({});
WithHeading.args = {
  ...ThreeTiles.args,
  heading: {
    label: 'World of McQueen',
    title: 'Take a look behind the scenes',
  },
};
