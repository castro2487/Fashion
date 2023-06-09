'use client';
import { styled } from '@stitches-definitions';
import { Indicator } from './Indicator';

const styles: TCommonObject = {
  width: 12,
  height: 12,
  background: '$white',
  border: '1px solid currentColor',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  outline: '0px solid transparent',
  transition: 'outline 300ms ease-in-out',

  variants: {
    inputType: {
      checkbox: {
        borderRadius: 0,
      },
      radio: {
        borderRadius: '50%',

        [`& ${Indicator}`]: {
          borderRadius: '50%',
        },
      },
    },
  },
};

export const IndicatorContainer = styled('div', styles);
