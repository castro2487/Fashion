import { LINK_ITEM_TYPES } from '@constants';
import { ContentfulBynderImage } from '@models/ContentfulBynderImage/ContentfulBynderImage.model';
import { getEnvValue } from '@lib/utils';

export class ContentfulLinkModel implements IContentfulLinkModel {
  linkDisplayName!: string;
  linkType!: string;
  linkCategory?: string | undefined;
  linkContentPage?: string | undefined;
  linkUrl?: string;
  linkDisplayType!: string;
  linkDisplayIcon?: string;
  linkId!: string;
  linkColor?: 'Light' | 'Dark' | undefined;
  linkOpenInNewTab!: boolean;
  image?: IContentfulBynderImageProps;
  absoluteLinks?: boolean;

  constructor(data: IContentfulLinkDataFields, absoluteLinks?: boolean) {
    if (!data) return;
    const {
      linkDisplayName,
      linkType,
      linkCategory,
      linkContentPage,
      linkUrl,
      linkDisplayType,
      linkDisplayIcon,
      linkId,
      linkColor,
      linkOpenInNewTab,
      image,
    } = data;
    this.linkDisplayName = linkDisplayName;
    this.linkType = linkType;
    this.linkCategory = this._extractLinkCategory(linkCategory);
    this.linkContentPage = this._extractLinkContentPage(linkContentPage);
    this.linkUrl = this._defineLinkUrl(linkUrl, linkType, absoluteLinks);
    this.linkDisplayType = linkDisplayType;
    this.linkDisplayIcon = linkDisplayIcon;
    this.linkId = linkId;
    this.linkColor = linkColor;
    this.linkOpenInNewTab = linkOpenInNewTab;
    this.image = new ContentfulBynderImage(image);
  }

  _extractLinkCategory(linkCategory: ContentfulEntryProps | undefined) {
    return linkCategory && linkCategory.fields
      ? linkCategory.fields.categoryId
      : undefined;
  }

  _extractLinkContentPage(linkContentPage: ContentfulEntryProps | undefined) {
    return linkContentPage && linkContentPage.fields
      ? linkContentPage.fields.slug
      : undefined;
  }
  _prependAbsolutePath(linkDefinition: string) {
    const absolutePrepend = getEnvValue('APP_ORIGIN');
    try {
      new URL(absolutePrepend);
      return `${absolutePrepend}/${linkDefinition}`;
    } catch (error) {
      return linkDefinition;
    }
  }
  //TODO: this logic needs to be improved after we will finalize all URL models
  _defineLinkUrl(linkUrl?: string, linkType?: string, absoluteLinks?: boolean) {
    let linkDefinition = '';
    switch (linkType) {
      // link value is content page slug
      case LINK_ITEM_TYPES.CONTENT_PAGE:
        {
          if (this.linkContentPage)
            linkDefinition = linkDefinition.concat(this.linkContentPage);
        }
        break;
      // link value is categoryId
      case LINK_ITEM_TYPES.CATEGORY:
        {
          if (this.linkCategory)
            linkDefinition = linkDefinition.concat(this.linkCategory);
        }
        break;
      case LINK_ITEM_TYPES.EXTERNAL:
        {
          if (linkUrl) linkDefinition = linkUrl;
        }
        break;
    }
    // if the page is external or link does not need to be absolute url return as slug
    if (!absoluteLinks || linkType === LINK_ITEM_TYPES.EXTERNAL) {
      return linkDefinition;
    }
    return this._prependAbsolutePath(linkDefinition);
  }
}
