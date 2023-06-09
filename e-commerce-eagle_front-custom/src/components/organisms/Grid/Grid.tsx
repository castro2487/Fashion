'use client';
import React from 'react';

import { Heading } from '@molecules/Heading';

import { StyledContainer, GridContainer, CustomTile } from './Grid.styles';
import { GridProps, GridContainerVariants } from '@amq';

const getLayout = (length: number): GridContainerVariants['layout'] => {
  switch (length) {
    case 2:
      return {
        '@initial': 'stackedMobile',
        '@bp1': 'stackedTablet',
        '@bp2': 'sidedDesktop',
        '@bp3': 'sidedDesktop',
      };
    case 3:
      return {
        '@initial': 'threeItemsMobile',
        '@bp1': 'threeItemsTablet',
        '@bp2': 'threeItemsDesktop',
        '@bp3': 'threeItemsDesktop',
      };
    case 4:
      return {
        '@initial': 'stackedMobile',
        '@bp1': 'sidedDesktop',
        '@bp2': 'sidedDesktop',
        '@bp3': 'sidedDesktop',
      };
    default:
      return {};
  }
};

export const Grid = ({ tiles, heading }: GridProps) => {
  const layout = tiles && getLayout(tiles.length);

  return (
    <StyledContainer>
      {heading && <Heading {...heading} css={{ maxWidth: 350 }} />}
      {tiles && (
        <GridContainer
          layout={layout}
          css={{ gridRow: heading ? 'span 1' : '1/-1' }}
        >
          {tiles.map((tileData, i) => (
            <CustomTile key={i} variant="card" align="bottom" {...tileData} />
          ))}
        </GridContainer>
      )}
    </StyledContainer>
  );
};
