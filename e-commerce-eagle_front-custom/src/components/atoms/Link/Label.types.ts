/* eslint-disable @typescript-eslint/no-namespace */
import NextLink from 'next/link';
import { type VariantProps } from '@stitches/react';
import { StyledLink } from './Link.styles';
import { UrlObject } from 'url';

declare module '@amq' {
  type Url = string | UrlObject;

  type TContentfulLinkProps = {
    linkDisplayName: string;
    linkId: string;
    linkUrl: Url;
    linkDisplayType: string;
    linkColor?: string;
    linkDisplayIcon?: string;
    linkOpenInNewTab?: boolean;
  };
  interface ILinkProps
    extends TContentfulLinkProps,
      Omit<React.ComponentProps<typeof NextLink>, 'href' | 'legacyBehavior'>,
      VariantProps<typeof StyledLink> {
    css?: StichesCSS;
    className?: string;
  }
}
