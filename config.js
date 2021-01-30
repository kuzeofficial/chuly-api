module.exports = {
  port: process.env.PORT || 3001,
  db: process.env.MONGODB_URI || 'mongodb://root:root@cluster0-shard-00-00.vazjq.mongodb.net:27017,cluster0-shard-00-01.vazjq.mongodb.net:27017,cluster0-shard-00-02.vazjq.mongodb.net:27017/test?ssl=true&replicaSet=atlas-seci1i-shard-0&authSource=admin&retryWrites=true&w=majority',
  SECRET_TOKEN: 'miclavedetokens'
}
