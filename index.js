const Discord = require('discord.js')
const { Client, Intents } = require('discord.js')
const { CommandManager, EventManager } = require('discord-bot-create')
const client = new Discord.Client({
    intents: ['MessageContent', 'GuildMessages', 'Guilds']
});

client.on('ready', () => {
    console.log('El bot se ha conectado')
});
const comandos = new CommandManager()
const event = new EventManager()
comandos.definirPrefijoPorDefecto('>>')
comandos.cargarComandosDesdeDirectorio('./commands')
event.CargarEventosDesdeDirectorio(client, './event')

client.on('messageCreate', (message) => {
    if(!message.content.startsWith(comandos.prefijoPorDefecto)) return;
    comandos.ejecutarComando(client, message)
    }
)

client.login(TuTokenDelBot)
