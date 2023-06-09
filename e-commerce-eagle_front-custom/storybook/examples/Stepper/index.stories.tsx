import React, { useState } from 'react';

import { Stepper } from '@organisms/Stepper';

import { styled } from '@stitches-definitions';

const StyledContainer = styled('div', {
  width: '375px',
});

export interface StoryProps {
  steps: number;
}

export default {
  title: 'Examples/Stepper',
  component: Stepper,
  args: {
    steps: 5,
  },
  parameters: {
    layout: 'centered',
    docs: { source: { type: 'dynamic' } },
  },
};

export const Default = ({ steps }: StoryProps) => {
  const [active, setActive] = useState(0);
  const [prevState, setPrevState] = useState({
    visible: false,
    disabled: true,
  });
  const [nextState, setNextState] = useState({
    visible: true,
    disabled: false,
  });

  const onPrevClick = () => {
    const newIndex = active - 1;
    setActive(newIndex);
    if (newIndex === 0) {
      setPrevState({
        visible: false,
        disabled: true,
      });
    }
    if (newIndex < steps - 1) {
      setNextState({
        visible: true,
        disabled: false,
      });
    }
  };
  const onNextClick = () => {
    const newIndex = active + 1;
    setActive(newIndex);
    if (newIndex > 0) {
      setPrevState({
        visible: true,
        disabled: false,
      });
    }
    if (newIndex === steps - 1) {
      setNextState({
        visible: false,
        disabled: true,
      });
    }
  };

  return (
    <StyledContainer>
      <Stepper
        steps={steps}
        activeIndex={active}
        onPrevClick={onPrevClick}
        onNextClick={onNextClick}
        prev={prevState}
        next={nextState}
      />
    </StyledContainer>
  );
};
