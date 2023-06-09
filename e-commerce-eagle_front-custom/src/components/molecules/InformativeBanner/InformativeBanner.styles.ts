import { motion } from 'framer-motion';
import { styled } from '@stitches-definitions';

export const StyledContainer = styled(motion.div, {
  width: '100%',
  background: 'rgba(255,255,255, 0.3)',
  backdropFilter: 'blur(72px)',
  color: '$black',
  textAlign: 'center',
  overflow: 'hidden',

  '& .swiper': {
    margin: '0 $2xl',
  },

  '& .swiper-wrapper': {
    alignItems: 'center',
  },

  '& .swiper-slide': {
    padding: '$l 0',
  },
});

export const CloseButton = styled('button', {
  all: 'unset',
  margin: 0,
  padding: 0,
  background: 'transparent',
  color: '$black',
  borderRadius: '50%',
  cursor: 'pointer',
  transition: 'background 300ms ease-in-out',
  position: 'absolute',
  top: '50%',
  right: '$m',
  transform: 'translateY(-50%)',

  '&:hover,&:focus-visible': {
    background: '$mediumGrey',
  },
});
