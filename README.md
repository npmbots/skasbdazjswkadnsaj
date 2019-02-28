# YANG COPAD DOSA DOSA DOSA DOSA COPAS DOCA
>If you copas my code you are killed by me :v
>This is my codeeeee

```js
const dc = require('discord.js')
const bot = new dc.Client({disableEveryone: true})

bot.on('ready', async () => {
console.log('Your Console!')
bot.user.setActivity('Your Activity!')
});

bot.on('message', async (message) => {
const msg = message.content.toUpperCase();

if (message.content.startsWith('!ping')) {
message.channel.send('Pong!')
}
// Soon use command handler !
});

bot.login('SECRET TOKEN')```
