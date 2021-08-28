# BetterDiscordJS

BetterDiscordJS is a NPM package who will help you to make your bots better.

# Usage

In this examples we are assuming that you added BetterDiscordJS as `util`.

```js
const util = require("betterdiscordjs");
```

## Ship Image

```js
let data = await util.shipImage("avatar 1", "avatar 2", 50);
```

**Parameters**

1. Avatar of user 1.
2. Avatar of user 2.
3. Porcentage of love.

**Additional data**

- This method is async.

**Returned Information**

This will return a `Buffer`, so you need to compress it with MessageAttachment.

```js
new Discord.MessageAttachment(data, "hi.png");
```

## Emojify

```js
let data = util.emojify("text");
```

**Parameters**

1. Text to emojify.

**Additional data**

- This method is **not** async.

**Returned Information**

This will return a unformatted text, but is ready to use in discord.
