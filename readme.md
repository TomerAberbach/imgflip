# Imgflip

[![NPM version](https://img.shields.io/npm/v/imgflip.svg)](https://www.npmjs.com/package/imgflip)

> The memiest Imgflip API wrapper around!

## Install

```sh
$ npm i imgflip
```

## Usage

```js
import Imgflip from 'imgflip'

// https://imgflip.com/signup
const imgflip = new Imgflip({
  username: 'YOUR_USERNAME',
  password: 'YOUR_PASSWORD'
})

;(async () => {
  // https://api.imgflip.com/get_memes
  // Get top 100 popular meme formats
  const memes = await imgflip.memes()
  console.log(memes)

  // Caption and download a great meme!
  await imgflip.meme(`100777631`, {
    captions: [
      `PROGRAMMERS`,
      `THIS PACKAGE`,
      `IS THIS THE GREATEST PACKAGE EVER?`
    ],
    path: `pigeon.png`
  })
})()
```

## API

### `new Imgflip(options)`

Returns an `Imgflip` API object.

#### `options`

Type: `object`

##### Properties

###### `username`

Type: `string`

Your Imgflip username.

###### `password`

Type: `string`

Your Imgflip password.

### Methods

#### `memes()`

Returns a `Promise<object[]>` of the [top 100 Imgflip memes](https://api.imgflip.com).

#### `meme(id, options)`

Returns a `Promise<string>` of the captioned image's URL.

##### `id`

Type: `string`

The [Imgflip ID](https://api.imgflip.com) of the image to caption.

##### `options`

Type: `object`

###### `captions`

Type: `string[]`

The array of text to caption the Imgflip image with.

###### `font`

Type: `'impact' | 'arial'`\
Default: `'impact'`

The font family to render the image captions with.

###### `maxFontSize`

Type: `number`\
Default: `50`

The maximum font size of the image captions in pixels.

###### `path`

Type: `string | undefined`\
Default: `undefined`

An optional path to download the captioned image to in addition to returning the image URL.

## License

[MIT](https://github.com/TomerAberbach/imgflip/blob/master/license) © [Tomer Aberbach](https://github.com/TomerAberbach)
