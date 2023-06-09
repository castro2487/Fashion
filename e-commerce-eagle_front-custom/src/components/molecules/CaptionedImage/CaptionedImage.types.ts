import { ImageProps } from 'next/image';
import { Figure } from './CaptionedImage.styles';

export interface CaptionedImageProps
  extends Omit<React.ComponentProps<typeof Figure>, 'padding'> {
  image: ImageProps;
}
