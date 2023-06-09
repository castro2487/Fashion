import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from '@atoms/Button';
import {
  Dropdown,
  DropdownTrigger,
  DropdownContent,
  DropdownItem,
} from '@molecules/Dropdown';
import { HeaderBar } from '@organisms/HeaderBar';
import { ShoppingBag, Search, Account } from '@icons';
import { navigationMock } from '@organisms/Navigation/__mock__/navigationMock';

import { NavigationProps, HeaderProps } from '@amq';

interface StoryProps extends Omit<HeaderProps, 'navigation' | 'cart'> {
  navigation: NavigationProps;
  cart: {
    totalQuantity: string;
  };
  type?: 'transparent' | 'light' | 'dark';
  hidden: boolean;
}

export default {
  title: 'Organisms/HeaderBar',
  component: HeaderBar,
  args: {
    cart: {
      totalQuantity: 1,
    },
    type: 'light',
    hidden: false,
    navigation: navigationMock,
  },
  argTypes: {
    type: {
      options: ['transparent', 'light', 'dark'],
      control: { type: 'radio' },
    },
    hidden: {
      options: [true, false],
      control: { type: 'radio' },
    },
  },
  parameters: {
    layout: 'fullscreen',
    docs: { source: { type: 'dynamic' } },
  },
};

export const Default = ({ type, cart, hidden, navigation }: StoryProps) => {
  const [isNavigationOpen, setIsNavigationOpen] = useState<boolean>(false);
  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState<boolean>(false);

  const navProps = {
    isNavigationOpen,
    setIsNavigationOpen,
    ...navigation,
  };

  console.log(isCartOpen, isSearchBarOpen);

  const handleCart = () => {
    setIsCartOpen((prev) => !prev);
    console.log('CART OPEN');

    if (confirm('CLOSE CART')) {
      setIsCartOpen((prev) => !prev);
      console.log('CART CLOSE');
    }
  };

  const handleSearchBar = () => {
    setIsSearchBarOpen((prev) => !prev);
    console.log('SEARCH BAR OPEN');

    if (confirm('CLOSE SEARCH BAR')) {
      setIsSearchBarOpen((prev) => !prev);
      console.log('SEARCH BAR CLOSE');
    }
  };
  const renderSearch = () => (
    <button onClick={handleSearchBar}>
      <Search title="Search" />
    </button>
  );

  const renderCart = () =>
    cart?.totalQuantity ? (
      <button onClick={handleCart} data-quantity={cart.totalQuantity}>
        <ShoppingBag title="Cart" />
      </button>
    ) : undefined;

  const renderAccount = () => (
    <Dropdown>
      <DropdownTrigger asChild>
        <Button variant="tertiary">
          <Account title="my account" />
        </Button>
      </DropdownTrigger>
      <DropdownContent>
        <DropdownItem
          label="My profile"
          onSelect={action('profile item click')}
        />
        <DropdownItem label="Log out" onSelect={action('logout item click')} />
      </DropdownContent>
    </Dropdown>
  );

  return (
    <HeaderBar
      type={type}
      account={renderAccount()}
      hidden={hidden}
      navigation={navProps}
      isNavigationOpen={isNavigationOpen}
      setIsNavigationOpen={setIsNavigationOpen}
      search={renderSearch()}
      cart={renderCart()}
    />
  );
};
