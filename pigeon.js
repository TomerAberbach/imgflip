import Imgflip from './index'

const imgflip = new Imgflip({
  username: process.env.IMGFLIP_USERNAME,
  password: process.env.IMGFLIP_PASSWORD
})

;(async () => {
  await imgflip.meme(`100777631`, {
    captions: [
      `PROGRAMMERS`,
      `THIS PACKAGE`,
      `IS THIS THE GREATEST PACKAGE EVER?`
    ],
    path: `pigeon.png`
  })
})()
