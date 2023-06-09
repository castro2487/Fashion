'use client';
import React from 'react';
import * as Dialog from '@radix-ui/react-dialog';

import { NavigationDesktop } from '@organisms/NavigationDesktop';
import { NavigationMobile } from '@organisms/NavigationMobile';

import { Menu, Close } from '@icons';
import useMatchMedia from '@lib/ui/useMatchMedia';
import breakpoints from '@lib/ui/breakpoints';
import { NavigationProps } from '@amq';
import { CloseButton, DialogContent } from './Navigation.styles';

export const Navigation = ({
  open,
  handleNavigationChange,
  countryLanguageProps,
  categories,
  links,
}: NavigationProps) => {
  const isDesktop = useMatchMedia(`(min-width: ${breakpoints[1]}px)`);
  const NavigationComponent = isDesktop ? NavigationDesktop : NavigationMobile;

  return (
    <Dialog.Root open={open} onOpenChange={handleNavigationChange}>
      <Dialog.Trigger>
        <Menu title="Menu" />
      </Dialog.Trigger>

      <Dialog.Portal>
        <DialogContent
          animation={{ '@initial': 'slide', '@bp2': 'fade', '@bp3': 'fade' }}
        >
          <NavigationComponent
            countryLanguageProps={countryLanguageProps}
            categories={categories}
            links={links}
          />
          <CloseButton
            type={{
              '@initial': 'mobile',
              '@bp1': 'desktop',
              '@bp2': 'desktop',
              '@bp3': 'desktop',
            }}
          >
            <Close />
          </CloseButton>
        </DialogContent>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
