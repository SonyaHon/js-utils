import { Result } from './error';

/**
 * Capitalizes a string
 * @example capitalize('string') // 'String'
 * @param str string to capitalize
 * @returns capitalized string
 */
export const capitalize = (str: string): string => {
  if (str.length > 0) {
    return `${str[0].toUpperCase()}${str.substring(1)}`;
  }
  return str;
};

/**
 * Converts 'true' or 'false' into a boolean
 * @param str
 * @param throwOnError - if str !== 'true' or 'false' throws
 * @returns casted boolean
 */
export const castStringBoolean = (
  str: string,
  throwOnError = false,
): boolean | undefined => {
  if (str === 'true') return true;
  if (str === 'false') return false;
  if (throwOnError) throw new Error('Passed values is not a string boolean');
  return undefined;
};

/**
 * Same as `castStringBoolean` but returns a result instead
 *
 * @param str
 * @returns {Result<boolean, Error>}
 */
export const castStringBooleanR = (str: string): Result<boolean, Error> => {
  if (str === 'true') return Result.Ok(true);
  if (str === 'false') return Result.Ok(false);
  return Result.Err(new Error('Value is not a string boolean'));
};
