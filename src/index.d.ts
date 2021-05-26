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
type BaseMemeOptions = {
  captions: Array<string>
  font?: 'impact' | 'arial'
  maxFontSize?: number
}

/**
 * Options for filling in and rendering a meme format, and downloading it to a
 * file path.
 */
type DownloadMemeOptions = BaseMemeOptions & {
  path: string
}

/** A class for querying the Imgflip API. */
declare class Imgflip {
  /**
   * @param options The username and password to use when querying the API.
   */
  constructor(options: { username: string; password: string })

  /** Returns a promise for the top 100 meme formats. */
  memes(): Promise<Array<MemeFormat>>

  /**
   * Queries the Imgflip API to fill in the meme format with the given `id` with
   * the given captions and other options.
   *
   * Returns a promise that resolves to the URL of the filled in meme.
   */
  meme(id: string, options: BaseMemeOptions): Promise<string>

  /**
   * Queries the Imgflip API to fill in the meme format with the given `id` with
   * the given captions and other options.
   *
   * Returns a promise that resolves when the filled in meme is downloaded to
   * `options.path`.
   */
  meme(id: string, options: DownloadMemeOptions): Promise<void>
}

export default Imgflip
