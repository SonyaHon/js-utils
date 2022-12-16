import { capitalize } from '../src';

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
});
