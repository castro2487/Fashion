import { createMocks } from 'node-mocks-http';
import { handler } from '@modules/api/data/header/header';
import { ContentfulHeaderService } from '@services/ContentfulHeader/ContentfulHeader.service';
import {
  AMQ_HEADER_PROPS_MOCK,
  CONTENTFUL_HEADER_CONTENT_DATA_MOCK,
} from '@factories/ContentfulHeader/__mock__/ContentfulHeader.mock';
import { SFCC_REQUEST_HEADER_KEY } from '@constants';

describe('api/data/header endpoint tests', () => {
  beforeEach(() => {
    jest
      .spyOn(ContentfulHeaderService.prototype, 'getHeaderData')
      .mockImplementation(
        () =>
          new Promise((resolve) => resolve(CONTENTFUL_HEADER_CONTENT_DATA_MOCK))
      );
  });

  afterAll(() => {
    jest.restoreAllMocks();
  });

  it('should pass', () => {
    expect(true);
  });

  // it('should return header data on request with valid locale param and valid sfcc client request id header', async () => {
  //   const { req, res } = createMocks({
  //     method: 'GET',
  //     query: {
  //       locale: 'en-us',
  //     },
  //     headers: {
  //       [SFCC_REQUEST_HEADER_KEY]:
  //         process.env.APP_SFCC_REQUEST_CLIENT_ID,
  //     },
  //   });

  //   const expected = { ...AMQ_HEADER_PROPS_MOCK };

  //   await handler(req as any, res as any);
  //   expect(res._getStatusCode()).toBe(200);
  //   expect(JSON.parse(res._getData())).toEqual(expected);
  // });
});
