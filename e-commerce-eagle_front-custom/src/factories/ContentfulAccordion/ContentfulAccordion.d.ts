interface IContentfulAccordionFactory extends IContentfulFactory {
  _model?: IContentfulAccordionModel;
  data?: TContentfulAccordionProps;
}

interface IContentfulAccordionModel {
  name?: string;
  internalName?: string;
  title: string;
  contentItems: IDynamicComponentData[];
}

interface IContentfulAccordionData {
  internalName?: string;
  title?: string;
  contentItems?: IContentItem[];
}

interface IContentItem {
  sys: {
    id: string;
    contentType: {
      sys: {
        id: 'accordionComponent' | 'richText';
      };
    };
  };
  fields: {
    title?: string;
    value?: TCommonObject;
    contentItems?: IContentItem[];
  } & (
    | {
        title: string;
        contentItems: IContentItem[];
      }
    | {
        value: IRichTextDocument;
      }
  );
}
interface TContentfulAccordionProps {
  name?: string;
  internalName: string;
  title: string;
  contentItems: IDynamicComponentData[];
}

interface TDynamicAccordionProps {
  dynamicAccordionData: IContentfulAccordionData;
}
