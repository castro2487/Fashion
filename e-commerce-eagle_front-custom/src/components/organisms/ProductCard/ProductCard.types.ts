declare module '@amq' {
  type ImageType = {
    src: string;
    alt: string;
  };
  interface ProductCardProps {
    title: string;
    label?: string;
    price: string;
    linkUrl: string;
    isDemo: boolean;
    colorsLabel?: string;
    extraColors?: string;
    colors?: {
      linkUrl: string;
      color: `#${string}`;
    }[];
    image: ImageType;
    asset?:
      | {
          src: string;
          type: string;
        }
      | ImageType;
  }
}
export {};
