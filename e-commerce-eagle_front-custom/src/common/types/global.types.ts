import { ImageProps as NextImageProps } from 'next/image';

declare module '@amq' {
  type ImageProps = NextImageProps;

  type BynderImageProps = {
    src: string;
    alt: string;
  };

  type TContentfulBynderImageUnmapped = {
    imageUrl: string;
    imageAltText: string;
  };
}
