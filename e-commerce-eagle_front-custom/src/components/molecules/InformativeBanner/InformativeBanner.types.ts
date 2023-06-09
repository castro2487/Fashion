import { ReactNode, ComponentProps } from 'react';
import { AutoplayOptions } from 'swiper/types';

import { StyledContainer } from './InformativeBanner.styles';

export interface InformativeBannerProps
  extends ComponentProps<typeof StyledContainer> {
  children?: ReactNode;
  delay: AutoplayOptions['delay'];
}
