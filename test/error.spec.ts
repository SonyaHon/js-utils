import { Result } from '../src';

describe('error', () => {
  describe('result', () => {
    test('should create err and ok variants', () => {
      expect(Result.Ok(true)).toBeInstanceOf(Result);
      expect(Result.Err('error')).toBeInstanceOf(Result);
    });

    test('should throw if unwrap err variant', () => {
      expect(() => {
        Result.Err('error').unwrap();
      }).toThrow();
    });

    test('should not throw if unwrapping an ok variant', () => {
      const x = Result.Ok(69);
      expect(x.unwrap()).toBe(69);
    });

    test('should throw if unwrapErr ok variant', () => {
      expect(() => {
        Result.Ok('error').unwrapErr();
      }).toThrow();
    });

    test('should not throw if unwrappingErr an err variant', () => {
      const x = Result.Err('error');
      expect(x.unwrapErr()).toBe('error');
    });

    test('should use provided default value', () => {
      const x = Result.Err<number, string>('error').unwrapOr(() => 69);
      expect(x).toBe(69);
    });

    test('should map to err if initial is err', () => {
      expect(
        Result.Err<number, string>('error')
          .map((dt) => 1 + dt)
          .isErr(),
      ).toBe(true);
    });

    test('should map to ok if initial is ok', () => {
      expect(
        Result.Ok<number, string>(68)
          .map((dt) => 1 + dt)
          .isOk(),
      ).toBe(true);
    });

    test('should flat map to err if initial is err', () => {
      expect(
        Result.Err<number, string>('error')
          .flatMap((dt) => Result.Ok(dt))
          .isErr(),
      ).toBe(true);
    });

    test('should flat map to err if initial is err', () => {
      expect(
        Result.Ok<number, string>(10)
          .flatMap((dt) => Result.Ok(dt))
          .isOk(),
      ).toBe(true);
    });

    test('wrapped function should not throw', () => {
      const fn = (): number => {
        throw new Error('error');
      };
      const wrappedFn = Result.wrapFunction(fn);
      expect(() => wrappedFn()).not.toThrow();
      const resp = wrappedFn();
      expect(resp.isErr()).toBe(true);
    });
  });
});
