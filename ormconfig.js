const config = require('config')

let instances = []
if (config.has('database.instance')) {
  instances = [config.get('database.instance')]
} else if (config.has('database.instances')) {
  instances = config.get('database.instances')
}
// node-config leaves some traces on the object that don't combine
// well with TypeORM
instances = JSON.parse(JSON.stringify(instances))

module.exports = instances
