import { motion } from 'framer-motion';
import * as Accordion from '@radix-ui/react-accordion';
import { styled, keyframes } from '@stitches-definitions';

import { Text } from '@atoms/Text';

export const open = keyframes({
  from: { height: 0, opacity: 0 },
  to: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
});

export const close = keyframes({
  from: { height: 'var(--radix-accordion-content-height)', opacity: 1 },
  to: { height: 0, opacity: 0 },
});

export const StyledContainer = styled('div', {
  width: '100%',
  height: '100%',
  display: 'grid',
  overflowY: 'scroll',
  background: '$white',
});

export const Content = styled('div', {
  position: 'relative',
  overflowX: 'scroll',

  button: {
    border: 'none',
    background: 'transparent',
    color: 'currentColor',
  },
});

export const MainContent = styled(motion.div, {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  height: '100%',
  padding: '$5xl $m',
});

export const Level1List = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$xl',
  padding: '0 $m',
});

export const NavigationButton = styled('button', {
  padding: 0,
  display: 'flex',
  flexWrap: 'nowrap',
  color: '$black',
  cursor: 'pointer',
});

export const Links = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  color: '$darkGrey',
  gap: '$xl',
  marginTop: '$xl',
});

export const CountryLanguageContainer = styled(motion.div, {
  position: 'absolute',
  top: '$m',
  left: '50%',
  transform: 'translateX(-50%)',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$xxs',
});

export const BackButton = styled(motion.button, {
  position: 'absolute',
  top: '0',
  left: '$m',
  display: 'flex',
  alignItems: 'center',
  padding: 0,
  cursor: 'pointer',
  color: '$darkGrey',

  '&:active, &:focus, &:hover': {
    color: '$black',
  },

  variants: {
    height: {
      short: {
        height: '$headerHeightShort',
      },
      tall: {
        height: '$headerHeightTall',
      },
    },
  },
});

export const SubCategory = styled(motion.div, {
  padding: '$5xl 0',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Level2Container = styled(Accordion.Root, {
  display: 'flex',
  flexDirection: 'column',
  gap: '$xl',
  width: '100%',
});

export const Level2Item = styled(Accordion.Item, {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const Level3Container = styled(Accordion.Content, {
  overflow: 'hidden',
  width: '100%',
  '&[data-state="open"]': { animation: `${open} 300ms ease-out` },
  '&[data-state="closed"]': { animation: `${close} 300ms ease-out` },
});

export const Level3List = styled('ul', {
  listStyle: 'none',
  padding: 0,
  margin: '$xl 0',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '$xl',
});

export const EditList = styled('ul', {
  overflow: 'scroll',
  listStyle: 'none',
  margin: 0,
  display: 'flex',
  gap: '$s',

  variants: {
    padding: {
      mobile: {
        padding: '$xl $m',
      },
      tablet: {
        padding: '$xl',
      },
    },
  },
});

export const EditItem = styled('li', {
  flex: '0 0 60vw',
  maxWidth: 224,

  a: {
    display: 'block',
  },
});

export const ImageContainer = styled('div', {
  overflow: 'hidden',
  position: 'relative',
  width: '100%',
  height: 0,
  paddingTop: 'calc(100% * 5/4)',
});

export const InteractiveText = styled(Text, {
  transition: 'color 300ms ease-in-out, opacity 300ms ease-in-out',

  variants: {
    color: {
      black: {
        color: '$black',
      },
      darkGrey: {
        color: '$darkGrey',
      },
      greyedOut: {
        opacity: 0.8,
      },
    },
  },
});
