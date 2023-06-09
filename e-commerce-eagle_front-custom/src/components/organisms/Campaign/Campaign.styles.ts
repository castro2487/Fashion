import { Swiper } from 'swiper/react';
import { styled } from '@stitches-definitions';

export const StyledContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
});

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',

  variants: {
    height: {
      potrait: {
        height: 0,
        paddingTop: '125%',
      },
      fixed: {
        height: 700,
        paddingTop: 0,
      },
    },
  },
});

export const Items = styled(Swiper, {
  variants: {
    margin: {
      mobile: {
        width: '100%',
        marginTop: '$xxs',
      },
      desktop: {
        width: 564,
        marginTop: 'calc(-1 * $xl)',
      },
    },
  },
});
