/**
 * A noop function, yields undefined
 *
 * @returns undefined
 */
export const nop = () => undefined;

/**
 * Returns a promise wich resolves after the `delay` ms
 *
 * @param delay number to sleep in ms
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
