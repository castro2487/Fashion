import { parseJson } from './parseJson';

describe('parseJson', () => {
  it('should parse valid JSON data', () => {
    const data = '{"name": "John", "age": 30}';
    const expected = { name: 'John', age: 30 };
    expect(parseJson(data)).toEqual(expected);
  });

  it('should return default value for invalid JSON data', () => {
    const data = 'not a JSON';
    const expected = {};
    expect(parseJson(data)).toEqual(expected);
  });

  it('should return the provided default value for invalid JSON data', () => {
    const data = 'not a JSON';
    const expected = { foo: 'bar' };
    expect(parseJson(data, expected)).toEqual(expected);
  });
});
