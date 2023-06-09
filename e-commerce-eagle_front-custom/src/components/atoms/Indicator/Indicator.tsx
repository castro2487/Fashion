'use client';
import { styled, keyframes } from '@stitches-definitions';

const check = keyframes({
  from: { opacity: 0, transform: 'scale(0.5)' },
  to: { opacity: 1, transform: 'scale(1)' },
});

const uncheck = keyframes({
  from: { opacity: 1, transform: 'scale(1)' },
  to: { opacity: 0, transform: 'scale(0.5)' },
});

export const Indicator = styled('div', {
  width: '60%',
  height: '60%',
  background: 'currentColor',

  '&[data-state="checked"]': { animation: `${check} 150ms ease-out` },
  '&[data-state="unchecked"]': { animation: `${uncheck} 150ms ease-out` },
});
