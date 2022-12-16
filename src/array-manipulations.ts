/**
 * Partitions array with optional padding
 * * if `window` is smaller than `by` elements will be reused
 * * if there is not enough elements in the `target`, last partition will be smaller
 * 
 * @example partition([1, 2, 3, 4], 2) // [[1, 2], [3, 4]]
 * 
 * @param array target array to be partitioned
 * @param by number of elements in partition
 * @param window sliding window of partitioning
 * @returns partitioned array
 */
export const partition = <T>(array: T[], by: number, window: number = by): (T[])[] => {
    const result = [];
    const iterations = Math.ceil(array.length / Math.max(by, window));
    for (let i = 0; i < iterations * window; i += window) {
        const part = [];
        for (let j = 0; j < by; j++) {
            if (i + j >= array.length) {
                break;
            }
            part.push(array[i + j]);
        }
        result.push(part);
    }
    return result;
};