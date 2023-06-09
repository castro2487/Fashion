import { ContentfulFactory } from '../Contentful/Contentful.factory';
import { ContentfulLinkFactory } from './ContentfulLink.factory';
import {
  CONTENTFUL_LINK_TYPE_CATEGORY_PAGE_RESPONSE_MOCK,
  CONTENTFUL_LINK_TYPE_CONTENT_PAGE_RESPONSE_MOCK,
} from './__mock__/ContentfulLink.mock';

describe('ContentfulLinkFactory tests', () => {
  it('should map raw ContentfulLink data with category page to a model and define linkUrl', () => {
    // In the assumption that link data will not be requested directly but will be part of parent content, such as navigation, we want to mimic the fields data resolve process.
    const mergedLinkData =
      new ContentfulFactory().extractComponentRefFieldsData(
        CONTENTFUL_LINK_TYPE_CATEGORY_PAGE_RESPONSE_MOCK
      );

    const referenceFieldData = { fields: { ...mergedLinkData } };

    const expected = {
      linkDisplayName: 'Stores',
      linkType: 'Category',
      linkColor: 'Light',
      linkDisplayType: 'Text',
      image: {},
      linkCategory: 'readyToWear',
      linkUrl: 'readyToWear',
      linkOpenInNewTab: false,
      linkId: 'stores',
    };

    const { data } = new ContentfulLinkFactory(referenceFieldData as any);
    expect(data).toEqual(expected);
  });

  it('should map raw ContentfulLink data with content page to a model and define linkUrl', () => {
    // In the assumption that link data will not be requested directly but will be part of parent content, such as navigation, we want to mimic the fields data resolve process.
    const mergedLinkData =
      new ContentfulFactory().extractComponentRefFieldsData(
        CONTENTFUL_LINK_TYPE_CONTENT_PAGE_RESPONSE_MOCK
      );

    const referenceFieldData = { fields: { ...mergedLinkData } };

    const expected = {
      linkDisplayName: 'Stores',
      linkType: 'Content Page',
      linkDisplayType: 'Text',
      image: {},
      linkColor: 'Light',
      linkContentPage: 'first-content-page',
      linkUrl: 'first-content-page',
      linkOpenInNewTab: false,
      linkId: 'stores',
      image: {},
    };

    const { data } = new ContentfulLinkFactory(referenceFieldData as any);
    expect(data).toEqual(expected);
  });

  it('should return a link object with absolute paths based on absoluteLinks argument', () => {
    // In the assumption that link data will not be requested directly but will be part of parent content, such as navigation, we want to mimic the fields data resolve process.
    const mergedLinkData =
      new ContentfulFactory().extractComponentRefFieldsData(
        CONTENTFUL_LINK_TYPE_CONTENT_PAGE_RESPONSE_MOCK
      );

    const referenceFieldData = { fields: { ...mergedLinkData }, sys: {} };
    const expected = {
      linkColor: 'Light',
      image: {},
      linkContentPage: 'first-content-page',
      linkDisplayName: 'Stores',
      linkDisplayType: 'Text',
      linkId: 'stores',
      linkOpenInNewTab: false,
      linkType: 'Content Page',
      linkUrl: 'https://www.alexandermcqueen.com/first-content-page',
    };

    const absoluteLinks = true;

    const { data } = new ContentfulLinkFactory(
      referenceFieldData as any,
      absoluteLinks
    );
    expect(data).toEqual(expected);
  });
});
