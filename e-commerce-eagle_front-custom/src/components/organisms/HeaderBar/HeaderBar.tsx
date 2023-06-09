'use client';
import React from 'react';

import { Link } from '@atoms/Link';
import { LogoHorizontal } from '@icons';
import { StyledContainer, Item, Items, Logo } from './HeaderBar.styles';
import { Navigation } from '../Navigation/Navigation';

import { HeaderBarProps } from '@amq';

export const HeaderBar = ({
  account,
  cart,
  type,
  hidden,
  navigation,
  search,
  isNavigationOpen,
  setIsNavigationOpen,
}: HeaderBarProps) => {
  const { countryLanguageProps, links, categories } = navigation;

  const NavComponent = () => (
    <Navigation
      links={links}
      categories={categories}
      countryLanguageProps={countryLanguageProps}
      open={isNavigationOpen}
      handleNavigationChange={setIsNavigationOpen}
    />
  );
  return (
    <StyledContainer
      type={type}
      size={{
        '@initial': 'short',
        '@bp1': 'tall',
        '@bp2': 'tall',
        '@bp3': 'tall',
      }}
      hidden={hidden}
    >
      <Link linkUrl="/" linkDisplayType={''} linkId={''} linkColor={''}>
        <Logo
          size={{
            '@initial': 'small',
            '@bp1': 'regular',
            '@bp2': 'regular',
            '@bp3': 'regular',
          }}
        >
          <LogoHorizontal title="Alexander McQueen" height={18} width={160} />
        </Logo>
      </Link>

      <Items>
        <Item
          hidden={{
            '@initial': true,
            '@bp1': false,
            '@bp2': false,
            '@bp3': false,
          }}
        >
          {account}
        </Item>

        {cart && <Item>{cart}</Item>}

        <Item>{search}</Item>

        <Item>
          <NavComponent />
        </Item>
      </Items>
    </StyledContainer>
  );
};
