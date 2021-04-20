<p align="center">
  <img height="200px" width="200px" style="text-align: center;" src="https://s3.eu-central-1.amazonaws.com/bersling/images/spinner3.gif">
  <h1 align="center">@tsmean/spinner</h1>
</p>

A library to display loading spinners, working seamlessly with Angular 2, 4, 5, 6, 7, 8 (versions 1.x.x) and 9, 10, 11 (versions (2.x.x). ([http://spinner.tsmean.com](http://spinner.tsmean.com))

[![Build Status](https://travis-ci.org/tsmean/spinner.svg?branch=master)](https://travis-ci.org/tsmean/spinner)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](http://spinner.tsmean.com)
[![npm](https://img.shields.io/npm/v/%40tsmean/spinner.svg)][npm-url]
[![Support](https://img.shields.io/badge/Support-Angular%202%20to%206-blue.svg)]()


## Table of contents

- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Browser Support](#browser-support)
- [Versioning](#versioning)
- [Contributing](#contributing)
- [License](#license)

## Demo

[Working Demo](http://spinner.tsmean.com)

or edit directly on Stackblitz:

https://stackblitz.com/edit/tsmean-spinner

## Installation

`@tsmean/spinner` is available via [npm][npm-url].

Using npm:
```bash
$ npm install @tsmean/spinner
```

Using yarn:
```bash
$ yarn add @tsmean/spinner
```

## Usage

Import `SpinnerModule` in  in the root module(`AppModule`):
```typescript
// Import library module
import { SpinnerModule } from '@tsmean/spinner';

@NgModule({
  imports: [
    // ...
    SpinnerModule.forRoot({
      primaryColor: '#ff0000',
      secondaryColor: '#00ff00',
      animation: 'spin 1.5s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite'
    })
  ]
})
export class AppModule { }
```
Then use the spinner either in block format
```html
<spinner color="primary"></spinner>
```

or inline
```html
<spinner [display]="inline"></spinner>
```

There are many options more to customize the spinner, for a full reference please visit 
http://spinner.tsmean.com/.


## Browser Support


| Chrome | IE 10+ | Edge | Safari | Firefox | Opera |
|--------|--------|------|--------|---------|-------|

Also working on mobile devices (Android and iOS).


## Versioning

@tsmean/spinner is maintained with the Semantic Versioning guidelines.
Releases will be numbered with the following format:

`<major>.<minor>.<patch>`

For more information on SemVer, please visit http://semver.org.

## Contributing

If you're a developer and you'd like to contribute, your go-to readme is the `README.dev.md`.


## License

#### The MIT License (MIT)


[npm-url]: https://www.npmjs.com/package/@tsmean/spinner
