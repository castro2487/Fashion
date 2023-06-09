import { NextApiRequest, NextApiResponse } from 'next';
import { SFCC_REQUEST_HEADER_KEY } from '@constants/index';
import { isValidSFCCRequest } from '@lib/isValidSFCCRequest';
import { appConfig } from '@lib/appConfig';

describe('isValidInternalRequest tests', () => {
  const processEnvBackup = { ...process.env };
  const mockRequest = {} as NextApiRequest;
  const mockCallback = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    process.env = { ...processEnvBackup }; // Restore old environment
  });

  it('should call the callback function if the sfcc client id is valid', async () => {
    const sfccClient = appConfig.APP.APP_SFCC_REQUEST_CLIENT_ID;

    mockRequest.headers = {
      [SFCC_REQUEST_HEADER_KEY]: sfccClient,
    };
    const mockResponse = {
      status: jest.fn(),
    } as unknown as NextApiResponse;

    await isValidSFCCRequest(mockRequest, mockResponse, mockCallback);

    expect(mockCallback).toHaveBeenCalledTimes(1);
    expect(mockResponse.status).not.toHaveBeenCalled();
  });

  it('should not call the callback function if the sfcc client id is not valid', async () => {
    mockRequest.headers = {
      [SFCC_REQUEST_HEADER_KEY]: 'invalid',
    };
    const mockResponse = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    } as unknown as NextApiResponse;

    await isValidSFCCRequest(mockRequest, mockResponse, mockCallback);

    expect(mockCallback).not.toHaveBeenCalled();
    expect(mockResponse.status).toHaveBeenCalledWith(403);
    expect(mockResponse.json).toHaveBeenCalledWith({
      statusText: 'Permission Denied',
    });
  });
});
