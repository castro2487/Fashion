import { ImageProps } from 'next/image';
import { FramedTextProps } from '@components/molecules/FramedText/FramedText.types';

declare module '@amq' {
  type SlideContent = {
    id: string;
    content: ImageProps | FramedTextProps;
  };

  interface SliderProps {
    slides: SlideContent[];
  }
}
