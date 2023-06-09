import { styled } from '@stitches-definitions';

export const Figure = styled('figure', {
  position: 'relative',

  variants: {
    padding: {
      m: {
        padding: '0 $m',
      },
      l: {
        padding: '0 $l',
      },
      xl: {
        padding: '0 $2xl',
      },
    },
  },
});

export const Figcaption = styled('figcaption', {
  marginTop: '$m',

  variants: {
    textAlign: {
      left: {
        textAlign: 'left',
      },
      center: {
        textAlign: 'center',
      },
    },
    maxWidth: {
      true: {
        maxWidth: 340,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
      false: {
        maxWidth: 'none',
      },
    },
  },

  defaultVariants: {
    textAlign: 'center',
    maxWidth: true,
  },
});
