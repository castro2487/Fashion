interface TContentfulNavigationCategoryFieldsData extends IContentfulData {
  name: string;
  categoryId: string;
  subcategories: ContentfulEntryProps<
    (TContentfulNavigationCategoryFieldsData | IContentfulLinkDataFields)[]
  >;
  editTitle: string;
  editLinks: ContentfulEntryProps<IContentfulLinkDataFields>[];
  lightLogo: boolean;
  image: TContentfulBynderImageData;
  isHotCategory: boolean;
  associatedColdCategories: ContentfulEntryProps<
    TContentfulNavigationCategoryFieldsData[]
  >;
  associatedProductIds: string;
}

interface IContentfulNavigationCategoryData extends IContentfulData {
  name: string;
  categoryItems: TContentfulNavigationCategoryFieldsData[];
}

type TContentfulNavigationFieldsData =
  ContentfulEntryProps<IContentfulNavigationCategoryData>;

interface IContentfulNavigationData extends IContentfulData {
  generalLinks: ContentfulEntryProps<IContentfulLinkDataFields>[];
  navigation: TContentfulNavigationFieldsData;
}

interface IContentfulNavigationSubCategoryModel
  extends IContentfulNavigationCategoryModel {
  editTitle: string;
  editLinks: (TContentfulLinkProps | undefined)[] | undefined;
}
interface IContentfulNavigationCategoryModel {
  id: string;
  name: string;
  image: IContentfulBynderImageProps;
  lightLogo: boolean;
  subcategories:
    | (
        | ContentfulNavigationSubCategoryModel
        | TContentfulLinkProps
        | undefined
      )[]
    | undefined;
  listType?: string;
}

interface IContentfulNavigationModel {
  categories: ContentfulNavigationCategoryModel[] | undefined;
  links: (TContentfulLinkProps | undefined)[] | undefined;
}

type TContentfulNavigationProps = IContentfulNavigationModel;

interface IContentfulNavigationFactory extends ContentfulFactory {
  _model?: ContentfulNavigationModel;
  data?: TContentfulNavigationProps;
}
