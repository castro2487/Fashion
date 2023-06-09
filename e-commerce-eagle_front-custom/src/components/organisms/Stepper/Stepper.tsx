'use client';
import React from 'react';

import {
  StyledContainer,
  Steps,
  Step,
  StepperArrows,
  StepperButton,
} from './StepperStyles';
import { StepperProps } from '@amq';

import { Up, Down } from '@icons';

export const Stepper = ({
  steps,
  activeIndex,
  onPrevClick,
  onNextClick,
  prev,
  next,
  css,
}: StepperProps) => (
  <StyledContainer css={css}>
    <Steps>
      {Array(steps).map((step) => (
        <Step key={step} stepped={step <= activeIndex} />
      ))}
    </Steps>

    <StepperArrows>
      <StepperButton
        size="small"
        variant="tertiary"
        visible={prev?.visible}
        disabled={prev?.disabled}
        onClick={onPrevClick}
      >
        <Up title="Previous step" />
      </StepperButton>
      <StepperButton
        size="small"
        variant="tertiary"
        visible={next?.visible}
        disabled={next?.disabled}
        onClick={onNextClick}
      >
        <Down title="Next step" />
      </StepperButton>
    </StepperArrows>
  </StyledContainer>
);
