const EMPTY_VALUE = Symbol();

export class Result<O, E> {
  static Err<O, E>(err: E) {
    return new Result<O, E>(EMPTY_VALUE as O, err);
  }

  static Ok<O, E>(data: O) {
    return new Result(data, EMPTY_VALUE as E);
  }

  /**
   * Wrap a function that could throw, so it returns
   * a Result instead.
   *
   * @param fn - a function to be wrapped
   * @returns wrapped function, which accepts the same arguments, but
   * returns a Result instead of throwing
   */
  static wrapFunction<T, V>(
    fn: (...args: T[]) => V,
  ): (...args: T[]) => Result<V, unknown> {
    return (...args) => {
      try {
        return Result.Ok(fn(...args));
      } catch (error) {
        return Result.Err(error);
      }
    };
  }

  private readonly data: O;
  private readonly error: E;

  private constructor(data: O, error: E) {
    this.data = data;
    this.error = error;
  }

  isOk() {
    return this.data !== EMPTY_VALUE;
  }

  isErr() {
    return this.error !== EMPTY_VALUE;
  }

  unwrap(): O {
    if (this.isOk()) {
      return this.data;
    }
    throw new Error('Unwrapping an Err value');
  }

  unwrapErr(): E {
    if (this.isErr()) {
      return this.error;
    }
    throw new Error('Unwrapping an Ok value');
  }

  unwrapOr(defaultValue: () => O): O {
    if (this.isOk()) {
      return this.data;
    }

    return defaultValue();
  }

  map<M, F>(fn: (data: O) => M): Result<M, F | E> {
    if (this.isOk()) {
      return Result.Ok(fn(this.data));
    }
    return Result.Err(this.error);
  }

  flatMap<M, F>(fn: (data: O) => Result<M, F>): Result<M, F | E> {
    if (this.isOk()) {
      return fn(this.data);
    }
    return Result.Err(this.error);
  }
}
