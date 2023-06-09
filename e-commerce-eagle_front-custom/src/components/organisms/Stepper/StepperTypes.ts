import { StichesCSS } from '@amq';

declare module '@amq' {
  type PaginationState = {
    visible: boolean;
    disabled: boolean;
  };

  interface StepperProps {
    steps: number;
    activeIndex: number;
    onPrevClick: () => void;
    onNextClick: () => void;
    prev: PaginationState;
    next: PaginationState;
    css?: StichesCSS;
  }
}
