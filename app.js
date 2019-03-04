require('dotenv').config();
const Discord = require("discord.js")
const bot = new Discord.Client({disableEveryone: true})
 const config = require("./config.json")
 const fs = require("fs")
 const Enmap = require("enmap");
 const prefix = "!"
 const RendDev = require('rendapi.js')
 const dbd = require("dbdapi.js")
 const rend = new RendDev("BOT_ID","YOUR_ID")
 const DBD = new dbd("DBD TOKEN","BOT ID","YOUR ID")

 bot.on("ready", async () => {
 console.log(`Iam Ready\n Running As ${bot.user.tag}\n In ${bot.guilds.size} Server`)
 bot.user.setActivity("Termux1.0.0----With prefix !", { type: "LISTENING"});
})
 
 bot.on('guildCreate', async (guild)  => {
console.log(`This bot added to ${guild.name}`);
 	})
 
 bot.on('guildDelete', async (guild)  => {
 	console.log(`RIP Kicked from ${guild.name}`)
 })
 
 

 
bot.on("message", async (message) => {
	//var serverQueue = bot.queue.get(message.guild.id);
	cost msg = message.content.toLowerCase()
const args = message.content.slice(prefix.length).trim().split(" ")
 // Message split into separate objects for example message containing 'Hello there!' would look like this: ["Hello", "there!"]
 const command = args.shift().toLowerCase();




if (msg === `<@${bot.user.id}>` || msg === `<@!${bot.user.id}>` || msg === "!prefix" || msg === `${prefix}prefix`) {
	message.reply(`My Prefix in this server is ***!***`)
	}

 // Command with prefix
  
if (message.author.bot) return; 
if (message.channel.type === 'dm') return; 

	
	const sender = message.author;

	


if (message.content.startsWith("!ping")) {
message.channel.send("Pong!")
}

if (message.content.startsWith("!hai")) {
message.channel.send("Hai Juga!")
}
if (message.content === '!join') {
		bot.emit('guildMemberAdd', message.member || await message.guild.fetchMember(message.author)).then(u => {
			message.channel.send(u)
			})
	}

if (message.content.startsWith("!reload")) {

console.clear()

bot.login('SECRET TOKEN')
bot.destroy()
message.channel.send("Reloaded!!")
}

if (message.content.startsWith("!dbd")) {
	const user = args.join(" ")
	if (!user) return message.channel.send('Bot ID ?? please add bot id in here for ex! = **!dbd 452673718699950090**')
	
var data = await DBD.getBot(user);
		if (!data || data === undefined) return message.channel.send('Sorry that bot is not registered in Dbd!')
		message.channel.send(`**( ${data.bot.tag} ) by ( ${data.owner.tag} ) with prefix ( ${data.prefix} )**`)
		
}


try {
	
	let commandFile = require(`./commands/${command}.js`)
	commandFile.run(bot, message, args) 
	} catch (e) {
		console.log(e.message)
		} finally {
			console.log(`${message.author.tag} Using command ${command}`)
			}
	




})

bot.on('guildMemberAdd', member => {
	console.log(member)
	const role = member.guild.roles.find('name', 'UserVerified') 
	if (!role) return; 
	member.addRole(role)
	const channel = member.guild.channels.find('name', 'bot-spam') 
	if (!channel)  return; 
	channel.send(`Welcome **${member.user.tag}**\nHave A Nice Day in this server\n Read : #rules\nWE ARE NOW HAVE = **${member.guild.memberCount} Members**`)
	//member.author.send(`Hey **${member.user.tag}** Welcome to **${member.guild.name}** Don't forget read Rules in channel #rules!`).then(o => {
		//channel.send(`This Message for you **${member.user.tag}**\n\n ${o}`)

	
	});
bot.on('guildMemberRemove', member => {
	console.log(member)
	const channel = member.guild.channels.find('name', 'bot-spam') 
	if (!channel)  return; 
	channel.send(`GoodByee **${member.user.tag}**\nSee you next trip! \n \nWE ARE NOW HAVE = **${member.guild.memberCount} Members**`)
	//member.author.send(`Hey **${member.user.tag}** See you next trip! We Sorry if we have a problem with you :C\n\n ***From ${member.guild.name}***`).then(i => {
		//channel.send(`This Message for you **${member.user.tag}**\n\n ${i}`)
		
	
	
	})
  bot.login('SECRET TOKEN')
