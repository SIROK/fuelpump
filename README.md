![Alt Text](http://i.giphy.com/oDDs67mo76beM.gif)

> The CSS toolkit of SIROK, Inc.

[![Join the chat at https://gitter.im/sotayamashita/bdash](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/sotayamashita/bdash?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
[![npm package][npm-ver-link]][releases]
[![][dl-badge]][npm-pkg-link]
[![][mit-badge]][mit]

bdash is CSS toolkit of SIROK, Inc. It is very inspired by [Primer][primer] by GitHub. It aims to make our development be fast and maintanable.

 **We love Open Source**. :grin: :v: We also always welcome your suggestion but it is our internal CSS toolkit so we can not add new features we do not use in product but we think seriously about your suggesiton. If your suggesiton is considering exisiting code, it will be better. Thanks in advance. Lean more about [CONTRIBUTING](#contributing)

## Table of contents

* [Install](#install)
* [Usage](#usage)
* [Documentation](#documentation)
 * [Style Guide](#style-guide)
 * [Wiki](#wiki)
* [Updating](#updating)
* [Browser Compatibility](#browser-compatibility)
* [Contributing](#contributing)
* [Versioning](#versioning)
* [License](#license)

## Install

**Bower**

```
$ bower install bdash --save
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
<link rel="dist/bdash.min.css" rel="stylesheet">
```

## Documentation

**Style Guide**

Install hologram:

```bash
$ bundle
```

Generate style guide:

```bash
$ npm run styleguide
```

**Wiki**

At this stage, docs is located in [Wiki](https://github.com/sotayamashita/bdash/wiki). I am taking note to go through the process of this and understand reasons for selecting technique.

If you have any question or suggestion, please feel free to create issues or pull request. When you create issues or pull request, please read [Contributin](#contributing) before.

## Updating

Update all dependencies:

```bash
$ bower update
```

## Browser Compatibility

| Feature       | Chrome        | FireFox       | IE            |  Opera         |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Basic Support | 34            | 30            | 10            |  23           |

## Contributing

Contributions are very welcome! Please have a look at [CONTRIBUTING](CONTRIBUTING.md) for guidelines.

## Versioning

For transparency into our release cycle and in striving to maintain backward compatibility, IT is maintained under [the Semantic Versioning guidelines](http://semver.org/). Sometimes we screw up, but we'll adhere to those rules whenever possible.

## License

[MIT][mit] © SIROK, Inc. 2015.

[mit]:            https://github.com/sotayamashita/bdash/blob/master/LICENSE
[mit-badge]:      https://img.shields.io/github/license/sotayamashita/bdash.svg?style=flat-square
[releases]:       https://github.com/sotayamashita/bdash/releases
[npm-pkg-link]:   https://www.npmjs.org/package/bdash
[npm-ver-link]:   https://img.shields.io/npm/v/bdash.svg?style=flat-square
[dl-badge]:       http://img.shields.io/npm/dm/bdash.svg?style=flat-square
[primer]:         https://github.com/primer/primer
