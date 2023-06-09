'use client';
import React from 'react';
import * as AlertDialogPrimitive from '@radix-ui/react-alert-dialog';

import { Text } from '@atoms/Text';
import { Button } from '@atoms/Button';
import { Image } from '@atoms/Image';
import { Close } from '@icons';
import { AlertDialogContentProps } from '@amq';

import {
  Header,
  StyledCloseButton,
  StyledContent,
  StyledOverlay,
  Buttons,
  Title,
  Description,
  ImageContainer,
} from './AlertDialog.styles';

const AlertDialogContent = React.forwardRef<
  React.ElementRef<typeof StyledContent>,
  AlertDialogContentProps
>(function AlertDialogContent(
  {
    title,
    description,
    image,
    actionOnPrimary,
    actionCallback,
    actionLabel,
    cancelLabel,
    ...props
  },
  forwardedRef
) {
  return (
    <AlertDialogPrimitive.Portal>
      <StyledOverlay>
        <StyledContent
          {...props}
          ref={forwardedRef}
          side={{
            '@initial': 'bottom',
            '@bp1': 'right',
            '@bp2': 'right',
            '@bp3': 'right',
          }}
          width={{
            '@initial': 'full',
            '@bp1': 'half',
            '@bp2': 'side',
            '@bp3': 'fixed',
          }}
          padding={{
            '@initial': 'm',
            '@bp1': 'l',
            '@bp2': 'l',
            '@bp3': 'l',
          }}
        >
          <Header>
            <StyledCloseButton>
              <Close title="Close" />
            </StyledCloseButton>
          </Header>
          <Title>
            <Text type="h3">{title}</Text>
          </Title>
          <Description>
            <Text>{description}</Text>
          </Description>
          {image && (
            <ImageContainer>
              <Image {...image} alt={image.alt} />
            </ImageContainer>
          )}
          <Buttons order={actionOnPrimary ? 'reverse' : 'normal'}>
            <AlertDialogPrimitive.Cancel asChild>
              <Button variant={actionOnPrimary ? 'secondary' : 'primary'}>
                {cancelLabel}
              </Button>
            </AlertDialogPrimitive.Cancel>
            <AlertDialogPrimitive.Action asChild>
              <Button
                onClick={actionCallback}
                variant={actionOnPrimary ? 'primary' : 'secondary'}
              >
                {actionLabel}
              </Button>
            </AlertDialogPrimitive.Action>
          </Buttons>
        </StyledContent>
      </StyledOverlay>
    </AlertDialogPrimitive.Portal>
  );
});

const AlertDialog = AlertDialogPrimitive.Root;
const AlertDialogTrigger = AlertDialogPrimitive.Trigger;

export { AlertDialog, AlertDialogTrigger, AlertDialogContent };
