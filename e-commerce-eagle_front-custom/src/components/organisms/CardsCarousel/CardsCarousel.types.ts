import { Swiper } from 'swiper/react';
import { StyledContainer } from './CardsCarousel.styles';

declare module '@amq' {
  interface CardsCarouselProps
    extends Omit<
      React.ComponentProps<typeof StyledContainer>,
      'noCarousel' | 'oneCard'
    > {
    id: string;
    title: string;
    subtitle?: React.ReactNode;
    cta?: AMQ.TLink;
    children?: React.ReactNode;
    empty?: React.ReactNode;
    variant?: 'primary' | 'secondary';
  }

  type SwiperVariantsProps = {
    [variant: string]: React.ComponentProps<typeof Swiper>;
  };
}
