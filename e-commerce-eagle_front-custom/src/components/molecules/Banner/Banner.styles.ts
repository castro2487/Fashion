/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@stitches-definitions';
import { Text } from '@atoms/Text/Text';

export const ContentContainer = styled('div', {
  position: 'relative',
  gridColumn: 1,
  gridRow: 1,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  '&[data-blend="true"]': {
    zIndex: 1,
  },

  '&[data-blend="false"]': {
    zIndex: 2,
  },

  '[aria-hidden="true"]': {
    opacity: 0,
  },

  variants: {
    gap: {
      xs: {
        rowGap: '$xs',
      },
      m: {
        rowGap: '$m',
      },
    },
    padding: {
      l: {
        padding: '$l',
      },
      '2xl': {
        padding: '$2xl',
      },
    },
  },

  defaultVariants: {
    gap: 'xs',
  },
});

export const Title = styled(Text, {
  color: '$white',
  textTransform: 'uppercase',
});

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  gridColumn: 1,
  gridRow: 1,
  placeSelf: 'stretch',
});

const styledContainerStyles: TCommonObject = {
  display: 'grid',
  justifyItems: 'center',
  textAlign: 'center',

  variants: {
    variant: {
      card: {
        [`& ${ImageContainer}`]: {
          height: 0,
          paddingTop: 'calc(100% * 16/9)',
        },
      },
      banner: {
        height: '100vh',
        '@supports (height: 100svh)': {
          height: '100svh',
        },

        [`& ${ImageContainer}`]: {
          height: '100%',
        },
      },
    },
    padding: {
      0: {
        padding: 0,
      },
      1: {
        padding: '$m',
      },
      2: {
        padding: '$s $l',
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      bottom: {
        alignItems: 'end',
      },
    },
    type: {
      difference: {
        [`& ${ContentContainer}[data-blend="true"]`]: {
          mixBlendMode: 'difference',
        },
      },
      dark: {
        [`& ${Title}`]: {
          color: '$white',
        },
      },
      light: {
        [`& ${Title}`]: {
          color: '$black',
        },
      },
    },
  },
};

// TODO: Find a solution to avoid using any for this component
export const StyledContainer = styled('div', styledContainerStyles) as any;

export const ButtonsContainer = styled('div', {
  display: 'flex',
  gap: '$xs',

  variants: {
    dir: {
      horizontal: {
        flexDirection: 'row',
      },
      vertical: {
        flexDirection: 'column',
      },
    },
  },

  defaultVariants: {
    dir: 'vertical',
  },
});
