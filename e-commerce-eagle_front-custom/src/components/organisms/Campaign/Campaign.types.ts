import { StyledContainer } from './Campaign.styles';

declare module '@amq' {
  interface TCampaignProps
    extends React.ComponentProps<typeof StyledContainer> {
    id: string;
    heading: HeadingProps;
    asset: ImageProps;
    productTiles?: ICampaignProductTile[];
  }
}
