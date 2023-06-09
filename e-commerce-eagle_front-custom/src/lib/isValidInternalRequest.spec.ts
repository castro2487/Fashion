import { NextApiRequest, NextApiResponse } from 'next';
import { INTERNAL_REQUEST_HEADER_KEY } from '@constants/index';
import { appConfig } from '@lib/appConfig';
import { isValidInternalRequest } from './isValidInternalRequest';

describe('isValidInternalRequest', () => {
  const mockRequest = {} as NextApiRequest;
  const mockCallback = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should call the callback function if the internal request token is valid', async () => {
    const internalToken = appConfig.APP.APP_INTERNAL_REQUEST_TOKEN;
    mockRequest.headers = {
      [INTERNAL_REQUEST_HEADER_KEY]: internalToken,
    };
    const mockResponse = {
      status: jest.fn(),
    } as unknown as NextApiResponse;

    await isValidInternalRequest(mockRequest, mockResponse, mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).not.toHaveBeenCalled();
  });

  it('should return a 403 error response if the internal request token is invalid', async () => {
    mockRequest.headers = {
      [INTERNAL_REQUEST_HEADER_KEY]: 'invalid-token',
    };
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await isValidInternalRequest(mockRequest, mockResponse, mockCallback);

    expect(mockCallback).not.toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith({
      statusText: 'Permission Denied',
    });
  });
});
