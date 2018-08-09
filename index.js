const request = require('request-promise-native')
const fs = require('fs')

const credentials = {
  username: undefined,
  password: undefined
}

const imgflip = (path, method, params) =>
  request(`https://api.imgflip.com/${path}`, {
    method: method,
    qs: params,
    json: true
  }).then(res => res['success'] ? res['data'] : Promise.reject(new Error(res['error_message'])))

module.exports.credentials = o => ['username', 'password'].forEach(key => {
  credentials[key] = o[key]
})
module.exports.memes = () => imgflip('get_memes', 'get').then(res => res['memes'])
module.exports.meme = (id, ...captions) =>
  imgflip('caption_image', 'post', {
    template_id: id,
    username: credentials.username,
    password: credentials.password,
    boxes: captions.map(caption => ({text: caption}))
  }).then(res => res['url'])
module.exports.image = (path, id, ...captions) =>
  module.exports.meme(id, ...captions).then(url => request.get(url).pipe(fs.createWriteStream(path)))
