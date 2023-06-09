'use client';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { FloatingButton } from '@atoms/FloatingButton';
import { HotspotProps, HotspotTriggerProps, HotspotPreventEvent } from '@amq';
import { Close, Plus } from '@icons';

import { Content } from './Hotspot.styles';

const HotspotContent = ({ children, container }: HotspotProps) => {
  const preventDefault: HotspotPreventEvent = (event) => {
    if (container) {
      event.preventDefault();
    }
  };

  return (
    <Dialog.Portal container={container}>
      <Content onInteractOutside={preventDefault}>
        {children}

        <Dialog.Close asChild>
          <FloatingButton
            active
            css={{ position: 'absolute', bottom: '$m', right: '$m' }}
          >
            <Close title="Close" />
          </FloatingButton>
        </Dialog.Close>
      </Content>
    </Dialog.Portal>
  );
};

const HotspotTrigger = ({ css, ...props }: HotspotTriggerProps) => (
  <Dialog.Trigger {...props} asChild>
    <FloatingButton
      css={{
        position: 'absolute',
        right: '$m',
        bottom: '$m',
        ...css,
      }}
    >
      <Plus title="Open hotspot" />
    </FloatingButton>
  </Dialog.Trigger>
);

const Hotspot = Dialog.Root;

export { Hotspot, HotspotTrigger, HotspotContent };
