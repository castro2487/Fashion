import { styled } from '@stitches-definitions';

export const DatePickerContainer = styled('div', {
  position: 'relative',
  paddingBottom: '$m',

  '.react-datepicker': {
    border: '1px solid $lightGrey',
    borderRadius: 0,

    '&__header ': {
      padding: 0,
      background: '$white',
      border: 'none',
    },

    '&__current-month': {
      display: 'flex',
      alignItems: 'center',
      margin: '$m',
      textTransform: 'capitalize',
      textAlign: 'left',
      fontFamily: '$bembo',
      fontWeight: '$normal',
      fontSize: '$6',
      height: '$space$xl',
      lineHeight: '$2',
    },

    '&__navigation': {
      top: '$m',

      '::before': {
        borderColor: '$black',
        borderWidth: '1px 1px 0 0',
        width: 6,
        height: 6,
      },

      '&:hover': {
        '::before': { borderColor: '$blackHover' },
      },

      '&--previous': {
        left: 'calc(100% - (32px * 2 + 16px))',
      },
      '&--next': {
        right: '$m',
      },

      '&-icon': {
        top: 3,
        '&--previous': {
          right: 3,
        },
        '&--next': {
          left: 3,
        },
      },
    },

    '&__day-names': {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: '$m',
      margin: '0 $m',
      paddingTop: '$l',
      borderTop: '1px solid $mediumGrey',
    },

    '&__day-name': {
      margin: 0,
      flex: 1,
      color: '$darkGrey',
      textTransform: 'capitalize',
      fontFamily: '$helvetica',
      fontWeight: '$normal',
      fontSize: '$1',
      lineHeight: '$3',
    },

    '&__month': {
      margin: 0,
      marginBottom: '$l',
    },

    '&__week': {
      display: 'flex',
      justifyContent: 'space-between',
      columnGap: '$m',
      margin: '$l $m 0',
    },

    '&__day': {
      flex: 1,
      margin: 0,
      fontFamily: '$helvetica',
      fontWeight: '$normal',
      fontSize: '$2',
      lineHeight: '$4',
      aspectRatio: '1 / 1',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: '50%',
      transition: 'background-color 0.1s ease-in-out, color 0.1s ease-in-out',

      '&:hover': {
        backgroundColor: '$blackHover',
        borderRadius: '50%',
        color: '$white',
      },

      '&:focus-visible': {
        color: '$black',
        backgroundColor: '$lightGrey',
        outline: 'none',
      },

      '&--disabled': {
        color: '$darkGrey',
        pointerEvents: 'none',
      },

      '&--today': {
        fontWeight: '$bold',
      },

      '&--selected, &--keyboard-selected': {
        color: '$white',
        backgroundColor: '$black',
      },
    },
  },
});
