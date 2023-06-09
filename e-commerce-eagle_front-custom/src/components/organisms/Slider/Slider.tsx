'use client';
import React, { useState } from 'react';
import { Navigation, EffectFade, A11y } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import 'swiper/css/a11y';

import { Text } from '@atoms/Text';
import { Image } from '@atoms/Image';
import { FramedText } from '@molecules/FramedText/FramedText';
import { ArrowLeft, ArrowRight } from '@icons';
import { SlideContent, SliderProps } from '@amq';

import {
  ActiveSlide,
  StyledContainer,
  ImageContainer,
  NavigationButton,
  Slide,
} from './Slider.styles';

export const Slider = ({ slides }: SliderProps) => {
  const [activeSlide, setActiveSlide] = useState(0);
  const dark = 'title' in slides[activeSlide].content;

  return (
    <StyledContainer
      speed={400}
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
      modules={[Navigation, EffectFade, A11y]}
      navigation={{ prevEl: '.prev', nextEl: '.next' }}
      effect="fade"
    >
      {slides.map(({ id, content }: SlideContent) => (
        <Slide key={id}>
          {'src' in content ? (
            <ImageContainer>
              <Image {...content} />
            </ImageContainer>
          ) : (
            <FramedText {...content} />
          )}
        </Slide>
      ))}
      <NavigationButton
        className={`prev${activeSlide === 0 ? ' disabled' : ''}`}
        dark={dark}
      >
        <ArrowLeft title="Go to previous slide" />
      </NavigationButton>
      <NavigationButton
        className={`next${
          activeSlide === slides.length - 1 ? ' disabled' : ''
        }`}
        dark={dark}
      >
        <ArrowRight title="Go to next slide" />
      </NavigationButton>
      <ActiveSlide dark={dark}>
        <Text type="labelMedium">
          {activeSlide + 1}/{slides.length}
        </Text>
      </ActiveSlide>
    </StyledContainer>
  );
};
