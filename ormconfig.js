const config = require('config')

let instances = []
if (config.has('database.instance')) {
  instances = [config.get('database.instance')]
} else if (config.has('database.instances')) {
  instances = config.get('database.instances')
}

module.exports = instances
