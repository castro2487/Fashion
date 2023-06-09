import { StichesCSS } from '@amq';

export interface ZoomProps {
  onClickZoomIn: () => void;
  onClickZoomOut: () => void;
  disabled?: boolean;
  css?: StichesCSS;
  className?: string;
}
