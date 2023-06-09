'use client';
import React, { useState } from 'react';
import { Swiper } from 'swiper/react';
import { Navigation, A11y } from 'swiper';
import { Image } from '@atoms/Image';
import { Text } from '@atoms/Text';
import { ArrowLeft, ArrowRight } from '@icons';

import 'swiper/css';
import 'swiper/css/navigation';

import { theme } from '@stitches-definitions';
import {
  StyledContainer,
  ImageContainer,
  Item,
  ItemContainer,
  NavigationButton,
} from './Spotlight.styles';

import { TSpotlightProps } from '@amq';

export const Spotlight = ({ id, links }: TSpotlightProps) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    links && (
      <StyledContainer>
        <NavigationButton
          variant="tertiary"
          size="small"
          id={`${id}-prev`}
          className={`prev${
            links.length <= 3 || activeIndex === 0 ? ' disabled' : ''
          }`}
        >
          <ArrowLeft title="See previous slides" />
        </NavigationButton>

        <NavigationButton
          variant="tertiary"
          size="small"
          id={`${id}-next`}
          className={`next${
            links.length <= 3 || activeIndex === links.length - 3
              ? ' disabled'
              : ''
          }`}
        >
          <ArrowRight title="See next slides" />
        </NavigationButton>

        <Swiper
          slidesPerView={3}
          slidesPerGroup={3}
          spaceBetween={parseInt(theme.space.l.value, 10)}
          modules={[Navigation, A11y]}
          navigation={{
            prevEl: `#${id}-prev`,
            nextEl: `#${id}-next`,
          }}
          onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        >
          {links.map(
            ({
              linkId,
              linkDisplayType,
              image,
              linkUrl,
              linkColor,
              linkDisplayName,
            }) => (
              <ItemContainer key={linkId}>
                <Item
                  linkUrl={linkUrl}
                  underline={false}
                  linkDisplayType={linkDisplayType}
                  linkId={linkId}
                  linkColor={linkColor}
                >
                  <ImageContainer>
                    {image && <Image {...image} />}
                  </ImageContainer>
                  <Text type="labelMedium">{linkDisplayName}</Text>
                </Item>
              </ItemContainer>
            )
          )}
        </Swiper>
      </StyledContainer>
    )
  );
};
