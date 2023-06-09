import { styled } from '@stitches-definitions';

export const StyledContainer = styled('div', {
  display: 'grid',

  variants: {
    dir: {
      horizontal: {
        gridTemplateColumns: '1fr 1.1437fr',
        gridTemplateRows: 'auto',
        gridGap: '$m',
        marginRight: '$m',
        alignItems: 'center',
      },
      vertical: {
        gridTemplateRows: 'auto auto',
        gridTemplateColumns: 'auto',
        marginRight: 0,
      },
    },
    align: {
      center: {
        alignItems: 'center',
      },
      end: {
        alignItems: 'end',
      },
    },
  },
});

export const ImageContainer = styled('div', {
  position: 'relative',
  height: 0,

  variants: {
    ratio: {
      square: {
        paddingTop: '100%',
      },
      portrait: {
        paddingTop: '125%',
      },
    },
  },
});

export const Content = styled('div', {
  display: 'grid',
  gap: '$m',

  variants: {
    area: {
      packed: {
        gridTemplateAreas: '"main main""actions price"',
        '& [data-area="price"]': {
          justifySelf: 'end',
          alignSelf: 'end',
        },
        '& [data-area="actions"]': {
          alignSelf: 'end',
        },
      },
      big: {
        gridTemplateAreas: '"main actions""main price"',
        '& [data-area="actions"]': {
          justifySelf: 'end',
          alignSelf: 'start',
        },
        '& [data-area="price"]': {
          justifySelf: 'end',
          alignSelf: 'end',
        },
      },
      noActions: {
        gridTemplateAreas: '"main price"',
        '& [data-area="price"]': {
          justifySelf: 'end',
          alignSelf: 'end',
        },
      },
      noPriceBig: {
        gridTemplateAreas: '"main actions"',
        '& [data-area="actions"]': {
          justifySelf: 'end',
          alignSelf: 'start',
        },
      },
      noPricePacked: {
        gridTemplateAreas: '"main""actions"',
        '& [data-area="actions"]': {
          alignSelf: 'end',
        },
      },
      mainOnly: {
        gridTemplateAreas: '"main"',
      },
    },
    spacing: {
      h: {
        marginTop: '$xs',
        marginBottom: '$xs',
      },
      vm: {
        marginTop: '$xs',
        marginLeft: '$m',
        marginRight: '$m',
      },
      vt: {
        marginTop: '$m',
        marginLeft: '$2xl',
        marginRight: '$2xl',
      },
      vd: {
        marginTop: '$m',
        marginLeft: 'l',
        marginRight: 'l',
      },
    },
  },
});

export const ContentItem = styled('div', {
  '&[data-area="main"]': {
    gridArea: 'main',
  },
  '&[data-area="actions"]': {
    gridArea: 'actions',
  },
  '&[data-area="price"]': {
    gridArea: 'price',
  },
});
