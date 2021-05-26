<h1 align="center">
  imgflip
</h1>

<div align="center">
  <a href="https://npmjs.org/package/imgflip">
    <img src="https://badgen.now.sh/npm/v/imgflip" alt="version" />
  </a>
  <a href="https://github.com/TomerAberbach/imgflip/actions">
    <img src="https://github.com/TomerAberbach/imgflip/workflows/CI/badge.svg" alt="CI" />
  </a>
  <a href="https://bundlephobia.com/result?p=imgflip">
    <img src="https://badgen.net/bundlephobia/minzip/imgflip" alt="minzip size" />
  </a>
</div>

<div align="center">
  The memiest Imgflip API wrapper around!
</div>

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
```

![](https://raw.githubusercontent.com/TomerAberbach/imgflip/main/pigeon.png)

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

Returns a `Promise<object[]>` of the
[top 100 Imgflip memes](https://api.imgflip.com).

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

An optional path to download the captioned image to in addition to returning the
image URL.

## Contributing

Stars are always welcome!

For bugs and feature requests,
[please create an issue](https://github.com/TomerAberbach/imgflip/issues/new).

## License

[MIT](https://github.com/TomerAberbach/imgflip/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)
