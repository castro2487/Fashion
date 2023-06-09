'use client';
import React, { Children, isValidElement, useState } from 'react';
import { SwiperSlide } from 'swiper/react';
import { A11y, Autoplay, Pagination } from 'swiper';
import { PaginationOptions, SwiperEvents } from 'swiper/types';

import breakpoints from '@lib/ui/breakpoints';
import { Image } from '@atoms/Image';
import { FramedContent } from '@atoms/FramedContent';
import { StyledContainer, Slider } from './EditorialContent.styles';
import {
  EditorialContentProps,
  EditorialTextProps,
  ContainerVariants,
  ImageProps,
} from '@amq';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/autoplay';

export const EditorialImage = (props: ImageProps) => (
  <Image data-theme="light" {...props} alt={props.alt} />
);
EditorialImage.displayName = 'EditorialImage';

export const EditorialText = (props: EditorialTextProps) => (
  <FramedContent
    data-theme="dark"
    css={{
      margin: '0 $m',
      width: 'auto',
      '@bp1': { margin: '0 $2xl' },
      '@bp2': { margin: '0 $l' },
      '@bp3': { margin: '0 $l' },
    }}
    {...props}
  />
);
EditorialText.displayName = 'EditorialText';

export const EditorialRoot = ({
  children,
  css,
  delay = 3000,
  ...props
}: EditorialContentProps) => {
  const [theme, setTheme] = useState<ContainerVariants['theme'] | undefined>(
    undefined
  );
  let imagesOnly = true;
  const content = Children.toArray(children);

  if (content.length === 0 || content.length > 2) {
    throw Error(
      'There must be at least one but not more than two children in order for the component to render.'
    );
  }

  content.forEach((child) => {
    if (
      !isValidElement(child) ||
      (isValidElement(child) &&
        !(child.type === EditorialImage || child.type === EditorialText))
    ) {
      throw Error(
        'children must be <EditorialImage /> or <EditorialText /> in order for the component to render.'
      );
    }
    if (isValidElement(child) && child.type !== EditorialImage && imagesOnly) {
      imagesOnly = false;
    }
  });

  const hasTwoItems = content.length > 1;

  const pagination: PaginationOptions = {
    renderBullet: function (index, className) {
      return '<div class="' + className + '"></div>';
    },
  };

  const onSlideChange: SwiperEvents['beforeSlideChangeStart'] = ({
    activeIndex,
    slides,
  }) => {
    const newSlide = slides[activeIndex];
    const newTheme = (newSlide.querySelector('[data-theme]') as HTMLElement)
      .dataset.theme as ContainerVariants['theme'];
    if (newTheme !== theme) {
      setTheme(newTheme);
    }
  };

  return (
    <StyledContainer
      {...props}
      css={{ ...css, $$duration: `${delay}ms` }}
      theme={theme}
      padding={{
        '@initial': 'mobile',
        '@bp1': 'tablet',
        '@bp2': 'desktop',
        '@bp3': 'desktop',
      }}
    >
      <Slider
        slidesPerView={1}
        modules={[A11y, Autoplay, Pagination]}
        {...(hasTwoItems && {
          pagination,
          autoplay: { delay, disableOnInteraction: false },
          loop: true,
        })}
        speed={400}
        spaceBetween={0}
        breakpoints={
          imagesOnly
            ? {}
            : {
                [breakpoints[1]]: {
                  enabled: false,
                  slidesPerView: hasTwoItems ? 2 : 1,
                  pagination: { enabled: false },
                },
              }
        }
        onSlideChange={onSlideChange}
      >
        {content.map((child, index) => {
          return <SwiperSlide key={index}>{child}</SwiperSlide>;
        })}
      </Slider>
    </StyledContainer>
  );
};
