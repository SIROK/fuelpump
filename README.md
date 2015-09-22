> :eyeglasses: The internal CSS toolkit and guideline of SIROK, Inc.

[![w][w-badge]][w-link]
[![b][b-badge]][b-link]
[![n][n-badge]][n-link]
[![m][m-badge]][m-link]

<br>


<br>

<p align="center">
  <b><a href="#about">About</a></b>
  |
  <b><a href="#install">Install</a></b>
  |
  <b><a href="#usage">Usage</a></b>
  |
  <b><a href="#documentation">Documentation</a></b>
  |
  <b><a href="#updating">Updating</a></b>
</p>


## About

The bdash is a CSS toolkit of SIROK, Inc. It is very inspired by [Primer][primer] by GitHub. Our aims to make our development be fast and maintainable.

:sparkles: **We love Open Source** :v:. we are always welcome your suggestion but it is our internal CSS toolkit. we will not add new features we do not use in our products but we think seriously about your suggesiton. If your suggesiton is considering exsisting code, it will be better. Thanks in advance. Lean more about [CONTRIBUTING](#contributing).


## Install

**bower**

```bash
$ bower install bdash --save-dev
```

**npm**

```bash
$ npm install bdash --save-dev
```


## Usage

**Stylus**

Import files in your project using `@import` without the extension below:

```stylus
// Example: All files
@import "bdash/stylus/bdash"

// Example: Individual file
@import "bdash/stylus/_sanitize"
@import "bdash/stylus/_base"
@import "bdash/stylus/_buttons"
```

**CSS**

Specify relationships between the current document and CSS below:

```html
<link rel="stylesheet" href="dist/bdash.min.css" type="text/css">
```


## Documentation

We write documentation on [Wiki](https://github.com/SIROK/bdash/wiki). It include style coding guide, the way to develop and so on. Documentation in Wiki is written in Japanese because it is for people at SIROK, Inc.


## Updating

Update all dependencies:

```bash
$ bower update
```


## Contributing

If you have any question or suggestion, please feel free to create issues or pull request. When you create issues or pull request, please read [Contributing](CONTRIBUTING.md) before.


## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, IT is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.


## License

[MIT][m-link] © [SIROK, Inc][sirok].

Whenever code for bdash is borrowed or inspired by awesome existing sources, we credit the original developer, designer or article in our code. Please create [issues][issue] if you think any credit is absent.


[sirok]:   http://sirok.co.jp/
[m-link]:  https://github.com/SIROK/bdash/blob/master/LICENSE.md
[n-link]:  https://www.npmjs.org/package/bdash
[n-badge]: https://img.shields.io/npm/v/bdash.svg?style=flat-square
[b-badge]: https://img.shields.io/bower/v/bdash.svg?style=flat-square
[b-link]:  http://bower.io/search/?q=bdash
[w-badge]: https://img.shields.io/wercker/ci/sirok/bdash.svg?style=flat-square
[w-link]:  https://app.wercker.com/#applications/55e8d477c0d66d1e601c3292
[primer]:  https://github.com/primer/primer
[issue]:   https://github.com/SIROK/bdash/issues
[m-badge]: https://img.shields.io/github/license/SIROK/bdash.svg?style=flat-square
