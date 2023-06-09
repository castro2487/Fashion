'use client';
import React from 'react';
import NextImage, { type ImageProps } from 'next/image';

export const Image = ({ src, alt, ...props }: ImageProps) => {
  return (
    <NextImage
      src={src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      quality={100}
      {...props}
    />
  );
};
