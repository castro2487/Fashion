import { styled } from '@stitches-definitions';

export const Header = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  maxWidth: 280,
  margin: '0 auto',

  variants: {
    gap: {
      xxs: {
        rowGap: '$xxs',
      },
      xs: {
        rowGap: '$xs',
      },
    },
    margin: {
      l: {
        marginBottom: '$l',
      },
      xl: {
        marginBottom: '$xl',
      },
    },
  },

  defaultVariants: {
    gap: 'xxs',
  },
});
