import { INTERNAL_REQUEST_HEADER_KEY } from '@constants';
import { appConfig } from '@lib/appConfig';
import { httpPost } from './utils';
import { internalRequestPost } from './internalRequestPost';

jest.mock('./utils', () => ({
  httpPost: jest.fn(),
}));

describe('internalRequestPost', () => {
  const mockUrl = '/test';
  const mockData = { id: 123 };
  const mockHeaders = {
    [INTERNAL_REQUEST_HEADER_KEY]: appConfig.APP.APP_INTERNAL_REQUEST_TOKEN,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call httpPost with the correct arguments', async () => {
    await internalRequestPost(mockUrl, mockData);

    expect(httpPost).toHaveBeenCalledTimes(1);
    expect(httpPost).toHaveBeenCalledWith(
      `${appConfig.APP.ORIGIN}${mockUrl}`,
      mockData,
      mockHeaders
    );
  });
});
