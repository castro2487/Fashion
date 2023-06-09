import { stringToCamelCase } from './stringOperations';

describe('Helper stringOperations tests', () => {
  it('should camelized snake_case string', () => {
    const expected = 'fooBar';
    const camelized = stringToCamelCase('FOO_BAR');
    expect(camelized).toBe(expected);
  });

  it('should should camelized CAPITALIZED string with a space', () => {
    const expected = 'fooBar';
    const camelized = stringToCamelCase('FOO BAR');
    expect(camelized).toBe(expected);
  });

  it('should remove hyphen sign', () => {
    const expected = 'fooBar';
    const camelized = stringToCamelCase('foo -bar');
    expect(camelized).toBe(expected);
  });

  it('should return empty string for undefined argument', () => {
    const expected = '';
    const camelized = stringToCamelCase('');
    expect(camelized).toBe(expected);
  });
});
