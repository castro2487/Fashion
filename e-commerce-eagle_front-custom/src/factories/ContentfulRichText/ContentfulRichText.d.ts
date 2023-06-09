const enum INLINE_TYPES {
  HYPERLINK = 'hyperlink',
  ENTRY_HYPERLINK = 'entry-hyperlink',
  ASSET_HYPERLINK = 'asset-hyperlink',
  EMBEDDED_ENTRY = 'embedded-entry-inline',
}

const enum BLOCKS {
  DOCUMENT = 'document',
  PARAGRAPH = 'paragraph',
  HEADING_1 = 'heading-1',
  HEADING_2 = 'heading-2',
  HEADING_3 = 'heading-3',
  HEADING_4 = 'heading-4',
  HEADING_5 = 'heading-5',
  HEADING_6 = 'heading-6',
  OL_LIST = 'ordered-list',
  UL_LIST = 'unordered-list',
  LIST_ITEM = 'list-item',
  HR = 'hr',
  QUOTE = 'blockquote',
  EMBEDDED_ENTRY = 'embedded-entry-block',
  EMBEDDED_ASSET = 'embedded-asset-block',
  TABLE = 'table',
  TABLE_ROW = 'table-row',
  TABLE_CELL = 'table-cell',
  TABLE_HEADER_CELL = 'table-header-cell',
}
type TopLevelBlockEnum =
  | BLOCKS.PARAGRAPH
  | BLOCKS.HEADING_1
  | BLOCKS.HEADING_2
  | BLOCKS.HEADING_3
  | BLOCKS.HEADING_4
  | BLOCKS.HEADING_5
  | BLOCKS.HEADING_6
  | BLOCKS.OL_LIST
  | BLOCKS.UL_LIST
  | BLOCKS.HR
  | BLOCKS.QUOTE
  | BLOCKS.EMBEDDED_ENTRY
  | BLOCKS.EMBEDDED_ASSET
  | BLOCKS.TABLE;

type TRichTextNodeData = Record<string, any>;

interface IRichTextNode {
  readonly nodeType: string;
  data: TRichTextNodeData;
}
interface IRichTextBlock extends IRichTextNode {
  nodeType: BLOCKS;
  content: Array<IRichTextBlock | IRichTextInline | Text>;
}
interface IRichTextInline extends Node {
  nodeType: INLINE_TYPES;
  content: Array<IRichTextInline | Text>;
}
interface ITopLevelBlock extends IRichTextBlock {
  nodeType: TopLevelBlockEnum;
}

interface IContentfulRichTextData {
  internalName: string;
  value: IRichTextDocument;
}

interface IRichTextDocument extends IRichTextNode {
  nodeType: string;
  content: ITopLevelBlock[];
}

interface IContentfulRichTextModel extends IRichTextDocument {
  data: TRichTextNodeData;
}

interface IContentfulRichTexProps extends IRichTextDocument {
  data: TRichTextNodeData;
}

interface IContentfulRichTextFactory extends IContentfulFactory {
  model?: IContentfulRichTextModel;
  data?: IRichTextDocument;
}
