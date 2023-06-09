export class ContentfulAccordionModel implements IContentfulAccordionModel {
  name?: string;
  internalName: string;
  title: string;
  contentItems: IDynamicComponent[];

  constructor(contentfulDataMap: IContentfulAccordionData) {
    this.internalName = contentfulDataMap?.internalName || '';
    this.title = contentfulDataMap?.title || '';
    this.contentItems = this.mapToLoaderComponents(
      contentfulDataMap?.contentItems
    );
  }

  generateDynamicComponentData(
    contentType: string,
    item: IContentItem
  ): IDynamicComponent {
    const componentData: IDynamicComponent = {
      componentType: contentType,
      componentId: item?.sys?.id,
      data: {},
    };

    switch (contentType) {
      case 'accordionComponent':
        componentData.data = {
          alignment: 'center',
          title: item?.fields?.title,
          contentItems:
            item?.fields?.contentItems &&
            this.mapToLoaderComponents(item?.fields?.contentItems),
        };
        break;
      case 'richText': {
        componentData.data = {
          richTextDocument: item?.fields?.value,
        };
        break;
      }
      default:
        break;
    }

    return componentData;
  }

  mapToLoaderComponents(
    contentItems: IContentItem[] | null = []
  ): IDynamicComponent[] {
    if (!contentItems?.length) {
      return [];
    }

    return contentItems.map((item: IContentItem) => {
      const contentType = item?.sys?.contentType?.sys?.id;
      const componentData = this.generateDynamicComponentData(
        contentType,
        item
      );
      return componentData;
    });
  }
}
