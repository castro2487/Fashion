interface IContentfulLinkFactory extends IFactory {
  _name: string;
  _model?: ContentfulLinkModel;
  data?: TCommonObject;
}

type ContentfulLink = Record<string, IContentfulLinkModel>;

interface IContentfulLinkDataFields {
  linkDisplayName: string;
  linkType: string;
  linkCategory?: ContentfulEntryProps | undefined;
  linkContentPage?: ContentfulEntryProps | undefined;
  linkUrl?: string;
  linkDisplayType: string;
  linkDisplayIcon?: string;
  linkId: string;
  linkColor?: 'Light' | 'Dark' | undefined;
  linkOpenInNewTab: boolean;
  lightLogo: boolean;
  image: TContentfulBynderImageData;
  linkBynderImage?: IBynderImageContentfulData;
}

interface IContentfulLinkData extends IContentfulData {
  fields: IContentfulLinkDataFields;
  linkProps: any;
}

interface IContentfulLinkModel {
  linkDisplayName: string;
  linkType: string;
  linkCategory?: string | undefined;
  linkContentPage?: string | undefined;
  linkUrl?: string;
  linkDisplayType: string;
  linkDisplayIcon?: string;
  linkId: string;
  linkColor?: 'Light' | 'Dark' | undefined;
  linkOpenInNewTab: boolean;
  absoluteLinks?: boolean;
  image?: IContentfulBynderImageProps;
}

type TContentfulLinkProps = {
  linkDisplayName: string;
  linkId: string;
  linkUrl: string;
  linkDisplayType: string;
  linkColor?: 'Light' | 'Dark' | undefined;
  linkDisplayIcon?: string;
  linkOpenInNewTab: boolean;
  image: IContentfulBynderImageProps;
};
