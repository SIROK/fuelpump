> The CSS toolkit of SIROK, Inc.

[![Join the chat at https://gitter.im/sotayamashita/bdash](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sotayamashita/bdash?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![Wercker][wercker-badge]][releases]
[![bower package][bower-badge]][releases]
[![npm package][npm-badge]][releases] 
[![][mit-badge]][mit]

The bdash is a CSS toolkit of SIROK, Inc. It is very inspired by [Primer][primer] by GitHub. It aims to make our development be fast and maintainable.

 :sparkles: **We love Open Source** :v:. we are always welcome your suggestion but it is our internal CSS toolkit. we will not add new features we do not use in our products but we think seriously about your suggesiton. If your suggesiton is considering exisiting code, it will be better. Thanks in advance. Lean more about [CONTRIBUTING](#contributing).

## Table of contents

* [Installation](#installation)
* [Usage](#usage)
* [Documentation](#documentation)
* [Updating](#updating)
* [Browser Compatibility](#browser-compatibility)
* [Contributing](#contributing)
* [Versioning](#versioning)
* [License](#license)
* [About SIROK, Inc.](#about-sirok-inc) 

## Installation

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

Import files you would like to use in your project with `@import` below:

```stylus
// Example: All files
@import "bdash/stylus/bdash"

// Exameple: Individual file
@import "bdash/stylus/_sanitize"
@import "bdash/stylus/_base"
@import "bdash/stylus/_buttons"
```

**CSS**

In html, add link below:

```html
<link rel="dist/bdash.min.css" rel="stylesheet" />
```

## Documentation

**Wiki**

At this stage, docs is located in [Wiki](https://github.com/sotayamashita/bdash/wiki). I am taking note to go through the process of this and understand reasons for selecting technique.

If you have any question or suggestion, please feel free to create issues or pull request. When you create issues or pull request, please read [Contributing](CONTRIBUTING.md) before.

## Updating

Update all dependencies:

```bash
$ bower update
```

## Browser Compatibility

| Feature       | Chrome        | FireFox       | IE            |  Opera        |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Basic Support | 34            | 30            | 10            |  23           |

## Contributing

Contributions are very welcome! Please have a look at [CONTRIBUTING](CONTRIBUTING.md) for guidelines.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, IT is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

## License

[MIT][mit] © [SIROK, Inc][sirok].

Whenever code for bdash is borrowed or inspired by existing code, we try to credit the original developer/designer in our code. Please create [issues][issue] if you think any credit is absent.

## About SIROK, Inc.

[<img src="http://sirok.co.jp/wordpress/wp-content/themes/sirokco_v2.1/svg/bgWhite/logo.svg"  width="240">][sirok]

bdash is maintained and funded by SIROK, Inc. The names and logos for SIROK are trademarks of SIROK, Inc.

[sirok]:          http://sirok.co.jp/
[mit]:            https://github.com/sotayamashita/bdash/blob/master/LICENSE
[mit-badge]:      https://img.shields.io/github/license/sotayamashita/bdash.svg?style=flat-square
[releases]:       https://github.com/sotayamashita/bdash/releases
[npm-pkg-link]:   https://www.npmjs.org/package/bdash
[npm-badge]:      https://img.shields.io/npm/v/bdash.svg?style=flat-square
[bower-badge]:    https://img.shields.io/bower/v/bdash.svg?style=flat-square
[wercker-badge]:  https://img.shields.io/wercker/ci/wercker/docs.svg?style=flat-square
[dl-badge]:       http://img.shields.io/npm/dm/bdash.svg?style=flat-square
[primer]:         https://github.com/primer/primer
[issue]:          https://github.com/sotayamashita/bdash/issues
