import { styled } from '@stitches-definitions';

import { ActionSheetTrigger } from '@molecules/ActionSheet';

export const StyledContainer = styled('footer', {
  background: '$black',
  color: '$white',
  padding: '$m',

  variants: {
    theme: {
      light: {
        background: '$white',
        color: '$black',
      },
      dark: {
        background: '$black',
        color: '$white',
      },
    },
  },
}) as any;

export const Links = styled('ul', {
  all: 'unset',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '$m',
  paddingTop: '$s',
});

export const Legal = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',

  variants: {
    copyright: {
      short: {
        paddingTop: '$7xl',
        gap: '$10xl',
      },
      long: {
        paddingTop: '$3xl',
        gap: '$3xl',
      },
    },
  },
});

export const Logo = styled('div', {
  width: 124,
});

export const NewsletterTrigger = styled(ActionSheetTrigger, {
  outline: 'none',
  border: 'none',
  background: 'none',
  padding: '$m 0',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '$xs',
  cursor: 'pointer',
  color: 'currentColor',
  transition: 'color 300ms ease-in-out',
  position: 'relative',

  '&:after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 1,
    backgroundColor: '$blackGrey',
  },

  '&:hover, &:focus-visible': {
    color: '$mediumGrey',
  },
});

export const CountryLanguageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$xs',
  padding: '$m 0',
  position: 'relative',

  '&:after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 1,
    backgroundColor: '$blackGrey',
  },
});
