interface IContentfulBannerFactory extends IContentfulFactory {
  _model?: IContentfulBannerModel;
  data?: TContentfulBannerProps;
}

type TContentfulBannerType = 'difference' | 'dark' | 'light';
type TContentfulBannerVariant = 'banner' | 'card' | 'padded';
type TContentfulBannerAlign = 'center' | 'bottom' | 'top';

interface IContentfulBannerData extends IContentfulData {
  title: string;
  variant: TContentfulBannerVariant;
  type: TContentfulBannerType;
  image: TContentfulBynderImageData;
  primaryCta?: IContentfulLinkData;
  secondaryCta?: IContentfulLinkData;
  align?: TContentfulBannerAlign;
  captionTitle?: string;
  captionSentence?: string;
  hotspotText?: IContentfulRichTextData;
}

interface IContentfulBannerModel {
  name?: string;
  title: string;
  variant: TContentfulBannerVariant;
  type: TContentfulBannerType;
  asset: IContentfulBynderImageProps;
  cta?: TContentfulLinkProps;
  ctaSecondary?: TContentfulLinkProps;
  align?: TContentfulBannerAlign;
  captionTitle?: string;
  captionSentence?: string;
  hotspotText?: TRichText;
}

type TContentfulBannerProps = IContentfulBannerModel;
