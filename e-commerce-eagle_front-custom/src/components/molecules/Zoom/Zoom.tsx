'use client';
import React from 'react';

import { StyledContainer } from './Zoom.styles';
import { ZoomProps } from './Zoom.types';
import { ZoomButton } from '@atoms/Zoombutton';

import Plus from '@icons/Plus';
import Minus from '@icons/Minus';

export const Zoom = ({
  onClickZoomIn,
  onClickZoomOut,
  disabled = false,
  css,
  className,
}: ZoomProps) => (
  <StyledContainer css={css} className={className}>
    <ZoomButton onClick={onClickZoomIn} disabled={disabled}>
      <Plus title="zoom in" />
    </ZoomButton>
    <ZoomButton onClick={onClickZoomOut} disabled={disabled}>
      <Minus title="zoom out" />
    </ZoomButton>
  </StyledContainer>
);
