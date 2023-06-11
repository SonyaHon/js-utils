import { capitalize, castStringBoolean, castStringBooleanR } from '../src';

describe('string', () => {
  describe('capitalize', () => {
    test('shoul return empty string if passed empty string', () => {
      expect(capitalize('')).toBe('');
    });

    test('should return to uppercase if 1 char string', () => {
      expect(capitalize('a')).toBe('A');
    });

    test('should capitalize long string', () => {
      expect(capitalize('string')).toBe('String');
    });
  });

  describe('castStringBoolean', () => {
    test('should cast true', () => {
      expect(castStringBoolean('true')).toBe(true);
    });

    test('should cast false', () => {
      expect(castStringBoolean('false')).toBe(false);
    });

    test('should not cast other values', () => {
      expect(castStringBoolean('not-a-boolean')).toBe(undefined);
    });

    test('should throw if throwOnError', () => {
      expect(() => castStringBoolean('not a boolean', true)).toThrow();
    });
  });

  describe('castStringBooleanR', () => {
    test('should cast true', () => {
      expect(castStringBooleanR('true').unwrap()).toBe(true);
    });

    test('should cast false', () => {
      expect(castStringBooleanR('false').unwrap()).toBe(false);
    });

    test('should not cast other values', () => {
      expect(castStringBooleanR('not a boolean').isErr()).toBe(true);
    });
  });
});
