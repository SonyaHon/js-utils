import { nop, sleep } from '../src/misc';

describe('misc', () => {
  describe('nop', () => {
    test('should return undefined', () => {
      expect(nop()).not.toBeDefined();
    });
  });

  describe('sleep', () => {
    test('should yield passed value if presented', async () => {
      const resp = await sleep(1, 42);
      expect(resp).toBe(42);
    });
  });
});
