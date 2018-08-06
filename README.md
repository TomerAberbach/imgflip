# Imgflip API Module
A module for the interacting with the Imgflip API..

[![JavaScript Style Guide](https://cdn.rawgit.com/standard/standard/master/badge.svg)](https://github.com/standard/standard)
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FTomerADev%2Fimgflip.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2FTomerADev%2Fimgflip?ref=badge_shield)

[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Example
```javascript
const imgflip = require('imgflip')

// https://imgflip.com/signup
imgflip.credentials({
  username: 'tomeraberbach',//'YOUR_USERNAME',
  password: '988kd891sZlY'//'YOUR_PASSWORD'
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


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2FTomerADev%2Fimgflip.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2FTomerADev%2Fimgflip?ref=badge_large)