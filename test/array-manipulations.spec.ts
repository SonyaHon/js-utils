import { partition } from '../src';

describe('array-manipulations', () => {
    describe('partition', () => {
        const testingArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

        test('should partition by dividable number', () => {
            expect(partition(testingArray, 5)).toEqual([testingArray.slice(0, 5), testingArray.slice(5)]);
        });

        test('should partition with offset, greater than by', () => {
            expect(partition(testingArray, 2, 5)).toEqual([[1, 2], [6, 7]]);
        });

        test('should partition with offset, smaller than by', () => {
            expect(partition(testingArray, 9, 1)).toEqual([testingArray.slice(0, 9), testingArray.slice(1)]);
        });

        test('should return smaller part if array length is not enough', () => {
            expect(partition(testingArray, 3)).toEqual([testingArray.slice(0, 3), testingArray.slice(3, 6), testingArray.slice(6, 9), [10]]);
        })
    });
});