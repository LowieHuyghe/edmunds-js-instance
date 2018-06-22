import {
  Edmunds,
  LoggingServiceProvider,
  FileSystemServiceProvider,
  DatabaseServiceProvider,
  CacheServiceProvider
} from 'edmunds'
import { route } from '../app/http/routes'
import Handler from '../app/errors/handler'
import * as errorHandler from 'errorhandler'
import * as appRootPath from 'app-root-path'

export function bootstrap (): Edmunds {
  const edmunds = new Edmunds(appRootPath.path)

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
  if (edmunds.isDevelopment()) {
    edmunds.app.use(errorHandler())
  }
  edmunds.app.use(Handler.func())

  return edmunds
}
