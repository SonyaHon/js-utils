/**
 * A noop function, yields undefined
 *
 * @returns undefined
 */
export const nop = () => undefined;

/**
 * Returns a promise which resolves after the `delay` ms
 *
 * @param delay number to sleep in ms
 * @param resolveValue if provided will resolve with this value
 * @returns void | T
 */
export const sleep = <T = undefined>(
  delay: number,
  resolveValue?: T,
): Promise<T> => {
  return new Promise<T>((resolve) => {
    setTimeout(() => {
      resolve(resolveValue as T);
    }, delay);
  });
};

/**
 * Omits undefined fields from javascript object
 * **NOTE**
 * Only JSON like objects are accepted.
 *
 * @param data - JS Object with possibly undefined fields.
 * @returns JS Object with undefined fields removed
 */
export const omitUndefinedProps = <T extends Record<string, unknown>>(
  data: T,
): T => {
  return JSON.parse(JSON.stringify({ ...data }));
};
