import { ERROR_LOADER_JSON_PARSE, loadAndParseJson } from './loadAndParseJson';

describe('JSON file parser tests', () => {
  it('should error with custom message when it can not parse the JSON file', () => {
    const path = __dirname + '/__mocks__/undefined.json';

    try {
      loadAndParseJson(path);
    } catch (e: any) {
      expect(e.message).toBe(`${ERROR_LOADER_JSON_PARSE}: ${path}`);
    }
  });

  it('should load and parse the JSON file', () => {
    const expected = { foo: { foo: 'bar' } };
    const path = __dirname + '/__mocks__/defined.json';
    const parsed = loadAndParseJson(path);
    expect(parsed).toEqual(expected);
  });
});
