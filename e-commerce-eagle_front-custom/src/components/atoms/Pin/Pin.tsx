'use client';
import React from 'react';
import { StyledContainer } from './Pin.styles';
import { PinIcon } from '@icons';
import { StichesCSS, PinProps } from '@amq';

export const Pin = ({ disabled = false, css, className, active }: PinProps) => (
  <StyledContainer
    disabled={disabled}
    css={css as StichesCSS}
    className={className}
    active={active}
  >
    <PinIcon title="pin point" />
  </StyledContainer>
);
