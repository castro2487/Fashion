import { ContentfulFooterService } from '@services/ContentfulFooter/ContentfulFooter.service';
import { ContentfulFactory } from '@factories/Contentful/Contentful.factory';
import { ContentfulNavigationLinkFactory } from '@factories/ContentfulNavigationLink/ContentfulNavigationLink.factory';

enum FooterContentType {
  ServiceLinkItems = 'serviceLinkItems',
  ExclusiveServices = 'exclusiveServices',
}

export class ContentfulFooterFactory
  extends ContentfulFactory
  implements IContentfulFooterFactory
{
  _name = 'ContentfulFooterFactory';
  _langContext: string;
  _footerService;
  _contentTypeData?: IRedisContentfulEntryReferenceProps;
  _contentRefFieldsData: ContentfulFlattenReferenceFields[] = [];
  _flattenContentRefFieldsData: ContentfulFlattenReferenceFields[] = [];
  data: TCommonObject = {};

  constructor(langContext: string) {
    super();
    this._langContext = langContext;
    this._footerService = new ContentfulFooterService(this._langContext);
  }

  async _getFooterContentData() {
    return await this._footerService.getFooterData();
  }

  async mapEntriesData(absoluteLinks?: boolean) {
    this._flattenContentRefFieldsData?.forEach(
      (fieldData: ContentfulEntryProps) => {
        if (!fieldData.fields && Object.keys(fieldData || {}).length === 1) {
          this.data = {
            ...this.data,
            ...fieldData,
          };
        } else {
          const id = fieldData.sys.contentType.sys.id;
          switch (id) {
            case FooterContentType.ServiceLinkItems:
            case FooterContentType.ExclusiveServices: {
              const { linkItem, linkItems, ...restFields } =
                fieldData.fields || {};

              const items = [...(linkItem || []), ...(linkItems || [])].map(
                (link) => {
                  if (link.sys.contentType.sys.id === 'linkItem') {
                    const navigationLinkFactoryInstance =
                      new ContentfulNavigationLinkFactory(link, absoluteLinks);
                    return navigationLinkFactoryInstance.getNavLinkObject();
                  }
                  return link;
                }
              );
              this.data = {
                ...this.data,
                linkItems: [
                  ...(this.data?.linkItems || []),
                  {
                    ...restFields,
                    id,
                    linkItem: items,
                  },
                ],
              };

              break;
            }
            default:
              this.data = {
                ...this.data,
                ...(id && fieldData.fields ? { [id]: fieldData.fields } : {}),
              };

              break;
          }
        }
      }
    );
  }

  getFooterObject() {
    const serialized = this.serializeObject(this.data);
    return serialized;
  }

  async initialize(lang?: string, absoluteLinks?: boolean) {
    if (lang) {
      this._langContext = lang;
      this._footerService = new ContentfulFooterService(this._langContext);
    }
    this._contentTypeData = await this._footerService.getFooterData();
    if (!this._contentTypeData) return;
    this._contentRefFieldsData = this.extractComponentRefFieldsData(
      this._contentTypeData
    );
    this._flattenContentRefFieldsData = this.flattenReferenceFieldsModel(
      this._contentRefFieldsData
    );
    await this.mapEntriesData(absoluteLinks);
  }
}
