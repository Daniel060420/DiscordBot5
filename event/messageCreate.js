module.exports = {
  nombre: "messageCreate",
  ejecutar: async (client, message) => {
    console.log('Se ha enviado el mensaje: ', message.content)
}}
