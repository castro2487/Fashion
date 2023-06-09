'use client';
import React, { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

import useMatchMedia from '@lib/ui/useMatchMedia';
import breakpoints from '@lib/ui/breakpoints';
import { Text } from '@atoms/Text/Text';
import { Image } from '@atoms/Image';
import { ArrowLeft, ArrowRight } from '@icons';
import { CompleteTheLookProps } from '@amq';

import {
  StyledContainer,
  Header,
  Controls,
  NavigationButton,
  Content,
  ImageContainer,
} from './CompleteTheLook.styles';

export const CompleteTheLook = ({
  id,
  title,
  look,
  children,
}: CompleteTheLookProps) => {
  const isDesktop = useMatchMedia(`(min-width: ${breakpoints[1]}px)`);

  const navClassnames = {
    left: `carousel-nav-left-${id}`,
    right: `carousel-nav-right-${id}`,
  };

  return (
    <StyledContainer
      gap={{ '@initial': 'm', '@bp1': 'xl', '@bp2': 'l', '@bp3': 'l' }}
    >
      <Header
        dir={{
          '@bp2': 'horizontal',
          '@bp3': 'horizontal',
        }}
        gap={{
          '@bp1': 'l',
          '@bp2': 'l',
          '@bp3': 'l',
        }}
        gutter={{ '@initial': 'm', '@bp1': '2xl', '@bp2': 'l', '@bp3': 'l' }}
      >
        <Text as="h2" type="h3">
          {title}
        </Text>
        <Controls visible={{ '@bp2': 'true', '@bp3': 'true' }}>
          <NavigationButton
            variant="tertiary"
            size="small"
            className={navClassnames.left}
          >
            <ArrowLeft title="Previous slides" />
          </NavigationButton>
          <NavigationButton
            variant="tertiary"
            size="small"
            className={navClassnames.right}
          >
            <ArrowRight title="Next slides" />
          </NavigationButton>
        </Controls>
      </Header>
      <Content
        variant={{
          '@bp2': 'split',
          '@bp3': 'split',
        }}
      >
        {isDesktop && (
          <ImageContainer>
            <Image {...look} />
          </ImageContainer>
        )}
        <Swiper
          modules={[Navigation, A11y]}
          navigation={{
            prevEl: `.${navClassnames.left}`,
            nextEl: `.${navClassnames.right}`,
          }}
          spaceBetween={1}
          enabled={false}
          slidesPerView={2}
          breakpoints={{
            [breakpoints[0]]: {
              slidesPerView: 2,
              enabled: false,
            },
            [breakpoints[1]]: {
              slidesPerView: 3,
              slidesPerGroup: 3,
              enabled: true,
            },
          }}
        >
          {!isDesktop && (
            <SwiperSlide>
              <ImageContainer>
                <Image {...look} />
              </ImageContainer>
            </SwiperSlide>
          )}
          {Children.map(children, (child, index) => {
            return <SwiperSlide key={index}>{child}</SwiperSlide>;
          })}
        </Swiper>
      </Content>
    </StyledContainer>
  );
};
