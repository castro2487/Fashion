import { styled } from '@stitches-definitions';

export const StyledLink = styled('a', {
  variants: {
    styled: {
      light: {
        outline: 'none',
        background: 'transparent',
        color: 'var(--defaultColor, $black)',
        transition:
          'color 150ms ease-in-out, background 150ms ease-in-out, box-shadow 150ms ease-in-out',

        '&:hover': {
          color: '$blackHover',
        },

        '&:focus-visible': {
          background: '$lightGrey',
          boxShadow: '0 0 0 4px $colors$lightGrey',
        },
      },
      dark: {
        outline: 'none',
        background: 'transparent',
        color: 'var(--defaultColor, $white)',
        transition:
          'color 150ms ease-in-out, background 150ms ease-in-out, box-shadow 150ms ease-in-out',

        '&:hover': {
          color: '$mediumGrey',
        },

        '&:focus-visible': {
          color: '$black',
          background: '$lightGrey',
          boxShadow: '0 0 0 4px $colors$lightGrey',
        },
      },
      default: {},
    },
    underline: {
      true: {
        textDecoration: 'underline',
        textUnderlineOffset: '$space$xxs',
        textDecorationThickness: 1,
      },
      false: {
        textDecoration: 'none',
      },
    },
  },

  defaultVariants: {
    styled: 'light',
    underline: 'true',
  },
});
