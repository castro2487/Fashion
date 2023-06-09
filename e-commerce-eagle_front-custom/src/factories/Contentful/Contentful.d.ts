interface IContentfulFactory extends IFactory {
  _name: string;
  serializeObject: (obj: TCommonObject) => TCommonObject;
  covertEntryNameToObjKey: (string) => string;
  flattenReferenceFieldsModel: (
    contentfulEntryReference: TCommonObject
  ) => ContentfulFlattenReferenceFields;
  extractComponentRefFieldsData: (
    contentfulEntry: IRedisContentfulEntryReferenceProps | TCommonObject
  ) => ContentfulFlattenReferenceFields;
}

interface IContentfulModel {
  _name: string;
}

interface SysLink {
  sys: MetaLinkProps;
}

interface EntityMetaSysProps extends MetaSysProps {
  space: SysLink;
  revision: number;
  contentType: SysLink;
  environment: SysLink;
  publishedBy?: Link<'User'> | Link<'AppDefinition'>;
  publishedAt?: string;
  firstPublishedAt?: string;
  publishedCounter?: number;
  locale?: string;
  linkType: string;
}

interface CollectionProp<TObj> {
  sys: {
    type: 'Array';
  };
  total: number;
  skip: number;
  limit: number;
  items: TObj[];
}

interface BasicMetaSysProps {
  type: string;
  id: string;
  version?: number;
  createdBy?: SysLink;
  createdAt: string;
  updatedBy?: SysLink;
  updatedAt: string;
}

interface MetaSysProps extends BasicMetaSysProps {
  space?: SysLink;
  status?: SysLink;
  publishedVersion?: number;
  archivedVersion?: number;
  archivedBy?: SysLink;
  archivedAt?: string;
  deletedVersion?: number;
  deletedBy?: SysLink;
  deletedAt?: string;
}

interface EntryMetaSysProps extends EntityMetaSysProps {
  automationTags?: Link<'Tag'>[];
}

// Asset types
interface ContentfulAssetSingleFieldsProps {
  title: string;
  description?: string;
  linkItem?: ContentfulEntryProps<IContentfulLinkDataFields>;
  [];
  linkItems?: ContentfulEntryProps<IContentfulLinkDataFields>;
  [];
  file: {
    fileName: string;
    contentType: string;
    upload?: string;
    url?: string;
    details?: TCommonObject;
    uploadFrom?: TCommonObject;
  };
}
interface ContentfulAssetMultiFieldsProps {
  sys: Omit<EntityMetaSysProps, 'contentType'>;
  linkItem?: ContentfulEntryProps<IContentfulLinkDataFields>;
  [];
  linkItems?: ContentfulEntryProps<IContentfulLinkDataFields>;
  [];
  fields: {
    title: TDataObject<string>;
    description?: TDataObject<string>;
    file: {
      fileName: string;
      contentType: string;
      upload?: string;
      url?: string;
      details?: TCommonObject;
      uploadFrom?: TCommonObject;
    };
  };
  metadata?: MetadataProps;
}

interface ContentfulAssetProps<
  T = ContentfulAssetSingleFieldsProps | ContentfulAssetMultiFieldsProps
> {
  sys: Omit<EntityMetaSysProps, 'contentType'>;
  fields: T;
  metadata?: MetadataProps;
}

type TContentfulEntry = ContentfulEntryProps<ContentfulAssetSingleFieldsProps>;

// Entry types
interface ContentfulEntryProps<T = TCommonObject> {
  sys: EntryMetaSysProps;
  metadata?: MetadataProps;
  fields: T;
}

interface EntryReferenceError {
  sys: {
    type: 'error';
    id: 'notResolvable';
  };
  details: {
    type: 'Link';
    linkType: 'Entry' | 'Asset';
    id: string;
  };
}

interface IContentfulEntryReferenceProps
  extends CollectionProp<ContentfulEntryProps> {
  includes?: {
    Entry?: ContentfulEntryProps[];
    Asset?: ContentfulAssetProps[];
  };
  errors?: EntryReferenceError[];
}

interface IRedisContentfulEntryReferenceProps
  extends IContentfulEntryReferenceProps {
  revalidatedAt: string;
}

interface ContentfulEntryReferenceFiled<> {
  name: string;
  id: sting;
}

type ContentfulEntryReferenceFields<T = ContentfulEntryReferenceFiled> =
  | T[]
  | [];

type ContentfulFlattenReferenceFields = TCommonObject | Array | [];

interface IContentfulLinkData {
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
  image: ContentfulAssetProps;
  sys: EntryMetaSysProps;
}

// COMMON INTERFACES AFTER PAGE ARCH INTRODUCTION

interface IContentfulData extends SysLink {
  internalName?: string;
}
interface IContentfulHeadingProps {
  label?: string;
  title?: string;
  subtitle?: string;
}
type IContentfulTile = ContentfulEntryProps<IContentfulBannerData>;
