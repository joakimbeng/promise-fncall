# promise-fncall

[![Build status][travis-image]][travis-url] [![NPM version][npm-image]][npm-url] [![js-xo-style][codestyle-image]][codestyle-url]

> A Function.call that can deal with promise arguments

## Installation

Install `promise-fncall` using [npm](https://www.npmjs.com/):

```bash
npm install --save promise-fncall
```

## Usage

### Module usage

```javascript
var call = require('promise-fncall');

function greet(val) {
  return 'hello ' + val;
}

call(greet, Promise.resolve('world'))
  .then(function (val) {
    // val === 'hello world'
  });
```

## API

### `call(fn, ...promises)`

| Name | Type | Description |
|------|------|-------------|
| `fn` | `Function`| The function to call with the resolved promises as arguments |
| `...promises` | `Promise`| The arguments to pass to `fn` when they all are resolved |

Returns: `Promise`, which resolves to the result of calling `fn` with the resolved values of `...promises`.

## Related

* [`promise-or`](https://github.com/joakimbeng/promise-or)
* [`promise-and`](https://github.com/joakimbeng/promise-and)
* [`promise-if`](https://github.com/joakimbeng/promise-if)
* [`promise-not`](https://github.com/joakimbeng/promise-not)
* [`promise-all`](https://github.com/joakimbeng/promise-all)
* [`promise-get`](https://github.com/joakimbeng/promise-get)

## License

MIT © Joakim Carlstein

[npm-url]: https://npmjs.org/package/promise-fncall
[npm-image]: https://badge.fury.io/js/promise-fncall.svg
[travis-url]: https://travis-ci.org/joakimbeng/promise-fncall
[travis-image]: https://travis-ci.org/joakimbeng/promise-fncall.svg?branch=master
[codestyle-url]: https://github.com/sindresorhus/xo
[codestyle-image]: https://img.shields.io/badge/code%20style-xo-brightgreen.svg?style=flat
