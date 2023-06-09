import { styled } from '@stitches-definitions';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export const TabsList = styled(TabsPrimitive.List, {
  display: 'flex',

  variants: {
    variant: {
      primary: {
        gap: 0,
      },
      secondary: {
        gap: '$m',
      },
    },
    alignment: {
      left: {
        justifyContent: 'start',
      },
      center: {
        justifyContent: 'center',
      },
    },
  },

  defaultVariants: {
    alignment: 'left',
    variant: 'primary',
  },
});
