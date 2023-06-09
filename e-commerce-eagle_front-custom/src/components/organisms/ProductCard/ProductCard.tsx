'use client';
import React, { useState, useEffect, useRef } from 'react';
import SwiperCore, { A11y, Lazy } from 'swiper';
import { SwiperSlide } from 'swiper/react';
import { useInView } from 'framer-motion';

import 'swiper/css';
import 'swiper/css/a11y';
import 'swiper/css/lazy';

import useMatchMedia from '@lib/ui/useMatchMedia';

import { Text } from '@atoms/Text';
import { Image } from '@atoms/Image';
import { Link } from '@atoms/Link';
import { Color } from '@molecules/Color/Color';
import {
  StyledContainer,
  Colors,
  ColorsContainer,
  Slider,
  Video,
} from './ProductCard.styles';
import { ProductCardProps } from '@amq';

export const ProductCard = ({
  title,
  label,
  linkUrl,
  price,
  colorsLabel,
  extraColors,
  colors,
  image,
  asset,
  isDemo,
}: ProductCardProps) => {
  const isHoverable = useMatchMedia('(hover: hover) and (pointer: fine)');
  const hasAlternativeAsset = asset !== undefined;
  const swiperRef = useRef<SwiperCore>();
  const inViewRef = useRef(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const isInView = useInView(inViewRef, { once: true });
  const [isVideoReady, setIsVideoReady] = useState(false);

  const onInit = (Swiper: SwiperCore): void => {
    swiperRef.current = Swiper;
  };

  const handleMouseEnter = () => {
    if (swiperRef.current && isHoverable) {
      swiperRef.current.slideNext();
    }
  };
  const handleMouseLeave = () => {
    if (swiperRef.current && isHoverable) {
      swiperRef.current.slidePrev();
    }
  };

  const handleVideo = (activeIndex: number, video: HTMLVideoElement): void => {
    if (activeIndex === 0) video.currentTime = 0;
    if (activeIndex === 1) video.play();
  };

  useEffect(() => {
    if (
      isInView &&
      isDemo &&
      swiperRef.current &&
      hasAlternativeAsset &&
      !isHoverable
    ) {
      if (('type' in asset && isVideoReady) || 'alt' in asset) {
        const el = swiperRef.current;
        el.slideNext();

        const timer = setTimeout(() => {
          el.slidePrev();
        }, 2400);

        return () => clearTimeout(timer);
      }
    }
  }, [isInView]);

  return (
    <StyledContainer
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      isHoverable={isHoverable}
      ratio="portrait"
      dir="vertical"
      assets={
        <Link
          linkUrl={linkUrl}
          css={{ position: 'absolute', inset: 0 }}
          ref={inViewRef}
          aria-label={title}
          linkDisplayType={''}
          linkId={''}
          linkColor={''}
        >
          {!hasAlternativeAsset && <Image src={image.src} alt={image.alt} />}

          {hasAlternativeAsset && (
            <Slider
              onInit={onInit}
              modules={[A11y, Lazy]}
              speed={400}
              spaceBetween={0}
              slidesPerView={1}
              preloadImages={false}
              lazy={{
                checkInView: true,
                enabled: true,
                loadPrevNext: true,
              }}
              onLazyImageReady={() => setIsVideoReady(true)}
              onSlideChange={(swiper) =>
                videoRef.current !== null &&
                handleVideo(swiper.activeIndex, videoRef.current)
              }
            >
              <SwiperSlide>
                <Image src={image.src} alt={image.alt} />
              </SwiperSlide>
              <SwiperSlide>
                {'type' in asset ? (
                  <Video
                    ref={videoRef}
                    muted
                    loop
                    playsInline
                    className="swiper-lazy"
                  >
                    <source src={asset.src} type={asset.type} />
                  </Video>
                ) : (
                  <Image src={asset.src} alt={asset.alt} />
                )}
              </SwiperSlide>
            </Slider>
          )}
        </Link>
      }
      main={
        <>
          <div>
            <Link
              linkUrl={linkUrl}
              tabIndex={-1}
              underline={false}
              linkDisplayType={''}
              linkId={''}
              linkColor={''}
            >
              {label ? (
                <Text
                  type="labelMedium"
                  css={{ color: '$red', marginRight: '$xxs' }}
                >
                  {label}
                </Text>
              ) : null}
              <Text
                type="labelMedium"
                css={{
                  '&:not(:first-of-type)': {
                    '&:before': {
                      content: '-',
                      marginRight: '$xxs',
                    },
                  },
                }}
              >
                {title}
              </Text>
            </Link>
          </div>

          {colorsLabel && colors && (
            <ColorsContainer isHoverable={isHoverable}>
              <Text type="labelMedium" css={{ color: '$blackGrey' }}>
                {colorsLabel}
              </Text>

              <Colors>
                {colors.map(({ linkUrl, color }) => (
                  <Link
                    linkUrl={linkUrl}
                    aria-hidden
                    tabIndex={-1}
                    key={color}
                    linkId={''}
                    linkDisplayType={''}
                    linkColor={''}
                  >
                    <Color color={color} />
                  </Link>
                ))}
                {extraColors && (
                  <Text type="labelMedium" css={{ color: '$blackGrey' }}>
                    {extraColors}
                  </Text>
                )}
              </Colors>
            </ColorsContainer>
          )}

          <Text type="labelMedium" css={{ color: '$blackGrey' }}>
            {price}
          </Text>
        </>
      }
    />
  );
};
