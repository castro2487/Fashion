'use client';
import React from 'react';

import { Image } from '@atoms/Image';

import { Figure, Figcaption } from './CaptionedImage.styles';
import { CaptionedImageProps } from './CaptionedImage.types';

export const CaptionedImage = ({
  image,
  children,
  ...props
}: CaptionedImageProps) => (
  <Figure
    {...props}
    padding={{ '@initial': 'm', '@bp1': 'xl', '@bp2': 'l', '@bp3': 'l' }}
  >
    <Image layout="responsive" {...image} />
    <Figcaption
      textAlign={{ '@bp2': 'left', '@bp3': 'left' }}
      maxWidth={{ '@bp2': false, '@bp3': false }}
    >
      {children}
    </Figcaption>
  </Figure>
);
