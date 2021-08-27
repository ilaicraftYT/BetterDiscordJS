const test = require("./index")

const test1 = async() => {
let asd = await test.shipImage('https://cdn.discordapp.com/avatars/608029420929679370/8ff32e8b4e77b783e24e413dc1440276.png', 'https://cdn.discordapp.com/avatars/608029420929679370/8ff32e8b4e77b783e24e413dc1440276.png', 0)
console.log(asd)
return asd;
}

const {
  Client,
  Intents,
  MessageAttachment
} = require("discord.js");

const client = new Client({
    intents: 0
});


client.on("ready", () => {
    console.log("ready")
})
client.on("message", async(message) => {
    if(message.content == ".test1"){
        let jaja = await test1();
        console.log(jaja)
        let asd2 = new MessageAttachment(jaja, "hi.png")
        message.channel.send(asd2)
    }
})

client.login("")