const Canvas = require("canvas");
const Discord = require("discord.js")
const emojiRegex = require('emoji-regex/RGI_Emoji.js');

/**
* @date 2021-08-27
* @param {String} user1 | User 1 Avatar
* @param {String} user2 | User 2 Avatar
* @param {Number} porcentage | Porcentage of love
* @returns {Buffer}
*/

async function shipImage(user1, user2, porcentage){
    
    if(!porcentage) throw new TypeError("Porcentage was not set.")
    if(!user1) throw new TypeError("User 1 Avatar was not set")
    if(!user2) throw new TypeError("User 2 Avatar was not set")
    if(typeof user1 !== "string") throw new TypeError("User 1 Avatar isn't a string")
    if(typeof user2 !== "string") throw new TypeError("User 2 Avatar isn't a string")
    if(typeof porcentage !== "number") throw new TypeError("Porcentage isn't a string")

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


/**
* @date 2021-08-27
* @param {String} text | Text to convert
* @returns {String}
*/
function emojify(text) {
  if(!text) throw new TypeError("Text isn't set.")
  if(typeof text == "string") throw new TypeError("Text isn't a string.")
  let customEmoteRegex = /^(:[^:\s]+:|<:[^:\s]+:[0-9]+>|<a:[^:\s]+:[0-9]+>)+$/g;
  let emoteRegex = emojiRegex();
  let chars = {
            '0': ':zero:',
            '1': ':one:',
            '2': ':two:',
            '3': ':three:',
            '4': ':four:',
            '5': ':five:',
            '6': ':six:',
            '7': ':seven:',
            '8': ':eight:',
            '9': ':nine:',
            '#': ':hash:',
            '*': ':asterisk:',
            '?': ':grey_question:',
            '!': ':grey_exclamation:',
            ' ': '   '
        }
        const text1 = text.toLowerCase().split('').map(letter => {
            if (/[a-z]/g.test(letter)) {
                return `:regional_indicator_${letter}:`
            } else if (chars[letter]) {
                return `${chars[letter]}`
            }
            return letter;
        }).join('');

        return text1;
    }




module.exports = {
    shipImage, emojify
}