'use client';
import React, { Children, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import { AnimatePresence } from 'framer-motion';

import { Close } from '@icons';

import { StyledContainer, CloseButton } from './InformativeBanner.styles';
import { InformativeBannerProps } from './InformativeBanner.types';

import 'swiper/css';

export const InformativeBanner = ({
  children,
  delay,
  ...props
}: InformativeBannerProps) => {
  const [visible, setVisible] = useState<boolean>(true);

  const onClose = () => {
    setVisible(false);
  };

  return (
    <AnimatePresence initial={false}>
      {visible && (
        <StyledContainer
          {...props}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
        >
          <CloseButton onClick={onClose}>
            <Close title="Close" />
          </CloseButton>
          <Swiper
            modules={[Autoplay]}
            autoplay={{
              delay,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop
          >
            {Children.map(children, (child, index) => {
              return <SwiperSlide key={index}>{child}</SwiperSlide>;
            })}
          </Swiper>
        </StyledContainer>
      )}
    </AnimatePresence>
  );
};
