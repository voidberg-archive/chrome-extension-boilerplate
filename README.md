# Chrome Extension Boilerplate

A boilerplate to kickstart Chrome extension development.

## Features

* Gulp and Webpack build system.
* Crx packaging.
* Live reloading.
* ES6 via Babel.
* Linting via ESLint.

## Installation

* ```npm install -g gulp webpack```
* ```npm install```

## Starting up

Edit `manifest.json` and update the `name` and `description`. Update your icons in the `src/assets` directory.

The build system generates three files:

* `common.js` - Common code shared across the client script and the background script.
* `client.js` - The client script.
* `background.js` - The background script.

Depending on your extension you might not need both. If this is the case, remove the entry point from `config/webpack.config.js`, the settings from `manifest.json` and the file from `src/js`.

If you need multiple content scripts, add them in `manifest.json`, create a file in `src/js` and add a entry point in `config/webpack.config.js`.

The build system comes with `jQuery` and `lodash` preloaded. If you need more third party scripts, install them via npm and add them to the `ProvidePlugin` options in `config/webpack.config.js`.

## Running

* Run ```gulp```.
* In the Chrome extensions page, click ```Load unpacked extension...``` and select the ```build``` directory.

The extension will automatically reload on code changes.

## Creating a build

* Add your pem as `config/extension.pem`.
* ```gulp build``` will generate a build in ```./dist```.

## TODO

* Add version bumping.
* Add SASS.
* Remove live reloading code from distribution build.
 
## License

Copyright (c) 2015 Alexandru Badiu.

Licensed under the MIT license.
