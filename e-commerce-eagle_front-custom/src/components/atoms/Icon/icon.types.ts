import { IconName } from '@functional/DynamicIconsMap';

declare module '@amq' {
  type IconProps = {
    iconName: IconName;
    iconWrapperCSS?: StichesCSS;
  } & DynamicIconProps;
}

export {};
