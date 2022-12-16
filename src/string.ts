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
