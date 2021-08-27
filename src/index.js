const Canvas = require("canvas");
const Discord = require("discord.js")

async function shipImage(user1, user2, porcentage){
    
    let emoji;

    if(porcentage <= 23){
        emoji = 'https://images.emojiterra.com/twitter/v13.0/512px/1f645-2640.png'
    }

    if(porcentage > 23 && porcentage <= 47){
        emoji = 'https://images.emojiterra.com/twitter/v13.0/512px/1f91d.png'
    }

    if(porcentage > 47 && porcentage <= 80){
        emoji = 'https://images.emojiterra.com/twitter/v13.0/512px/1f440.png'
    }

    if(porcentage > 80){
        emoji = 'https://images.emojiterra.com/twitter/v13.0/512px/1f468-1f469-1f467.png'
    }

let lienzo = Canvas.createCanvas(700, 250)
let ctx = lienzo.getContext('2d')
let img1 = await Canvas.loadImage(user1)
let img2 = await Canvas.loadImage(user2)
let emoji2 = await Canvas.loadImage(emoji)


  ctx.drawImage(img1, 25, 25, 200, 200)

  ctx.drawImage(emoji2, 250, 25, 200, 200)

  ctx.drawImage(img2, 480, 25, 200, 200)

return lienzo.toBuffer();
}

module.exports = {
    shipImage
}