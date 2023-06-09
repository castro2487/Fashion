import { styled } from '@stitches-definitions';

import { ActionSheetTrigger } from '@molecules/ActionSheet';

export const Columns = styled('div', {
  display: 'flex',
  gap: '$m',
  justifyContent: 'space-between',
  position: 'relative',

  '&:after': {
    content: '',
    position: 'absolute',
    left: 0,
    bottom: 0,
    width: '100%',
    height: 1,
    background: '$blackGrey',
  },

  '& > *': {
    flex: '1',
  },
});

const styledContainerStyles: TCommonObject = {
  variants: {
    padding: {
      tablet: {
        padding: '$xl $2xl',

        [`& ${Columns}`]: {
          paddingBottom: '$4xl',
        },
      },
      desktop: {
        padding: '$xl',

        [`& ${Columns}`]: {
          paddingBottom: '$xl',
        },
      },
    },

    theme: {
      light: {
        background: '$white',
        color: '$dark',
      },
      dark: {
        background: '$black',
        color: '$white',
      },
    },
  },

  defaultVariants: {
    padding: 'tablet',
    theme: 'dark',
  },
};

// TODO: Find a solution to avoid using any for this component
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const StyledContainer = styled('footer', styledContainerStyles) as any;

export const Links = styled('ul', {
  all: 'unset',
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',
  gap: '$m',
  paddingTop: '$m',
});

export const Legal = styled('div', {
  display: 'flex',
  gap: '$l',
  paddingTop: '$xl',

  variants: {
    copyright: {
      short: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      long: {
        flexDirection: 'column',
        alignItems: 'start',
      },
    },
  },
});

export const Logo = styled('div', {
  width: 210,
});

export const NewsletterTrigger = styled(ActionSheetTrigger, {
  outline: 'none',
  border: 'none',
  background: 'none',
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  textAlign: 'left',
  gap: '$xs',
  cursor: 'pointer',
  color: 'currentColor',
  transition: 'color 300ms ease-in-out',

  '&:hover, &:focus-visible': {
    color: '$mediumGrey',
  },
});

export const ActionsContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$l',
});

export const CountryLanguageContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xs',
});
