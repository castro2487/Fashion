import { styled } from '@stitches-definitions';
import { Accordion } from '@molecules/Accordion/Accordion';

export const Content = styled('div', {
  width: '100%',
});

export const StyledContainer = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'flex-start',
  gap: '$xxs',
  padding: '$m',
  width: '100%',
  transition: 'background 0.2s ease-in-out',

  '&:hover, &:focus-visible': {
    background: '$lightGrey',
  },

  variants: {
    disabled: {
      true: {
        pointerEvents: 'none',
      },
    },
    active: {
      true: {
        background: '$lightGrey',
      },
    },
  },

  defaultVariants: {
    active: false,
  },
});

export const StoreCardAccordion = styled(Accordion, {
  width: 'auto',

  '& > div': {
    padding: 0,
  },
});
