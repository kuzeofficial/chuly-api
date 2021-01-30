'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')
var options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  autoIndex: false, // Don't build indexes
  poolSize: 10, // Maintain up to 10 socket connections
  // If not connected, return errors immediately rather than waiting for reconnect
  bufferMaxEntries: 0
};

mongoose.connect('mongodb://root:root@cluster0-shard-00-00.vazjq.mongodb.net:27017,cluster0-shard-00-01.vazjq.mongodb.net:27017,cluster0-shard-00-02.vazjq.mongodb.net:27017/test?ssl=true&replicaSet=atlas-seci1i-shard-0&authSource=admin&retryWrites=true&w=majority', options , (err, res) => {
  if (err) {
    return console.log(`Error al conectar a la base de datos: ${err}`)
  }
  console.log('Conexión a la base de datos establecida...')

  app.listen(config.port, () => {
    console.log(`API REST corriendo en http://localhost:${config.port}`)
  })
})
