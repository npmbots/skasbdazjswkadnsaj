# Collection Code from BotIndo#9919
>My suggest do not copas my code if you don't have a skill :v

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

bot.login('SECRET TOKEN')
\n
