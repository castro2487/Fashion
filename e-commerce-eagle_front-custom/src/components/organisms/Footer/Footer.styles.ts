/* eslint-disable @typescript-eslint/no-explicit-any */
import { styled } from '@stitches-definitions';

import { Text } from '@atoms/Text/Text';

export const ServicesContainer = styled('section', {
  background: '$white',

  variants: {
    padding: {
      mobile: {
        padding: '0 $m',
        paddingTop: '$3xl',
      },
      tablet: {
        padding: '0 $2xl',
        paddingTop: '$3xl',
      },
      desktop: {
        padding: '0 $l',
        paddingTop: '$6xl',
      },
    },
  },
});

export const ServicesTitle = styled(Text, {
  textTransform: 'uppercase',

  variants: {
    textAlign: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
        paddingBottom: '$xs',
      },
    },
  },

  defaultVariants: {
    textAlign: 'center',
  },
});

export const Services = styled('ul', {
  all: 'unset',
  display: 'flex',

  variants: {
    type: {
      stacked: {
        flexDirection: 'column',
      },
      gridTablet: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gridColumnGap: '$m',
        padding: '$l 0',
      },
      gridDesktop: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
        gridColumnGap: '$l',
        paddingBottom: '$2xl',
        paddingTop: '$m',
      },
    },
  },
});

export const ServiceWrapper = styled('div', {
  display: 'grid',
});

const serviceStyles: TCommonObject = {
  listStyle: 'none',

  variants: {
    direction: {
      horizontal: {
        position: 'relative',

        '&:not(:last-of-type):after': {
          content: '',
          position: 'absolute',
          width: '100%',
          height: 1,
          left: 0,
          bottom: 0,
          background: '$mediumGrey',
        },

        [`& ${ServiceWrapper}`]: {
          gridTemplateColumns: '1fr 1fr',
          gridColumnGap: '$m',
          alignItems: 'center',
          textAlign: 'center',
          padding: '$m 0',
        },
      },
      vertical: {
        '&:not(:last-of-type):after': {
          all: 'unset',
        },

        [`& ${ServiceWrapper}`]: {
          gridTemplateColumns: '1fr',
          textAlign: 'left',
          gridRowGap: '$m',
          padding: 0,
        },
      },
    },
  },
};

// TODO: Find a solution to avoid using any for this component
export const Service = styled('li', serviceStyles) as any;

export const ImageContainer = styled('div', {
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: '80%',
});
