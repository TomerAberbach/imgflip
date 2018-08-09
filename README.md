# Imgflip

[![NPM version](https://img.shields.io/npm/v/imgflip.svg)](https://www.npmjs.com/package/imgflip) [![Build Status](https://img.shields.io/travis/TomerADev/imgflip.svg)](https://travis-ci.org/TomerADev/imgflip) [![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FTomerADev%2Fimgflip.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FTomerADev%2Fimgflip?ref=badge_shield) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

> A module for the interacting with the Imgflip API.

## Install

Install with [npm](https://www.npmjs.com):

```sh
$ npm i imgflip --save
```

## Usage

```js
const imgflip = require('imgflip')

// https://imgflip.com/signup
imgflip.credentials({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
})

/* https://api.imgflip.com/get_memes
 * Get top 100 popular meme formats
 */
imgflip.memes().then(memes => {
  // ID of the top meme
  const id = memes[0]['id']

  // Get URL instead using imgflip.meme, omit path argument
  return imgflip.image('meme.jpg', id, 'MEME', 'CITY')
})
```

## Contributing

Pull requests and stars are always welcome. For bugs and feature requests, [please create an issue](https://github.com/TomerADev/imgflip/issues/new).

## Running Tests

Install dev dependencies:

```sh
$ npm i -d && npm test
```

## Author

**Tomer Aberbach**

* [Github](https://github.com/TomerADev)
* [NPM](https://www.npmjs.com/~tomeraberbach)
* [LinkedIn](https://www.linkedin.com/in/tomer-a)
* [Website](https://tomeraberba.ch)

## License

Copyright © 2018 [Tomer Aberbach](https://github.com/TomerADev)
Released under the [MIT license](https://github.com/TomerADev/imgflip/blob/master/LICENSE).
