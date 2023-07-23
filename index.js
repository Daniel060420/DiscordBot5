const Discord = require('discord.js')
const { Client, Intents } = require('discord.js')

const client = new Discord.Client({
    intents: ['MessageContent', 'GuildMessages', 'Guilds']
});

client.on('ready', () => {
    console.log('El bot se ha conectado')
});

client.on('messageCreate', (message) => {
    if(message.content.startsWith('ping')){
        message.channel.send('pong')
    }
})
client.login('TuTokenDelBot')