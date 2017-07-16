# pipe-js

A backwards-compatible way of streamlining chained function calls in a readable and functional manner

```js
const pipe = require('pipe-js')

## Usage

const hello = 'hello'

const capitalize = str => str[0].toUpperCase() + str.substring(1)
const duplicate = str => `${str}-${str}`
const exclaim = str => str + '!'

pipe(hello).through(capitalize, duplicate, exclaim)
```
