import { getAppOrigin } from './getAppOrigin';

describe('getAppOrigin', () => {
  it('should throw an error when APP_ORIGIN is not set and window is not available', () => {
    const { window } = global;
    delete global.window;
    delete process.env.APP_ORIGIN;

    const result = () => getAppOrigin();

    expect(result).toThrowError('Application is not initialized.');

    global.window = window;
  });
  it('should return the origin from window.location when available', () => {
    const expected = 'https://example.com';
    Object.defineProperty(window, 'location', {
      value: {
        origin: expected,
      },
    });

    expect(getAppOrigin()).toBe(expected);
  });

  it('should return the APP_ORIGIN environment variable when window.location is not available', () => {
    const expected = 'https://example.com';
    process.env.APP_ORIGIN = expected;

    expect(getAppOrigin()).toBe(expected);
  });
});
