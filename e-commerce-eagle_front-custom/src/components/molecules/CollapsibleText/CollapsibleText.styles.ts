import { styled } from '@stitches-definitions';
import { motion } from 'framer-motion';
import { StyledLink } from '@atoms/Link';

export const StyledContainer = styled('div', {
  display: 'grid',
});

export const Clamped = styled('div', {
  display: '-webkit-box',
  '-webkit-line-clamp': '$$clamp',
  '-webkit-box-orient': 'vertical',
  overflow: 'hidden',
});

export const ButtonContainer = styled(motion.div, {
  marginTop: '$xxs',
});

export const Button = styled(StyledLink, {
  border: 'none',
  background: 'transparent',
  padding: 0,
  cursor: 'pointer',
});
