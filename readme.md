<h1 align="center">
  imgflip
</h1>

<div align="center">
  <a href="https://npmjs.org/package/imgflip">
    <img src="https://badgen.net/npm/v/imgflip" alt="version" />
  </a>
  <a href="https://github.com/TomerAberbach/imgflip/actions">
    <img src="https://github.com/TomerAberbach/imgflip/workflows/CI/badge.svg" alt="CI" />
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
  username: `YOUR_USERNAME`,
  password: `YOUR_PASSWORD`,
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
    `IS THIS THE GREATEST PACKAGE EVER?`,
  ],
  path: `pigeon.png`,
})
```

![](./pigeon.png)

## Contributing

Stars are always welcome!

For bugs and feature requests,
[please create an issue](https://github.com/TomerAberbach/imgflip/issues/new).

## License

[MIT](https://github.com/TomerAberbach/imgflip/blob/main/license) ©
[Tomer Aberbach](https://github.com/TomerAberbach)
