const imgflip = require('./index')

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