/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@stitches-definitions';

import { Button } from '@atoms/Button';

export const StyledContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$l',

  variants: {
    noCarousel: {
      true: {
        '.swiper-wrapper': {
          flexDirection: 'column',
          rowGap: 1,
        },
      },
      false: {
        '.swiper-wrapper': {
          flexDirection: 'initial',
          rowGap: 0,
        },
      },
    },

    oneCard: {
      true: {
        '.card-image-wrapper': {
          padding: '0 $$padding',
          background: '$lightGrey',
        },
      },
    },
  },
});

export const Actions = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  rowGap: '$xs',
});

const headerStyles: TCommonObject = {
  display: 'flex',

  variants: {
    dir: {
      vertical: {
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
      },
      horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'start',
        textAlign: 'left',

        [`& ${Actions}`]: {
          alignItems: 'end',
        },
      },
    },
    gap: {
      m: {
        rowGap: '$m',
      },
      l: {
        rowGap: '$l',
      },
    },
    gutter: {
      m: {
        padding: '0 $m',
      },
      l: {
        padding: '0 $l',
      },
      '2xl': {
        padding: '0 $2xl',
      },
    },
  },

  defaultVariants: {
    dir: 'vertical',
    gap: 'm',
  },
};

// TODO: Find a solution to avoid using any for this component
export const Header = styled('div', headerStyles) as any;

export const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    gap: {
      xxs: {
        rowGap: '$xxs',
      },
      xs: {
        rowGap: '$xs',
      },
    },
  },

  defaultVariants: {
    gap: 'xxs',
  },
});

export const Controls = styled('div', {
  variants: {
    visible: {
      true: {
        display: 'flex',
      },
      false: {
        display: 'none',
      },
    },
  },

  defaultVariants: {
    visible: 'false',
  },
});

export const NavigationButton = styled(Button, {
  '&:disabled': {
    opacity: 0,
    visibility: 'hidden',
    pointerEvents: 'none',
  },
});

export const EmptyContainer = styled('div', {
  variants: {
    gutter: {
      m: {
        padding: '0 $m',
      },
      l: {
        padding: '0 $l',
      },
      '2xl': {
        padding: '0 $2xl',
      },
    },
  },
});
