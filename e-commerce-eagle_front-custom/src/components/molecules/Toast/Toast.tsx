'use client';
import React from 'react';

import { Text } from '@atoms/Text/Text';

import {
  StyledContainer,
  Viewport,
  CloseButton,
  Description,
  DescriptionIcon,
  Provider,
} from './Toast.styles';
import { ToastProviderProps, ToastProps } from './Toast.types';

import { Success, Warning, Close } from '@icons';

export const ToastProvider = ({ children }: ToastProviderProps) => (
  <Provider duration={7000} swipeDirection="down">
    {children}
  </Provider>
);

export const Toast = ({ title, isSuccess, centered, ...props }: ToastProps) => (
  <>
    <StyledContainer isSuccess={isSuccess} {...props}>
      <Description>
        <DescriptionIcon>
          {isSuccess ? (
            <Success title="success" />
          ) : (
            <Warning title="warning" />
          )}
        </DescriptionIcon>

        <Text>{title}</Text>
      </Description>

      <CloseButton>
        <Close title="Close" />
      </CloseButton>
    </StyledContainer>
    <Viewport
      type={{
        '@initial': 'mobile',
        '@bp1': 'tablet',
        '@bp2': 'desktop',
        '@bp3': 'desktop',
      }}
      centered={centered}
    />
  </>
);
