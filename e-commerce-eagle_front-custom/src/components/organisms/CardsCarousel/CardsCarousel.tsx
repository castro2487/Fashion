'use client';
import React, { Children } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/a11y';

import breakpoints from '@lib/ui/breakpoints';
import { Text } from '@atoms/Text';
import { Button } from '@atoms/Button';
import { Link } from '@atoms/Link';
import { ArrowLeft, ArrowRight } from '@icons';
import { CardsCarouselProps, SwiperVariantsProps } from '@amq';

import {
  StyledContainer,
  Header,
  Content,
  Actions,
  Controls,
  NavigationButton,
  EmptyContainer,
} from './CardsCarousel.styles';

const swiperVariants: SwiperVariantsProps = {
  disabled: {
    enabled: false,
  },
  primary: {
    slidesPerView: 1.6,
    breakpoints: {
      [breakpoints[0]]: {
        slidesPerView: 2.4,
        slidesPerGroup: 2,
      },
      [breakpoints[1]]: {
        slidesPerView: 3.75,
        slidesPerGroup: 3,
      },
    },
  },
  secondary: {
    enabled: false,
    slidesPerView: 1,
    breakpoints: {
      [breakpoints[0]]: {
        slidesPerView: 2,
        slidesPerGroup: 2,
        enabled: true,
      },
      [breakpoints[1]]: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        enabled: true,
      },
    },
  },
};

export const CardsCarousel = ({
  id,
  title,
  subtitle,
  cta,
  children,
  empty,
  variant = 'primary',
  css,
  ...props
}: CardsCarouselProps) => {
  const slides = Children.toArray(children);
  const hasOneSlide = slides.length === 1;
  const isPrimaryVariant = variant === 'primary';

  const navClassnames = {
    left: `carousel-nav-left-${id}`,
    right: `carousel-nav-right-${id}`,
  };

  return (
    <StyledContainer
      noCarousel={
        isPrimaryVariant
          ? 'false'
          : {
              '@initial': 'true',
              '@bp1': 'false',
              '@bp2': 'false',
              '@bp3': 'false',
            }
      }
      css={{
        ...css,
        ...(isPrimaryVariant && {
          $$padding: '18.81%',
          '@bp1': {
            $$padding: '29.2%',
          },
          '@bp2': {
            $$padding: '36.13%',
          },
          '@bp3': {
            $$padding: '36.13%',
          },
        }),
      }}
      oneCard={isPrimaryVariant && hasOneSlide}
      {...props}
    >
      <Header
        dir={
          isPrimaryVariant
            ? {
                '@bp2': 'horizontal',
                '@bp3': 'horizontal',
              }
            : 'horizontal'
        }
        gap={{
          '@bp1': 'l',
          '@bp2': 'l',
          '@bp3': 'l',
        }}
        gutter={
          isPrimaryVariant
            ? 'l'
            : { '@initial': 'm', '@bp1': '2xl', '@bp2': 'l', '@bp3': 'l' }
        }
      >
        <Content
          gap={{
            '@bp2': 'xs',
            '@bp3': 'xs',
          }}
        >
          <Text as="h2" type={isPrimaryVariant ? 'h3' : 'h2'}>
            {title}
          </Text>
          {subtitle && subtitle}
        </Content>
        <Actions>
          {cta && (
            <Button
              variant="secondary"
              size="small"
              as={Link}
              linkUrl={cta.linkUrl}
              linkDisplayType={''}
              linkId={''}
              linkColor={''}
              underline={false}
              styled="default"
            >
              {cta.label}
            </Button>
          )}
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
        </Actions>
      </Header>
      {empty ? (
        <EmptyContainer
          gutter={{ '@initial': 'm', '@bp1': '2xl', '@bp2': 'l', '@bp3': 'l' }}
        >
          {empty}
        </EmptyContainer>
      ) : (
        <Swiper
          style={{ width: '100%' }}
          modules={[Navigation, A11y]}
          navigation={{
            prevEl: `.${navClassnames.left}`,
            nextEl: `.${navClassnames.right}`,
          }}
          spaceBetween={1}
          {...swiperVariants[
            hasOneSlide && isPrimaryVariant ? 'disabled' : variant
          ]}
        >
          {slides.map((child, index) => {
            return <SwiperSlide key={index}>{child}</SwiperSlide>;
          })}
        </Swiper>
      )}
    </StyledContainer>
  );
};
