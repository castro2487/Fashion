export class ContentfulRichTextModel implements IContentfulRichTextModel {
  data: TRichTextNodeData = {};
  nodeType = 'document';
  content: ITopLevelBlock[] = [];
  constructor(data: IContentfulRichTextData) {
    if (!data) return;
    const { value } = data;
    this.data = value.data;
    this.content = value.content;
    this.nodeType = value.nodeType;
  }
}
