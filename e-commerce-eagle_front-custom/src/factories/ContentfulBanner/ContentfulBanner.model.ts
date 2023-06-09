import { ContentfulLinkFactory } from '@factories/ContentfulLink/ContentfulLink.factory';
import { ContentfulRichTextFactory } from '@factories/ContentfulRichText/ContentfulRichText.factory';
import { ContentfulBynderImage } from '@models/ContentfulBynderImage/ContentfulBynderImage.model';
export class ContentfulBannerModel implements IContentfulBannerModel {
  title: string;
  variant: TContentfulBannerVariant;
  type: TContentfulBannerType;
  asset: IContentfulBynderImageProps;
  cta?: TContentfulLinkProps;
  ctaSecondary?: TContentfulLinkProps;
  align?: TContentfulBannerAlign;
  captionTitle?: string;
  captionSentence?: string;
  hotspotText?: IContentfulRichTextModel;

  constructor({
    title,
    variant,
    type,
    image,
    primaryCta,
    secondaryCta,
    align,
    captionTitle,
    captionSentence,
    hotspotText,
  }: IContentfulBannerData) {
    this.title = title;
    this.variant = variant;
    this.type = type;
    this.asset = new ContentfulBynderImage(image);
    this.cta = new ContentfulLinkFactory(primaryCta).data;
    this.ctaSecondary = new ContentfulLinkFactory(secondaryCta).data;
    this.align = align;
    this.captionTitle = captionTitle;
    this.captionSentence = captionSentence;
    this.hotspotText = new ContentfulRichTextFactory(hotspotText).data;
  }
}
