# pipe-js

[![Travis build](https://img.shields.io/travis/rust-lang/rust.svg?style=flat-square)](https://travis-ci.org/andrii-maglovanyi/pipe-js)
[![Codecov coverage](https://img.shields.io/codecov/c/github/codecov/example-python.svg?style=flat-square)](https://codecov.io/gh/andrii-maglovanyi/pipe-js)
[![Version](https://img.shields.io/npm/v/npm.svg?style=flat-square)](https://www.npmjs.com/package/pipe-js)
[![Downloads](https://img.shields.io/npm/dm/localeval.svg?style=flat-square)](https://npm-stat.com/charts.html?package=pipe-js&from=2017-07-15)
[![MIT license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](https://opensource.org/licenses/MIT)

A backwards-compatible way of streamlining chained function calls in a readable and functional manner

## Usage

```js
const pipe = require('pipe-js')

const hello = 'hello'

const capitalize = str => str[0].toUpperCase() + str.substring(1)
const duplicate = str => `${str}-${str}`
const exclaim = str => str + '!'

pipe(hello).through(capitalize, duplicate, [String.prototype.concat, ' world'], exclaim) // Hello-hello world!
```
