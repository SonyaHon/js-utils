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
A noop function, yields `undefined`
```typescript
import {nop} from '@sonyahon/js-utils';
nop(); // undefined
```
#### `sleep(delay: number, resolveValue?: any)`
Yields are `Promise`, which resolves after the `delay` ms. The promise yields `resolveValue`, or `undefined` if not supplied.
```typescript
import {sleep} from '@sonyahon/js-utils';
(async () => {
    await sleep(100); // undefined after 100ms
    await sleep(100, 'done'); // 'done' after 100ms
})();
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
* if lengths of passed arrays is not equal, `undefined` will be used instead of missing elements
```typescript
import {zip} from '@sonyahon/js-utils';
zip(['a', 'b'], [1, 2]); // [['a', 1], ['b', 2]]
```
### String
#### `capitalize(str: string)`
Capitalizes a string
```typescript
import {capitalize} from '@sonyahon/js-utils';
capitalize(''); // ''
capitalize('hello'); // 'Hello'
```
### Events
An implementation of `EventEmitter`, with a bit more flexible API than regular node/browser one

### Error
An implementation of Rust-like `Result<Ok, Err>` type