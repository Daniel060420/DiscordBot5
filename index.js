//Importacion de librerias necesarias
const Discord = require('discord.js')
const { Client, Intents } = require('discord.js')
const { CommandManager, EventManager } = require('discord-bot-create')
const CONFIG = require('./config.json')

//Creacion del cliente de discord
const client = new Discord.Client({
    intents: ['MessageContent', 'GuildMessages', 'Guilds']
});

//Creacion de clases
const comandos = new CommandManager()
const event = new EventManager()

//Command handler
comandos.definirPrefijoPorDefecto(CONFIG.prefix)
comandos.cargarComandosDesdeDirectorio('./commands')

//Exportacion de modulos necesarios
module.exports = comandos;

//Event handler
event.cargarEventosDesdeDirectorio(client, './event')


//inicializar el bot
client.login(CONFIG.token)
