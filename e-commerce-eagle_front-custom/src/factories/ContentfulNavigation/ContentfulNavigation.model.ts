import { NAVIGATION_LIST_TYPES } from '@constants';
import { ContentfulLinkFactory } from '@factories/ContentfulLink/ContentfulLink.factory';
import { ContentfulBynderImage } from '@models/ContentfulBynderImage/ContentfulBynderImage.model';

class ContentfulNavigationCategoryModel
  implements IContentfulNavigationCategoryModel
{
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
  listType: string | undefined;

  constructor({ fields }: TCommonObject, absoluteLinks?: boolean) {
    const { image, categoryId, name, lightLogo, subcategories } = fields;
    this.id = categoryId;
    this.name = name;
    this.image = new ContentfulBynderImage(image);
    this.lightLogo = lightLogo || false;
    this.subcategories = this._extractSubcategories(
      subcategories,
      absoluteLinks
    );
    this.listType;
  }

  _extractSubcategories(
    subcategories: ContentfulEntryProps<
      TContentfulNavigationCategoryFieldsData | IContentfulLinkDataFields
    >[],
    absoluteLinks?: boolean
  ) {
    if (!subcategories) return;
    return subcategories.map(
      (
        subcategory: ContentfulEntryProps<
          TContentfulNavigationCategoryFieldsData | IContentfulLinkDataFields
        >
      ) => {
        const isLink = (subcategory.fields as IContentfulLinkDataFields)
          .linkType;
        if (!isLink) {
          this.listType = NAVIGATION_LIST_TYPES.TABS;
          return new ContentfulNavigationSubCategoryModel(
            subcategory as ContentfulEntryProps<TContentfulNavigationCategoryFieldsData>,
            absoluteLinks
          );
        }
        this.listType = NAVIGATION_LIST_TYPES.LINKS;
        const { data } = new ContentfulLinkFactory(
          subcategory as ContentfulEntryProps<IContentfulLinkDataFields>,
          absoluteLinks
        );
        return data;
      }
    );
  }
}

class ContentfulNavigationSubCategoryModel
  extends ContentfulNavigationCategoryModel
  implements IContentfulNavigationSubCategoryModel
{
  editTitle: string;
  editLinks: (TContentfulLinkProps | undefined)[] | undefined;

  constructor(
    { fields }: ContentfulEntryProps<TContentfulNavigationCategoryFieldsData>,
    absoluteLinks?: boolean
  ) {
    super({ fields }, absoluteLinks);
    const { editTitle, editLinks } = fields;
    this.editTitle = editTitle;
    this.editLinks = this._extractEditLinks(editLinks, absoluteLinks);
  }

  _extractEditLinks(
    editLinks: ContentfulEntryProps<IContentfulLinkDataFields>[],
    absoluteLinks?: boolean
  ) {
    if (!editLinks) return;
    return editLinks.map((link) => {
      const { data } = new ContentfulLinkFactory(link, absoluteLinks);
      return data;
    });
  }
}

export class ContentfulNavigationModel implements IContentfulNavigationModel {
  categories: ContentfulNavigationCategoryModel[] | undefined;
  links: (TContentfulLinkProps | undefined)[] | undefined;

  constructor(
    { generalLinks, navigation }: IContentfulNavigationData,
    absoluteLinks?: boolean
  ) {
    this.links = this._extractGeneralLinks(generalLinks, absoluteLinks);
    this.categories = this._extractNavCategories(navigation, absoluteLinks);
  }

  _extractNavCategories(
    navigation: TContentfulNavigationFieldsData,
    absoluteLinks?: boolean
  ) {
    if (!navigation) return;
    const { fields } = navigation;
    const { categoryItems } = fields;
    return categoryItems.map(
      (category: TContentfulNavigationCategoryFieldsData) =>
        new ContentfulNavigationCategoryModel(category, absoluteLinks)
    );
  }

  _extractGeneralLinks(
    generalLinks: ContentfulEntryProps<IContentfulLinkDataFields>[],
    absoluteLinks?: boolean
  ) {
    if (!generalLinks) return;
    return generalLinks.map((link) => {
      const { data } = new ContentfulLinkFactory(link, absoluteLinks);
      return data;
    });
  }
}
