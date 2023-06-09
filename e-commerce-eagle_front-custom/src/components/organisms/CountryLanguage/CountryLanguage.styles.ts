import { styled } from '@stitches-definitions';

import { Link } from '@components/atoms/Link';
import { StyledLink } from '@atoms/Link/Link.styles';
import { Container } from '@components/atoms/Container';

export const Trigger = styled(StyledLink, {
  border: 'none',
  background: 'transparent',
  padding: 0,
  cursor: 'pointer',
});

export const Separator = styled('div', {
  height: '$space$xxs',
  width: '$space$xxs',
  transform: 'rotate(45deg)',
});

export const StyledContainer = styled('div', {
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  gap: '$xs',

  variants: {
    theme: {
      light: {
        [`& ${Separator}`]: {
          background: '$red',
        },
      },
      dark: {
        [`& ${Separator}`]: {
          background: '$white',
        },
      },
    },
  },
});

export const StyledListContainer = styled(Container, {
  height: '70vh',
  marginTop: '$space$m',
});

export const StyledCountryLink = styled(Link, {
  height: '$space$m',
  display: 'flex',
  width: 'fit-content',
  marginTop: '$space$s',
  marginBottom: '$space$m',
  marginLeft: '0',
  paddingLeft: '$space$xxs',
  color: '$darkGrey',
});
