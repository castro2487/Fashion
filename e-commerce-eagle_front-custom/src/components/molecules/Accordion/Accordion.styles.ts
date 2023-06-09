import { styled, keyframes } from '@stitches-definitions';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

export const StyledContainer = styled(AccordionPrimitive.Root, {
  width: '100%',
});

import { Divider } from '@atoms/Divider/Divider';

const open = keyframes({
  from: { height: 0 },
  to: { height: 'var(--radix-accordion-content-height)' },
});

const close = keyframes({
  from: { height: 'var(--radix-accordion-content-height)' },
  to: { height: 0 },
});

export const StyledHeader = styled(AccordionPrimitive.Header, {
  width: '100%',
  display: 'flex',
});

export const StyledTrigger = styled(AccordionPrimitive.Trigger, {
  outline: 'none',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  background: 'transparent',
  border: 'none',
  cursor: 'pointer',
  padding: 0,
  transition:
    'color 300ms ease-in-out, background 300ms ease-in-out, box-shadow 300ms ease-in-out',

  '&:focus-visible': {
    background: '$lightGrey',
    boxShadow: '0 0 0 4px $colors$lightGrey',
  },
});

export const StyledContent = styled(AccordionPrimitive.Content, {
  width: '100%',
  overflow: 'hidden',

  '&[data-state="open"]': {
    animation: `${open} 300ms $timingFunctions$1`,
  },
  '&[data-state="closed"]': {
    animation: `${close} 300ms $timingFunctions$1`,
  },
});

export const StyledDivider = styled(Divider, {
  position: 'absolute',
  bottom: 0,
  left: 0,
});

const styledItemStyles: TCommonObject = {
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  padding: '$m 0',
  position: 'relative',

  [`${StyledDivider}`]: {
    color: 'var(--colorLine)',
  },
  [`${StyledTrigger}`]: {
    color: 'var(--color)',
  },
  [`${StyledContent}`]: {
    color: 'var(--color)',
  },

  variants: {
    alignment: {
      center: {
        [`${StyledTrigger}`]: {
          justifyContent: 'center',
          gap: '$xxs',
        },
        [`${StyledContent}`]: {
          textAlign: 'center',
        },
      },
      left: {
        [`${StyledTrigger}`]: {
          justifyContent: 'space-between',
        },
        [`${StyledContent}`]: {
          textAlign: 'left',
        },
      },
    },
    theme: {
      dark: {
        '--color': 'var(--customColor, $colors$white)',
        '--colorLine': 'var(--customColorLine, $colors$blackGrey)',

        [`${StyledTrigger}:focus-visible`]: {
          '&:focus-visible': {
            '--color': 'var(--customColor, $colors$black)',
          },
        },
      },
      light: {
        '--color': 'var(--customColor, $colors$black)',
        '--colorLine': 'var(--customColorLine, $colors$mediumGrey)',
      },
    },
  },

  defaultVariants: {
    alignment: 'left',
    theme: 'light',
  },
};

export const StyledItem = styled(AccordionPrimitive.Item, styledItemStyles);

export const PaddedContainer = styled('div', {
  paddingTop: '$s',
});

const styledCollapseStyles: TCommonObject = {
  transition: 'transform 300ms $timingFunctions$1',
  [`${StyledTrigger}[data-state=open] &`]: { transform: 'rotate(180deg)' },
};

export const StyledCollapse = styled('div', styledCollapseStyles);
