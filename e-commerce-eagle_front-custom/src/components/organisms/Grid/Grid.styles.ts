import { styled } from '@stitches-definitions';
import { Banner } from '@components/molecules/Banner';

export const StyledContainer = styled('section', {
  height: '100vh',
  display: 'grid',
  padding: '$l',
  gridTemplateRows: 'auto 1fr',
});

export const CustomTile = styled(Banner, {
  '> div:first-of-type': {
    height: 'initial',
    paddingTop: 0,
  },
});

export const GridContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gridAutoFlow: 'dense',

  variants: {
    layout: {
      stackedMobile: {
        [`& ${CustomTile}`]: {
          gridColumn: '1 / -1',
        },
      },
      threeItemsMobile: {
        [`& ${CustomTile}:first-of-type`]: {
          gridColumn: '1 / -1',
          gridRow: 'span 2',
        },
      },
      stackedTablet: {
        [`& ${CustomTile}`]: {
          gridColumn: '1 / -1',
        },
      },
      threeItemsTablet: {
        [`& ${CustomTile}:first-of-type`]: {
          gridColumn: '1 / -1',
          gridRow: 'span 2',
        },
      },
      threeItemsDesktop: {
        [`& ${CustomTile}:first-of-type`]: {
          gridColumn: 'span 1',
          gridRow: 'span 2',
        },
      },
      sidedDesktop: {
        [`& ${CustomTile}`]: {
          gridColumn: 'span 1',
        },
      },
    },
  },
});
