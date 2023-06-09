import { httpPost } from './httpPost';
import { HTTP_METHODS } from '@constants/http';
import fetchMock, { FetchMock } from 'jest-fetch-mock';

describe('httpPost function', () => {
  let fetch: FetchMock;

  beforeAll(() => {
    fetchMock.enableMocks();
  });

  beforeEach(() => {
    fetch = fetchMock.mockIf(
      (req: Request) => true,
      (req: any) => {
        return Promise.resolve({
          body: req.body,
          headers: req.headers,
          status: 200,
        });
      }
    );
  });

  afterEach(() => {
    fetch.resetMocks();
  });

  it('should call fetch with correct method and data', async () => {
    const url = 'https://example.com';
    const data = { message: 'hello world' };
    const headers = { 'Content-Type': 'application/json' };

    await httpPost(url, data, headers);

    expect(fetch).toHaveBeenCalledWith(url, {
      method: HTTP_METHODS.POST,
      headers,
      body: JSON.stringify(data),
    });
  });

  it('should call fetch with empty body if data is not provided', async () => {
    const url = 'https://example.com';
    const headers = { 'Content-Type': 'application/json' };

    await httpPost(url, {}, headers);

    expect(fetch).toHaveBeenCalledWith(url, {
      method: HTTP_METHODS.POST,
      headers,
      body: '{}',
    });
  });

  it('should return response object with correct values', async () => {
    const url = 'https://example.com';
    const data = { message: 'hello world' };
    const headers = { 'Content-Type': 'application/json' };
    const expectedBody = JSON.stringify(data);
    const expectedResponse = new Response(expectedBody, {
      status: 200,
      headers: new Headers(headers),
    });
    const response = await httpPost(url, data, headers);

    expect(response.headers.get('Content-Type')).toEqual(
      expectedResponse.headers.get('Content-Type')
    );
    expect(response.status).toEqual(expectedResponse.status);
    expect(await response.text()).toEqual(expectedBody);
  });
});
