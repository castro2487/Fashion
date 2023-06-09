import { ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN } from '@constants';
import { getEnvValue } from './getEnvValue';

describe('Dot env variables loader tests', () => {
  it('should error with default message when it can not load the .env variable definition', () => {
    const expected =
      'Environment variable value for CONFIG_CONTENTFUL_DELIVERY_API_TWO is not defined.';
    try {
      getEnvValue('CONFIG_CONTENTFUL_DELIVERY_API_TWO');
    } catch (e: unknown) {
      if (e instanceof Error) {
        expect(e.message).toEqual(expected);
      }
    }
  });

  it('should error with custom message when it can not load the .env variable definition', () => {
    const expected = ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN;
    try {
      getEnvValue(
        'CONFIG_CONTENTFUL_DELIVERY_API_TOKEN',
        undefined,
        ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        expect(e.message).toEqual(expected);
      }
    }
  });

  it('should error with custom message when it can not load the .env variable definition', () => {
    const fallBackValue = ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN;
    try {
      getEnvValue(
        'CONFIG_CONTENTFUL_DELIVERY_API_TOKEN',
        fallBackValue,
        ERROR_LOAD_CONTENTFUL_PREVIEW_API_TOKEN
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        expect(e.message).toEqual(fallBackValue);
      }
    }
  });
});
