<div align="center">
  <img width="15%" src="http://vignette2.wikia.nocookie.net/disney/images/a/a8/Frozone_Full_Body.jpg/revision/latest?cb=20150215212808" alt=""/>
</div>
<h1 align="center">freezo</h1>
<div align="center">
  <strong>Deeply freeze/thaw a array or object</strong>
</div>
<br>
<div align="center">
  <a href="https://npmjs.org/package/@tiaanduplessis/freezo">
    <img src="https://img.shields.io/npm/v/@tiaanduplessis/freezo.svg?style=flat-square" alt="npm package version" />
  </a>
  <a href="https://codecov.io/gh/tiaanduplessis/freezo">
  <img src="https://codecov.io/gh/tiaanduplessis/freezo/branch/master/graph/badge.svg?style=flat-square" alt="Codecov" />
</a>
  <a href="https://npmjs.org/package/@tiaanduplessis/freezo">
  <img src="https://img.shields.io/npm/dm/@tiaanduplessis/freezo.svg?style=flat-square" alt="npm downloads" />
  </a>
  <a href="https://github.com/feross/standard">
    <img src="https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square" alt="standard JS linter" />
  </a>
  <a href="https://github.com/prettier/prettier">
    <img src="https://img.shields.io/badge/styled_with-prettier-ff69b4.svg?style=flat-square" alt="prettier code formatting" />
  </a>
  <a href="https://travis-ci.org/tiaanduplessis/freezo">
    <img src="https://img.shields.io/travis/tiaanduplessis/freezo.svg?style=flat-square" alt="travis ci build status" />
  </a>
  <a href="https://github.com/tiaanduplessis/freezo/blob/master/LICENSE">
    <img src="https://img.shields.io/npm/l/@tiaanduplessis/freezo.svg?style=flat-square" alt="project license" />
  </a>
  <a href="http://makeapullrequest.com">
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square" alt="make a pull request" />
  </a>
</div>
<br>
<div align="center">
  <a href="https://github.com/tiaanduplessis/freezo/watchers">
    <img src="https://img.shields.io/github/watchers/tiaanduplessis/freezo.svg?style=social" alt="Github Watch Badge" />
  </a>
  <a href="https://github.com/tiaanduplessis/freezo/stargazers">
    <img src="https://img.shields.io/github/stars/tiaanduplessis/freezo.svg?style=social" alt="Github Star Badge" />
  </a>
  <a href="https://twitter.com/intent/tweet?text=Check%20out%20freezo!%20https://github.com/tiaanduplessis/freezo%20%F0%9F%91%8D">
    <img src="https://img.shields.io/twitter/url/https/github.com/tiaanduplessis/freezo.svg?style=social" alt="Tweet" />
  </a>
</div>
<br>
<div align="center">
  Built with ❤︎ by <a href="https://github.com/tiaanduplessis">tiaanduplessis</a> and <a href="https://github.com/tiaanduplessis/freezo/contributors">contributors</a>
</div>

<h2>Table of Contents</h2>
<details>
  <summary>Table of Contents</summary>
  <li><a href="#install">Install</a></li>
  <li><a href="#usage">Usage</a></li>
  <li><a href="#contribute">Contribute</a></li>
  <li><a href="#license">License</a></li>
</details>

## Install

```sh
$ npm install freezo
# OR
$ yarn add freezo
```

## Usage

```js

import { freeze, thaw } from 'freezo'

const frozenArr = freeze([1, 2, 3, { foo: 1, bar: 2 }, 5])
const frozenObj = freeze({ foo: 1, bar: 2, baz: { foo: 1, bar: 2 } })

console.log(Object.isFrozen(frozenArr)) // true
console.log(Object.isFrozen(frozenArr[3])) // true
console.log(Object.isFrozen(frozenObj)) // true
console.log(Object.isFrozen(frozenObj.baz)) // true

const unfrozenArr = thaw(frozenArr)
const unfrozenObj = thaw(frozenObj)

console.log(Object.isFrozen(unfrozenArr)) // false
console.log(Object.isFrozen(unfrozenArr[3])) // false
console.log(Object.isFrozen(unfrozenObj)) // false
console.log(Object.isFrozen(unfrozenObj.baz)) // false
```

## Contributing

Contributions are welcome!

1. Fork it.
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

Or open up [a issue](https://github.com/tiaanduplessis/freezo/issues).

## License

Licensed under the MIT License.
