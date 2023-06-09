import { styled, keyframes } from '@stitches-definitions';
import { Swiper } from 'swiper/react';

const progress = keyframes({
  from: { transform: 'scaleX(0%)' },
  to: { transform: 'scaleX(100%)' },
});

export const StyledContainer = styled('div', {
  width: '100%',
  height: '100vh',

  '.swiper-pagination': {
    position: 'absolute',
    zIndex: 10,
    bottom: 'auto',
    width: 'auto',
    display: 'flex',
    gap: '$m',

    '&.swiper-pagination-lock': {
      opacity: 0,
      visibility: 'hidden',
    },
  },

  '.swiper-pagination-bullet': {
    flex: 1,
    height: 2,
    background: '$$background',
    position: 'relative',
    transition: 'background 300ms ease-in-out',

    '&:after': {
      content: '',
      position: 'absolute',
      left: 0,
      width: '100%',
      height: '100%',
      background: '$$color',
      transformOrigin: 'left',
      transform: 'scaleX(0%)',
      transition: 'background 300ms ease-in-out',
    },

    '&.swiper-pagination-bullet-active:after': {
      animation: `${progress} $$duration linear forwards`,
    },
  },

  variants: {
    theme: {
      light: {
        $$color: '$colors$white',
        $$background: 'rgba(255,255,255, 0.5)',
      },
      dark: {
        $$color: '$colors$black',
        $$background: 'rgba(0,0,0, 0.5)',
      },
    },

    padding: {
      mobile: {
        '.swiper-pagination': {
          top: '$s',
          left: '$m',
          right: '$m',
        },
      },
      tablet: {
        '.swiper-pagination': {
          top: '$xl',
          left: '$2xl',
          right: '$2xl',
        },
      },
      desktop: {
        '.swiper-pagination': {
          top: '$xl',
          left: '$l',
          right: '$l',
        },
      },
    },
  },
});

export const Slider = styled(Swiper, {
  width: '100%',
  height: '100%',
});
