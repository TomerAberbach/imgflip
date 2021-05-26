import stream from 'stream'
import fs from 'fs'
import { promisify } from 'util'
import got from 'got'

const pipeline = promisify(stream.pipeline)

class Imgflip {
  constructor({ username, password }) {
    this.username = username
    this.password = password
  }

  // https://api.imgflip.com
  // eslint-disable-next-line class-methods-use-this
  async request(path, options) {
    const response = await got(path, {
      prefixUrl: `https://api.imgflip.com`,
      ...options
    }).json()

    if (response.success === true) {
      return response.data
    }

    throw new Error(response.error_message)
  }

  async memes() {
    return (await this.request(`get_memes`)).memes
  }

  async meme(id, { captions, font, maxFontSize, path }) {
    const searchParams = {
      // eslint-disable-next-line camelcase
      template_id: id,
      username: this.username,
      password: this.password,
      ...Object.assign(
        ...captions.map((caption, i) => ({ [`boxes[${i}][text]`]: caption }))
      )
    }

    if (font != null) {
      searchParams.font = font
    }

    if (maxFontSize != null) {
      // eslint-disable-next-line camelcase
      searchParams.max_font_size = maxFontSize
    }

    const { url } = await this.request(`caption_image`, {
      method: `POST`,
      searchParams
    })

    if (path != null) {
      await pipeline(got.stream(url), fs.createWriteStream(path))
    }

    return url
  }
}

export default Imgflip
