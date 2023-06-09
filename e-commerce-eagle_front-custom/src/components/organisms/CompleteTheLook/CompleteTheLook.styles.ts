import { styled } from '@stitches-definitions';

import { Button } from '@atoms/Button';

export const StyledContainer = styled('section', {
  display: 'flex',
  flexDirection: 'column',

  variants: {
    gap: {
      m: {
        rowGap: '$m',
      },
      l: {
        rowGap: '$l',
      },
      xl: {
        rowGap: '$xl',
      },
    },
  },
});

export const Header = styled('div', {
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
});

export const Content = styled('div', {
  variants: {
    variant: {
      split: {
        display: 'grid',
        gridTemplateColumns: '0.46fr 1fr',
        marginLeft: '$l',

        '.swiper': {
          width: '100%',
          alignSelf: 'end',
        },

        '.swiper-wrapper': {
          display: 'flex',
          columnGap: 0,
        },
      },
      grid: {
        display: 'block',
        marginLeft: 0,

        '.swiper-wrapper': {
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          columnGap: 1,
          rowGap: '$l',
        },
      },
    },
  },

  defaultVariants: {
    variant: 'grid',
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

export const ImageContainer = styled('div', {
  position: 'relative',
  height: 0,
  paddingTop: '125%',
});
