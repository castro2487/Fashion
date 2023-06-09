import { resolveRawComponentDataToFactory } from '@lib/utils/backend-only/test-helpers/resolveRawContentfulData';
import { ContentfulNavigationFactory } from './ContentfulNavigation.factory';
import {
  AMQ_NAVIGATION_PROPS_MOCK,
  CONTENTFUL_RAW_RESPONSE_NAVIGATION_DATA,
} from './__mock__/ContentfulNavigation.mock';

describe('ContentfulNavigationFactory tests', () => {
  it('should initialize ContentfulNavigationFactory and return navigation data', async () => {
    const expected = { ...AMQ_NAVIGATION_PROPS_MOCK };
    const { fields } = resolveRawComponentDataToFactory(
      CONTENTFUL_RAW_RESPONSE_NAVIGATION_DATA
    ) as TContentfulNavigationData;
    const { data } = new ContentfulNavigationFactory(fields);

    expect(data).toEqual(expected);
  });
});
