import { styled } from '@stitches-definitions';
import * as Tabs from '@radix-ui/react-tabs';

export const StyledContainer = styled('div', {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  width: '100%',
  height: '100%',
  background: '$white',
});

export const ImageContainer = styled('div', {
  display: 'flex',
  position: 'relative',
});

export const Logo = styled('div', {
  position: 'absolute',
  zIndex: 1,
  top: '0',
  left: '$l',
  height: '$headerHeightTall',
  display: 'flex',
  alignItems: 'center',
  transition: 'color 300ms ease-in-out',

  svg: {
    width: 160,
  },

  variants: {
    light: {
      true: {
        color: '$white',
      },
    },
  },
});

export const Content = styled('div', {
  position: 'relative',
  display: 'flex',
  flexDirection: 'column',
  padding: '$l $xl',
});

export const CategoryContainer = styled(Tabs.Root, {
  display: 'grid',
  gridTemplateColumns: '1fr 2fr',

  button: {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    textAlign: 'left',
    color: '$darkGrey',
    transition: 'color 0.2s ease-in-out',

    '&:active, &:focus, &:hover': {
      color: '$black',
    },
  },
});

export const ButtonList = styled(Tabs.List, {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  paddingRight: '$s',
  gap: '$l',
});

export const NavigationButton = styled(Tabs.Trigger, {
  padding: 0,
  display: 'flex',
  alignItems: 'center',
  flexWrap: 'nowrap',

  variants: {
    active: {
      true: {
        span: {
          color: '$black',
        },
      },
    },
  },
});

export const SubcategoryContainer = styled(Tabs.Root, {
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
});

export const Links = styled('div', {
  display: 'flex',
  gap: '$l',
  marginTop: 'auto',
});

export const CountryLanguageContainer = styled('div', {
  display: 'flex',
  alignItems: 'end',
  gap: '$xs',
  marginBottom: '$9xl',
});

export const LinkList = styled('ul', {
  margin: 0,
  padding: 0,
  listStyle: 'none',
  display: 'flex',
  flexDirection: 'column',

  variants: {
    asLevel2: {
      true: {
        gap: '$l',
      },
      false: {
        gap: '$xs',
      },
    },
  },
});

export const LinkListTitle = styled('div', {
  color: '$darkGrey',
  margin: '$l 0 $xs',
});

export const LinkItem = styled('li', {
  cursor: 'pointer',
});

export const StyledArrow = styled('div', {
  marginLeft: '$xs',
  color: '$black',
});
