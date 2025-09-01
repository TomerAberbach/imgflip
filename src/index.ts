import { pipeline } from 'node:stream/promises'
import fs from 'node:fs'
import got from 'got'

/** A class for querying the Imgflip API. */
class Imgflip {
  readonly #username: string
  readonly #password: string

  /**
   * @param options - The username and password to use when querying the API.
   */
  public constructor({
    username,
    password,
  }: {
    readonly username: string
    readonly password: string
  }) {
    this.#username = username
    this.#password = password
  }

  // eslint-disable-next-line typescript/class-methods-use-this
  public async memes(): Promise<MemeFormat[]> {
    return (await request(`get_memes`)).memes as MemeFormat[]
  }

  /**
   * Queries the Imgflip API to fill in the meme format with the given `id` with
   * the given captions and other options.
   *
   * Returns a promise that resolves to the URL of the filled in meme.
   */
  public meme(id: string, options: BaseMemeOptions): Promise<string>

  /**
   * Queries the Imgflip API to fill in the meme format with the given `id` with
   * the given captions and other options.
   *
   * Returns a promise that resolves when the filled in meme is downloaded to
   * `options.path`.
   */
  public meme(id: string, options: DownloadMemeOptions): Promise<void>

  public async meme(
    id: string,
    {
      captions,
      font,
      maxFontSize,
      ...rest
    }: BaseMemeOptions | DownloadMemeOptions,
  ): Promise<string | void> {
    const searchParams: Record<string, unknown> = {
      template_id: id,
      username: this.#username,
      password: this.#password,
      ...captions
        .map((caption, i) => ({ [`boxes[${i}][text]`]: caption }))
        .reduce((acc, o) => Object.assign(acc, o), {}),
    }

    if (font != null) {
      searchParams.font = font
    }

    if (maxFontSize != null) {
      searchParams.max_font_size = maxFontSize
    }

    const url = (
      await request(`caption_image`, {
        method: `POST`,
        searchParams,
      })
    ).url as string

    if (`path` in rest) {
      await pipeline(got.stream(url), fs.createWriteStream(rest.path))
    }

    return url
  }
}

const request = async (path: string, options?: Record<string, unknown>) => {
  const response = await got(path, {
    prefixUrl: `https://api.imgflip.com`,
    ...options,
  }).json<{
    success: boolean
    data: Record<string, unknown>
    error_message: string
  }>()

  if (response.success) {
    return response.data
  }

  throw new Error(response.error_message)
}

/**
 * A description of a meme format returned by the Imgflip API:
 * https://imgflip.com/api
 */
export type MemeFormat = {
  id: string
  name: string
  url: string
  width: number
  height: number
  boxCount: number
}

/** Options for filling in and rendering a meme format. */
export type BaseMemeOptions = {
  captions: string[]
  font?: `impact` | `arial`
  maxFontSize?: number
}

/**
 * Options for filling in and rendering a meme format, and downloading it to a
 * file path.
 */
export type DownloadMemeOptions = BaseMemeOptions & {
  path: string
}

export default Imgflip
