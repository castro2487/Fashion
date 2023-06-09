import { styled } from '@stitches-definitions';

export const StyledContainer = styled('header', {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  transition: 'background-color 300ms ease-in-out, transform 300ms ease-in-out',

  variants: {
    size: {
      short: {
        height: '$headerHeightShort',
        paddingLeft: '$m',
        paddingRight: '$m',
      },
      tall: {
        height: '$headerHeightTall',
        paddingLeft: '$l',
        paddingRight: '$l',
      },
    },
    type: {
      transparent: {
        background: 'transparent',
        color: '$white',
        $$colorHover: '$colors$mediumHover',
      },
      light: {
        background: '$white',
        color: '$black',
        $$colorHover: '$colors$blackHover',
        position: 'relative',
        '&:after': {
          content: '',
          position: 'absolute',
          left: 0,
          bottom: 0,
          width: '100%',
          height: 1,
          background: '$mediumGrey',
        },
      },
      dark: {
        background: '$black',
        color: '$white',
        $$colorHover: '$colors$mediumGrey',
      },
    },
    hidden: {
      true: {
        transform: 'translateY(-100%)',
      },
      false: {
        transform: 'translateY(0%)',
      },
    },
  },
});

export const Items = styled('ul', {
  padding: '0',
  display: 'flex',
  listStyle: 'none',
  gap: '$xs',
});

export const Item = styled('li', {
  justifyContent: 'center',
  alignItems: 'center',

  button: {
    border: 0,
    cursor: 'pointer',

    '&[data-quantity]': {
      position: 'relative',

      '&::after': {
        content: 'attr(data-quantity)',
        position: 'absolute',
        right: 0,
        bottom: '$space$xxs',
      },
    },
  },

  'button, a': {
    background: 'transparent',
    fontSize: '$1',
    padding: '0',
    display: 'flex',
    alignItems: 'center',
    transition: 'color 0.2s ease-in-out',
    color: 'currentColor',

    '&:active, &:hover, &:focus': {
      color: '$$colorHover',
    },
  },

  variants: {
    hidden: {
      true: {
        display: 'none',
      },
      false: {
        display: 'flex',
      },
    },
  },

  defaultVariants: {
    hidden: false,
  },
});

export const Logo = styled('div', {
  variants: {
    size: {
      small: {
        svg: {
          width: 120,
        },
      },
      regular: {
        svg: {
          width: 160,
        },
      },
    },
  },
});
