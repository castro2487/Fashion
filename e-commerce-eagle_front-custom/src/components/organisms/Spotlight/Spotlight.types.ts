declare module '@amq' {
  type SpotlightItem = IContentfulLinkModel & {
    linkBynderImage: ImageProps;
  };

  interface TSpotlightProps {
    id: string;
    links: SpotlightItem[];
  }
}

export {};
