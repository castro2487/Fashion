import { Swiper } from 'swiper/react';

import { Card } from '@molecules/Card/Card';

import { styled } from '@stitches-definitions';
import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/lazy';

export const Colors = styled('div', {
  position: 'absolute',
  left: 0,
  display: 'inline-flex',
  alignItems: 'center',
  gap: '$xxs',
  opacity: 0,
  transition: 'opacity 0.2s ease-in-out',
});

export const ColorsContainer = styled('div', {
  position: 'relative',
  display: 'flex',
  alignItems: 'center',

  variants: {
    isHoverable: {
      true: {
        '& > span': {
          transition: 'opacity 0.2s ease-in-out',
        },
      },
      false: {
        '& > span': {
          opacity: 1,
        },
        [`${Colors}`]: {
          opacity: 0,
        },
      },
    },
  },
});

export const StyledContainer = styled(Card, {
  height: '100%',
  width: '100%',

  variants: {
    isHoverable: {
      true: {
        '&:hover': {
          [`${ColorsContainer}`]: {
            '& > span': {
              opacity: 0,
            },
          },
          [`${Colors}`]: {
            opacity: 1,
          },
        },
      },
    },
  },
});

export const AssetContainer = styled('div', {
  width: '100%',
  height: '100%',
});

export const Content = styled('div', {
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '$xxs',

  variants: {
    type: {
      mobile: {
        padding: '$xs $m $m',
      },
      tablet: {
        padding: '$m $2xl $m',
      },
      desktop: {
        padding: '$m',
      },
    },
  },
});

export const AssetRatio = styled('div', {
  width: '100%',
  display: 'flex',
  position: 'relative',
  paddingTop: '125%',
  height: 0,
});

export const Slider = styled(Swiper, {
  width: '100%',
  height: '100%',
});

export const Video = styled('video', {
  width: '100%',
  height: '100%',
  position: 'absolute',
  top: 0,
  left: 0,
  objectFit: 'cover',
});
