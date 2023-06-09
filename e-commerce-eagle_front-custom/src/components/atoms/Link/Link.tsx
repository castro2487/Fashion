'use client';
import React, { forwardRef, RefObject } from 'react';
import NextLink from 'next/link';
import { Icon } from '@radix-ui/react-select';
import { StyledLink } from './Link.styles';
import { ILinkProps } from '@amq';

const Link = forwardRef(
  (
    {
      linkDisplayType,
      linkId,
      linkUrl,
      linkDisplayIcon,
      linkOpenInNewTab,
      linkColor,
      children,
      as,
      replace,
      scroll,
      shallow,
      prefetch,
      locale,
      ...props
    }: ILinkProps,
    ref:
      | ((instance: HTMLAnchorElement | null) => void)
      | RefObject<HTMLAnchorElement>
      | null
      | undefined
  ) => {
    const isIconLink = linkDisplayType === 'Icon' && linkDisplayIcon;
    const shouldOpenInNewTab = !linkOpenInNewTab ? '_self' : '_blank';
    const href = linkUrl || '';

    return (
      <NextLink
        href={href}
        as={as}
        replace={replace}
        scroll={scroll}
        shallow={shallow}
        prefetch={prefetch}
        locale={locale}
        passHref
        legacyBehavior
        id={linkId}
        target={shouldOpenInNewTab}
      >
        {!isIconLink ? (
          <StyledLink
            {...props}
            ref={ref}
            css={{ color: linkColor }}
            target={shouldOpenInNewTab}
          >
            {children}
          </StyledLink>
        ) : (
          <Icon color={linkColor} />
        )}
      </NextLink>
    );
  }
) as any;

Link.displayName = 'Link';

export { Link, StyledLink };
