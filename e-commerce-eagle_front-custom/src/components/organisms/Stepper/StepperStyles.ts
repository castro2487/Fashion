import { styled } from '@stitches-definitions';

import { Button } from '@atoms/Button';

export const StyledContainer = styled('div', {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  gap: '$m',
});

export const Steps = styled('div', {
  width: '100%',
  display: 'flex',
  flex: 1,
  gap: '$xs',
});

export const Step = styled('div', {
  flex: 1,
  height: 1,
  transition: 'background 0.3s ease-in-out',

  variants: {
    stepped: {
      true: {
        background: '$black',
      },
      false: {
        background: '$mediumGrey',
      },
    },
  },
});

export const StepperArrows = styled('div', {
  display: 'flex',
});

export const StepperButton = styled(Button, {
  variants: {
    visible: {
      false: {
        opacity: 0,
        pointerEvents: 'none',
      },
    },
  },
});
