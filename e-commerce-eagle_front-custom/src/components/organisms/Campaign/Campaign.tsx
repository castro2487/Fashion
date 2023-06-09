'use client';
import React, { Children } from 'react';
import { SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

import breakpoints from '@lib/ui/breakpoints';
import { Heading } from '@molecules/Heading';
import { Image } from '@atoms/Image';
import { TCampaignProps } from '@amq';
import { Text } from '@components/atoms/Text';

import { StyledContainer, ImageContainer, Items } from './Campaign.styles';
import { Card } from '@components/molecules/Card';

export const Campaign = ({
  id,
  heading,
  children,
  asset,
  productTiles,
  ...props
}: TCampaignProps) => {
  const navClassnames = {
    left: `carousel-nav-left-${id}`,
    right: `carousel-nav-right-${id}`,
  };

  return (
    <StyledContainer>
      <Heading {...heading} />
      <ImageContainer
        height={{
          '@initial': 'potrait',
          '@bp1': 'fixed',
          '@bp2': 'fixed',
          '@bp3': 'fixed',
        }}
      >
        <Image {...asset} />
      </ImageContainer>
      <Items
        margin={{
          '@initial': 'mobile',
          '@bp1': 'desktop',
          '@bp2': 'desktop',
          '@bp3': 'desktop',
        }}
        modules={[Navigation, A11y]}
        navigation={{
          prevEl: `.${navClassnames.left}`,
          nextEl: `.${navClassnames.right}`,
        }}
        spaceBetween={1}
        slidesPerView={1.6}
        breakpoints={{
          [breakpoints[0]]: {
            enabled: false,
            slidesPerView: 3,
            spaceBetween: 2,
            centerInsufficientSlides: true,
          },
        }}
      >
        {productTiles &&
          productTiles.map((tile, index) => {
            return (
              <SwiperSlide key={index}>
                <Card
                  assets={<Image {...tile.productTileImage} />}
                  main={<Text type="labelMedium">{tile.productTile}</Text>}
                  ratio="portrait"
                  verticalSpacingOverride="vm"
                />
              </SwiperSlide>
            );
          })}
      </Items>
    </StyledContainer>
  );
};
