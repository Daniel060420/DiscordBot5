const comandos = require('../index.js')
module.exports = {
    nombre: 'messageCreate',
    ejecutar: async (client, message) => {
        console.log('Se ha enviado el mensaje: ', message.content)
        if(!message.content.startsWith(comandos.prefijoPorDefecto)) return;
        comandos.ejecutarComando(client, message)
    }
}
