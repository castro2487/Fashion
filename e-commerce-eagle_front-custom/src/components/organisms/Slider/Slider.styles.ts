import { styled } from '@stitches-definitions';
import { Swiper, SwiperSlide } from 'swiper/react';

export const StyledContainer = styled(Swiper, {
  width: '100%',
  height: '100%',
});

export const Slide = styled(SwiperSlide, {});

export const ImageContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  width: '100%',
  height: '100%',
});

export const ActiveSlide = styled('span', {
  position: 'absolute',
  zIndex: 10,
  right: '$l',
  bottom: '$l',
  padding: '$xxs $m',
  cursor: 'default',
  background: '$white',
  transition: 'background 0.2s ease-in-out, color 0.2s ease-in-out',

  variants: {
    dark: {
      true: { background: '$black', color: '$white' },
    },
  },
});

export const NavigationButton = styled('button', {
  position: 'absolute',
  zIndex: 10,
  top: 'calc(50% - $m)',
  cursor: 'pointer',
  backgroundColor: '$white',
  border: 'none',
  padding: '$xxs',
  transition:
    'opacity 0.3s ease-in-out, color 0.3s ease-in-out, backgroundColor 0.3s ease-in-out',

  '&.prev': {
    left: '$l',
  },
  '&.next': {
    right: '$l',
  },

  '&.disabled': {
    opacity: 0,
    pointerEvents: 'none',
  },

  '&:hover': {
    color: '$blackHover',
  },

  '&:focus-visible': {
    outline: 'none',
    backgroundColor: '$black',
    color: '$white',
  },

  variants: {
    dark: {
      true: {
        backgroundColor: '$black',
        color: '$white',

        '&:hover': {
          color: '$mediumGrey',
        },

        '&:focus-visible': {
          backgroundColor: '$white',
          color: '$black',
        },
      },
    },
  },
});
