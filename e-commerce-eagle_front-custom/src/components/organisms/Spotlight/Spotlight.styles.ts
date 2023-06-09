import { styled } from '@stitches-definitions';
import { Link } from '@atoms/Link';
import { Button } from '@atoms/Button';
import { SwiperSlide } from 'swiper/react';

export const StyledContainer = styled('div', {
  width: '100%',
  position: 'relative',
  padding: '0 $2xl',
});

export const ItemContainer = styled(SwiperSlide, {
  height: 'auto !important',
  display: 'flex',
  justifyContent: 'center',
});

export const Item = styled(Link, {
  height: '100%',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$xs',
  textAlign: 'center',
  padding: '$xxs',

  '&:focus-visible': {
    outline: 'none',
    background: '$lightGrey',
  },
});

export const ImageContainer = styled('div', {
  display: 'flex',
  position: 'relative',
  height: '$space$7xl',
  width: '100%',
  paddingTop: '125%',
});

export const NavigationButton = styled(Button, {
  position: 'absolute',
  zIndex: 10,
  top: 'calc(50% - $m)',
  cursor: 'pointer',
  background: '$white',
  border: 'none',
  transition: 'opacity 0.3s ease-in-out',

  '&.prev': {
    left: 0,
  },
  '&.next': {
    right: 0,
  },

  '&.disabled': {
    opacity: 0,
    pointerEvents: 'none',
  },
});
