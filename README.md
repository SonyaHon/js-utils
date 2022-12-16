# @sonyahon/js-utils
A collection of functions i use reguarly and don't want to write again

## Installation
```bash
    npm install --save @sonyahon/js-utils
    yarn add @sonyahon/js-utils
```

## API
### Misc
#### `nop()`
A noop function, yields undefined
```typescript
import {nop} from '@sonyahon/js-utils';
nop(); // undefined
```
### Array manipulations
#### `partition(target: any[], by: number, window = by)`
Partitions array with optional padding
 * if `window` is smaller than `by` elements will be reused
 * if there is not enough elements in the `target`, last partition will be smaller
```typescript
import {partition} from '@sonyahon/js-utils';
partition([1, 2, 3, 4], 2); // [[1, 2], [3, 4]]
partition([1, 2, 3, 4], 3, 1); // [[1, 2, 3], [2, 3, 4]]
```
#### `zip(...arrays: any[][])`
Zips passed arrays together
* if length of passed arrays is not equal, undefineds will be used instead of missing elements
```typescript
import {zip} from '@sonyahon/js-utils';
zip(['a', 'b'], [1, 2]); // [['a', 1], ['b', 2]]
```