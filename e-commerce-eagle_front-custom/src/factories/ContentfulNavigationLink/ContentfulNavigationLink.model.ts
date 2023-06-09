import { ContentfulBynderImage } from '@models/ContentfulBynderImage/ContentfulBynderImage.model';
import { ContentfulLinkModel } from '../ContentfulLink/ContentfulLink.model';

export class ContentfulNavigationLinkModel
  extends ContentfulLinkModel
  implements IContentfulNavigationLinkModel
{
  lightLogo: boolean;
  image: any;

  constructor(
    referenceFieldData: IContentfulLinkData,
    absoluteLinks?: boolean
  ) {
    const { image, lightLogo, linkProps } = referenceFieldData;
    super(linkProps, absoluteLinks);
    this.image = this._mapImage(image as TContentfulEntry);
    this.lightLogo = lightLogo || false;
  }

  _mapImage(
    imageAsset: ContentfulAssetProps<ContentfulAssetSingleFieldsProps>
  ) {
    if (!imageAsset || !imageAsset.fields) return undefined;
    const { fields } = imageAsset;
    const { src } = new ContentfulBynderImage(fields as any);
    return src;
  }
}
