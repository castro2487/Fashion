'use client';
import React from 'react';

import { FooterDesktop } from '@organisms/FooterDesktop';
import { FooterMobile } from '@organisms/FooterMobile';

import { Link } from '@atoms/Link/Link';
import { Text } from '@atoms/Text/Text';
import { Image } from '@atoms/Image';
import { ArrowRight } from '@icons';

import useMatchMedia from '@lib/ui/useMatchMedia';
import breakpoints from '@lib/ui/breakpoints';
import { FooterProps } from '@amq';
import {
  ServicesContainer,
  ServicesTitle,
  Services,
  Service,
  ServiceWrapper,
  ImageContainer,
} from './Footer.styles';

export const Footer = ({ exclusiveServices, ...props }: FooterProps) => {
  const isDesktop = useMatchMedia(`(min-width: ${breakpoints[0]}px)`);
  const FooterComponent = isDesktop ? FooterDesktop : FooterMobile;
  return (
    <>
      {exclusiveServices && (
        <ServicesContainer
          padding={{
            '@initial': 'mobile',
            '@bp1': 'tablet',
            '@bp2': 'desktop',
            '@bp3': 'desktop',
          }}
        >
          <ServicesTitle
            type={{
              '@initial': 'h4',
              '@bp1': 'h3',
              '@bp2': 'h3',
              '@bp3': 'h3',
            }}
            as="h2"
            textAlign={{
              '@initial': 'center',
              '@bp1': 'center',
              '@bp2': 'left',
              '@bp3': 'left',
            }}
          >
            {exclusiveServices.title}
          </ServicesTitle>
          <Services
            type={{
              '@initial': 'stacked',
              '@bp1': 'gridTablet',
              '@bp2': 'gridDesktop',
              '@bp3': 'gridDesktop',
            }}
          >
            {exclusiveServices.services.map(
              ({
                linkId,
                linkUrl,
                image,
                linkDisplayName,
                linkOpenInNewTab,
              }) => (
                <Service
                  key={linkId}
                  direction={{
                    '@initial': 'horizontal',
                    '@bp1': 'vertical',
                    '@bp2': 'vertical',
                    '@bp3': 'vertical',
                  }}
                >
                  <ServiceWrapper
                    as={linkUrl ? Link : ServiceWrapper}
                    {...(linkUrl && {
                      linkId,
                      linkUrl,
                      underline: false,
                      linkOpenInNewTab,
                    })}
                  >
                    <ImageContainer>
                      <Image src={image as string} alt={linkDisplayName} />
                    </ImageContainer>
                    <Text
                      as="p"
                      type="h4"
                      css={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '$xxs',
                      }}
                    >
                      {linkDisplayName}
                      {linkUrl && <ArrowRight role="none" />}
                    </Text>
                  </ServiceWrapper>
                </Service>
              )
            )}
          </Services>
        </ServicesContainer>
      )}
      <FooterComponent {...props} />
    </>
  );
};
