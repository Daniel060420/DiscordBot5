//Importacion de librerias necesarias
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js')
const { CommandManager, EventManager, GuildMemberAddManager, GuildMemberRemoveManager } = require('discord-bot-create')
const CONFIG = require('./config.json')

//Creacion del cliente de discord
const client = new Discord.Client({
    intents: ['MessageContent', 'GuildMessages', 'Guilds', 'GuildMembers']
});

//Creacion de clases
const comandos = new CommandManager()
const event = new EventManager()
const add = new GuildMemberAddManager(client)
const remove = new GuildMemberRemoveManager(client)

//Command handler
comandos.definirPrefijoPorDefecto(CONFIG.prefix)
comandos.cargarComandosDesdeDirectorio('./commands')
//Exportacion de modulos necesarios
module.exports = comandos;

//Event handler
event.cargarEventosDesdeDirectorio(client, './event')

//Bienvenidas
add.setWelcomeChannelName('general')
add.setWelcomeMessage('Que tal {user.name}, bienvenido a la comunidad de {server.name}. Eres el usuario {server.member.count}')
add.initialize()

//despedidas
remove.setGoodbyeChannelName('general')
remove.setGoodbyeMessage('Adios {user.name}, te damos la despedida desde {server.name}')
remove.initialize()

//inicializar el bot
client.login(CONFIG.token)
