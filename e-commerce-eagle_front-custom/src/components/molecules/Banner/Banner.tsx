'use client';
import React from 'react';

import { Image } from '@atoms/Image/Image';
import { Button } from '@atoms/Button/Button';
import { Link } from '@atoms/Link/Link';
import {
  StyledContainer,
  ImageContainer,
  ContentContainer,
  Title,
  ButtonsContainer,
} from './Banner.styles';
import {
  TextVariants,
  BannerProps,
  TContainerPaddingVariants,
  TContentGapVariants,
  TContentPaddingVariants,
} from '@amq';

export const Banner: typeof StyledContainer = ({
  title,
  cta,
  ctaSecondary,
  asset,
  variant,
  padded = false,
  align,
  ...props
}: BannerProps) => {
  const textType: TextVariants['type'] =
    variant === 'card'
      ? {
          '@initial': 'h3',
          '@bp1': 'h2',
          '@bp2': 'h2',
          '@bp3': 'h2',
        }
      : {
          '@initial': 'h2',
          '@bp1': 'h1',
          '@bp2': 'h1',
          '@bp3': 'h1',
        };

  const padding: TContainerPaddingVariants['padding'] = padded
    ? {
        '@initial': '1',
        '@bp1': '2',
        '@bp2': '2',
        '@bp3': '2',
      }
    : '0';

  const contentGap: TContentGapVariants['gap'] = { '@bp2': 'm', '@bp3': 'm' };

  const contentPadding: TContentPaddingVariants['padding'] = {
    '@initial': 'l',
    '@bp1': '2xl',
    '@bp2': '2xl',
    '@bp3': '2xl',
  };

  return (
    <StyledContainer
      {...props}
      variant={variant}
      align={align || (variant === 'banner' ? 'bottom' : 'center')}
      padding={padding}
    >
      <ImageContainer>
        <Image {...asset} />
      </ImageContainer>
      <ContentContainer
        data-blend="true"
        gap={contentGap}
        padding={contentPadding}
      >
        {title ? (
          <Title as="p" type={textType}>
            {title}
          </Title>
        ) : null}
        <ButtonsContainer dir={{ '@bp2': 'horizontal', '@bp3': 'horizontal' }}>
          {cta && (
            <Button
              size="small"
              as={Link}
              linkUrl={cta.linkUrl}
              underline={false}
              styled="default"
              aria-hidden
              tabIndex={-1}
            >
              {cta.linkDisplayName}
            </Button>
          )}
          {ctaSecondary && (
            <Button
              size="small"
              as={Link}
              linkUrl={ctaSecondary.linkUrl}
              underline={false}
              styled="default"
              aria-hidden
              tabIndex={-1}
            >
              {ctaSecondary.linkDisplayName}
            </Button>
          )}
        </ButtonsContainer>
      </ContentContainer>
      <ContentContainer
        data-blend="false"
        gap={contentGap}
        padding={contentPadding}
      >
        {title ? (
          <Title as="p" type={textType} aria-hidden>
            {title}
          </Title>
        ) : null}
        <ButtonsContainer dir={{ '@bp2': 'horizontal', '@bp3': 'horizontal' }}>
          {cta && (
            <Button
              size="small"
              as={Link}
              linkUrl={cta.linkUrl}
              underline={false}
              styled="default"
            >
              {cta.label}
            </Button>
          )}
          {ctaSecondary && (
            <Button
              size="small"
              as={Link}
              linkUrl={ctaSecondary.linkUrl}
              underline={false}
              styled="default"
            >
              {ctaSecondary.label}
            </Button>
          )}
        </ButtonsContainer>
      </ContentContainer>
    </StyledContainer>
  );
};
