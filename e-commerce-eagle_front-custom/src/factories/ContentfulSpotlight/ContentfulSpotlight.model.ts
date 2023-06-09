import { ContentfulLinkFactory } from '@factories/ContentfulLink/ContentfulLink.factory';

export class ContentfulSpotlightModel implements IContentfulSpotlightModel {
  internalName?: string;
  id?: string;
  links: TContentfulLinkProps[];

  constructor(contentfulSpotlightData: IContentfulSpotlightData) {
    this.links = contentfulSpotlightData?.links.map(
      (link: IContentfulLinkData) => {
        const { data } = new ContentfulLinkFactory(link);
        return data;
      }
    );
    this.id = contentfulSpotlightData?.internalName || '';
  }
}
