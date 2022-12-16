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

### Array manipulations
#### `partition(target: any[], by: number, window = by)`
Partitions array with optional padding
 * if `window` is smaller than `by` elements will be reused
 * if there is not enough elements in the `target`, last partition will be smaller