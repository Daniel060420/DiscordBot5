module.exports = {
    nombre: 'ping',
    premium: false,
    developer: false,
    descripcion: 'Si pones ping te responde con pong',
    categoria: 'otros',
    usage: '>>ping',
    alias: [],
    ejecutar: async (client, message, args) => {
        message.reply('pong');
    }
}
