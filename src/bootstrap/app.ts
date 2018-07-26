import {
  Edmunds,
  LoggingServiceProvider,
  FileSystemServiceProvider,
  DatabaseServiceProvider,
  CacheServiceProvider
} from 'edmunds'
import { route } from '../app/http/routes'
import Handler from '../app/errors/handler'
import * as path from 'path'

export function bootstrap (): Edmunds {
  const edmunds = new Edmunds(path.resolve(__dirname, '..', '..'))

  // Template engine
  edmunds.app.set('view engine', 'pug')

  // Service Providers
  edmunds.register(LoggingServiceProvider)
  // edmunds.register(FileSystemServiceProvider)
  // edmunds.register(DatabaseServiceProvider)
  // edmunds.register(CacheServiceProvider)

  // Add the routes
  route(edmunds)

  // Error handling
  edmunds.app.use(Handler.func())

  return edmunds
}
